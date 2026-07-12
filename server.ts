/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const INQUIRIES_FILE = path.join(process.cwd(), "inquiries.json");

app.use(express.json());

// Initialize Inquiries File with Seed Data if empty or not exist
if (!fs.existsSync(INQUIRIES_FILE)) {
  const initialData = [
    {
      id: "inq_1",
      name: "Rajesh Trivedi",
      phone: "9920300750",
      preferredTime: "Tomorrow Afternoon, 3:00 PM",
      area: "Malad West, Mumbai",
      frameId: "tr90-frames",
      frameName: "TR90 Frames",
      lensType: "Single Vision (Blue Coating)",
      status: "resolved",
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      notes: "Customer wants blue-cut screen lenses. Preferred home trial was successful."
    },
    {
      id: "inq_2",
      name: "Meena Sharma",
      phone: "9812345678",
      preferredTime: "Sunday Morning",
      area: "Bandra Sea Face, Mumbai",
      frameId: "metal-frames",
      frameName: "Metal Frames",
      lensType: "Dual Vision (Progressive starting ₹1500)",
      status: "pending",
      createdAt: new Date().toISOString(),
      notes: "Enquired via visual stylist consultant. Wants to try premium thin wireframe styles."
    }
  ];
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(initialData, null, 2));
}

// Read inquiries helper
const getInquiries = (): any[] => {
  try {
    const data = fs.readFileSync(INQUIRIES_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Write inquiries helper
const saveInquiries = (inquiries: any[]) => {
  fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2));
};

// Initialize Gemini SDK safely
const getGeminiClient = (): GoogleGenAI | null => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.warn("GEMINI_API_KEY is not set or using placeholder.");
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

/* =========================================
   API ROUTES
   ========================================= */

// Get all inquiries (for Admin Portal dashboard)
app.get("/api/inquiries", (req, res) => {
  try {
    const data = getInquiries();
    // Sort by newest first
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load inquiries" });
  }
});

// Post a new inquiry (called by Home Trial form or direct Reserve button)
app.post("/api/inquiries", (req, res) => {
  try {
    const { name, phone, preferredTime, area, frameId, frameName, lensType, notes } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and Phone number are required." });
    }

    const inquiries = getInquiries();
    const newInquiry = {
      id: "inq_" + Math.random().toString(36).substring(2, 9),
      name,
      phone,
      preferredTime: preferredTime || "As soon as possible",
      area: area || "Not specified",
      frameId,
      frameName,
      lensType,
      status: "pending",
      createdAt: new Date().toISOString(),
      notes: notes || "Direct website request."
    };

    inquiries.push(newInquiry);
    saveInquiries(inquiries);

    res.status(201).json({ success: true, inquiry: newInquiry });
  } catch (error) {
    res.status(500).json({ error: "Failed to record inquiry." });
  }
});

// Update an inquiry's status (resolved vs pending)
app.patch("/api/inquiries/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const inquiries = getInquiries();
    
    const index = inquiries.findIndex((inq) => inq.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Inquiry not found." });
    }

    if (status) inquiries[index].status = status;
    if (notes !== undefined) inquiries[index].notes = notes;

    saveInquiries(inquiries);
    res.json({ success: true, inquiry: inquiries[index] });
  } catch (error) {
    res.status(500).json({ error: "Failed to update inquiry." });
  }
});

// Delete an inquiry (for clean management)
app.delete("/api/inquiries/:id", (req, res) => {
  try {
    const { id } = req.params;
    const inquiries = getInquiries();
    const filtered = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(filtered);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete inquiry." });
  }
});

// Conversational AI Eyewear Styling Consultant and Home Trial Scheduler
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, selectedFrame, extractedSoFar } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback response if API key is not configured yet
      const textResponse = "Hello! I am Meena, your virtual stylist. It seems my AI brain is warming up (API key not fully set), but don't worry! You can book a home trial immediately by entering your details in the simple form, or calling us directly at 9920300750. What frame style can I help you with today?";
      return res.json({
        message: textResponse,
        name: extractedSoFar?.name || null,
        phone: extractedSoFar?.phone || null,
        time: extractedSoFar?.time || null,
        area: extractedSoFar?.area || null,
        complete: false
      });
    }

    // Format chat history for Gemini
    const lastUserMessage = messages[messages.length - 1]?.text || "";
    
    const systemPrompt = `You are 'Meena', the warm, professional, highly expert AI Styling Consultant for 'RAJ & SONS', a family-owned optical heritage brand since 1992 (A Venture by Meena Technologies).
Your goal is to guide the user in choosing beautiful spectacle frames and booking a premium Home Trial in a fun, conversational, and completely effortless way.

CRITICAL CONVERSATIONAL RULES:
1. Speak in an elegant, premium, luxury brand tone (like a high-end Swiss watch or bespoke boutique consultant).
2. Keep your text responses concise and highly polite. NEVER dump long paragraphs of questions. Ask ONE simple thing at a time.
3. Your mission is to gather these 4 details for scheduling their Home Trial:
   - User's Name
   - User's Mobile Phone Number
   - Preferred Date & Time (e.g. tomorrow evening, Saturday morning)
   - Home Delivery Area/Neighborhood (we deliver direct to doorstep)
4. Do not ask for details like they are a chore. Integrate them naturally. For example:
   "To bring these gorgeous frames to your doorstep, may I know your name?"
   "Thank you! And what phone number can our eyewear stylist reach you on when they arrive?"
5. You must look at what was already extracted so far:
   - Name: ${extractedSoFar?.name || "Not extracted yet"}
   - Phone: ${extractedSoFar?.phone || "Not extracted yet"}
   - Time: ${extractedSoFar?.time || "Not extracted yet"}
   - Area: ${extractedSoFar?.area || "Not extracted yet"}
6. If the user mentions any of these, extract them immediately.
7. Selected frame context: ${selectedFrame ? `User is interested in trying the '${selectedFrame}'` : "No specific frame chosen yet, guide them to pick one."}
8. If all 4 details (Name, Phone, Time, Area) are successfully extracted, mark "complete" as true and write a warm, celebratory message confirming that their visual trial is booked and our expert is preparing the collection.

You MUST respond ONLY in valid JSON conforming exactly to this schema:
{
  "message": "Your conversational response to the user. Ask the next question or give friendly advice.",
  "name": "The extracted user's name (string, or null if not provided yet)",
  "phone": "The extracted phone number (string, or null if not provided yet)",
  "time": "The extracted date/time preference (string, or null if not provided yet)",
  "area": "The extracted delivery area (string, or null if not provided yet)",
  "complete": true if all 4 fields are now successfully filled, false otherwise
}

Respond ONLY with raw JSON. No markdown backticks, no comments.`;

    const chatHistoryParts = messages.map((m) => {
      return {
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      };
    });

    // We add the system instruction in config
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        ...chatHistoryParts.slice(-6), // Send last 6 messages to keep context and tokens light
        { role: "user", parts: [{ text: `Process user input: "${lastUserMessage}". Return the updated JSON state.` }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            message: { type: Type.STRING, description: "The natural text response to show the user." },
            name: { type: Type.STRING, nullable: true, description: "Extracted name of the person." },
            phone: { type: Type.STRING, nullable: true, description: "Extracted phone number." },
            time: { type: Type.STRING, nullable: true, description: "Extracted date/time preference." },
            area: { type: Type.STRING, nullable: true, description: "Extracted delivery area." },
            complete: { type: Type.BOOLEAN, description: "True if name, phone, and area are filled." }
          },
          required: ["message", "name", "phone", "time", "area", "complete"]
        }
      }
    });

    const resultText = response.text || "{}";
    const parsedResult = JSON.parse(resultText);
    
    // If the booking is marked complete and wasn't complete before, save it to the inquiries list automatically!
    if (parsedResult.complete && (!extractedSoFar?.name || !extractedSoFar?.phone)) {
      const inquiries = getInquiries();
      const newInquiry = {
        id: "inq_" + Math.random().toString(36).substring(2, 9),
        name: parsedResult.name,
        phone: parsedResult.phone,
        preferredTime: parsedResult.time || "Scheduled via AI",
        area: parsedResult.area || "Scheduled via AI",
        frameId: selectedFrame ? selectedFrame.replace(/\s+/g, '-').toLowerCase() : undefined,
        frameName: selectedFrame || "Multi-Frame Consultation",
        lensType: "To be discussed at home trial",
        status: "pending",
        createdAt: new Date().toISOString(),
        notes: "Booked conversationally via Meena AI Stylist."
      };
      inquiries.push(newInquiry);
      saveInquiries(inquiries);
    }

    res.json(parsedResult);
  } catch (error: any) {
    console.error("Chat API Error:", error);
    res.status(500).json({
      message: "I apologize, but our premium styling link is experiencing heavy volume. Let us continue, or call us directly at 9920300750!",
      name: null,
      phone: null,
      time: null,
      area: null,
      complete: false
    });
  }
});

/* =========================================
   VITE & STATIC SERVING SETUP
   ========================================= */

async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[RAJ & SONS] Luxury server active on port ${PORT}`);
  });
}

bootstrap();
