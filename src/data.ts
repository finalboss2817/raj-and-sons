/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FrameProduct, BlogArticle, SmartGlassesVideo } from "./types";

// Import local image assets for reliable Vite production building and bundling
import heroImage from "./assets/images/hero_eyewear_1783875347272.jpg";
import tr90Image from "./assets/images/tr90_spectacles_1783875364422.jpg";
import metalImage from "./assets/images/gold_metal_spectacles_1783875378333.jpg";
import acetateImage from "./assets/images/tortoise_acetate_spectacles_1783875392040.jpg";

// Dynamic generated assets loaded securely
export const GENERATED_IMAGES = {
  hero: heroImage,
  tr90: tr90Image,
  metal: metalImage,
  acetate: acetateImage,
};

export const SMART_GLASSES_VIDEOS: SmartGlassesVideo[] = [
  {
    id: "mt5-ultra",
    title: "Next-Generation Smart AI Glasses (MT5 & MT5 Ultra)",
    subtitle: "First-Person View • AI Smart Assistant • Surround Sound Audio • Multi-Language Translation",
    videoSrc: "/assets/aistudio/WhatsApp_Video_2026-11-07_at_1.29.40_PM_f1250dfa.mp4",
    model: "MT5 Ultra & MT5 Series",
    duration: "0:15",
    tags: ["4K FPV Camera", "AI Chipset", "Surround Sound", "Real-Time Translation", "Leather Power Case"],
    description: "Equipped with an advanced AI coprocessor, open-ear acoustic surround sound channels, and a companion luxury genuine leather charging case. Experience hands-free photos, real-time voice translation, and AI assistance on the go.",
    highlights: [
      "First-Person View 4K camera capture",
      "Integrated AI Smart Assistant coprocessor",
      "Surround sound open-ear acoustic channels",
      "Instant multi-language simultaneous translation",
      "Handcrafted leather charging case with magnetic power clasp"
    ]
  },
  {
    id: "s2-max-presentation",
    title: "AIMB S2 Max Smart Spectacles Unboxing & Demo",
    subtitle: "3-in-1 Interchangeable Lenses • RDGLASS App Connectivity • AI Dialogue Translation",
    videoSrc: "/assets/aistudio/WhatsApp_Video_2026-11-07_at_1.29.44_PM_1bc7769c.mp4",
    model: "AIMB S2 Max (White, Black, Blue)",
    duration: "0:59",
    tags: ["3-in-1 Lenses", "Red Key On/Off", "RDGLASS Mobile App", "AI Image Recognition", "Touch Swipes"],
    description: "Complete presentation of the new AIMB S2 Max. Features 3-in-1 lens modularity (clear, polarized sunglass clip, blue tint), Red-Button intuitive power, mobile app pairing, dialogue translation, voice transcription, and temple touch gestures.",
    highlights: [
      "Modular 3-in-1 quick-swap lens system with polarized & colored clips",
      "Full RDGLASS companion app integration for iOS & Android",
      "AI Image Recognition & instant camera preview",
      "Dialogue translation & simultaneous audio interpretation",
      "Touch gesture controls: Double tap play/pause, swipe for volume, long press skip"
    ]
  },
  {
    id: "4k-uv-smart-glasses",
    title: "4K HD AI Glasses with Photochromic UV Color Changing Lenses",
    subtitle: "Realistic 4K Shooting • 32GB Storage • Magnetic Snap Charge • Dual Stereo Design",
    videoSrc: "/assets/aistudio/WhatsApp_Video_2026-11-07_at_1.29.39_PM_1085432f.mp4",
    model: "4K AI Vision Pro Series",
    duration: "0:26",
    tags: ["4K HD Camera", "32GB Memory", "UV Auto Color Change", "Magnetic Charging", "Slide Switch"],
    description: "Captures true-to-life 4K first-person videos directly to onboard 32GB high-speed memory. Features revolutionary photochromic lenses that darken automatically under ultraviolet sunlight and clear up indoors.",
    highlights: [
      "4000 Ultra High-Definition camera with realistic color science",
      "32GB onboard flash storage for direct video and photo recording",
      "UV automatic color-changing photochromic transition lenses",
      "Magnetic pin-dock quick charging system",
      "Tactile slide on/off switch & dual-channel stereo acoustic drivers"
    ]
  }
];

export const FRAME_CATEGORIES: FrameProduct[] = [
  // --- NEW HAUTE COUTURE RUNWAY PIECES (AUTHENTIC STOCK) ---
  {
    id: "prada-b17-runway",
    name: "Prada B17 Runway Black",
    category: "Haute Couture",
    subCategory: "Haute Couture",
    designerBrand: "Prada Milano",
    modelCode: "B17 Runway",
    startingPrice: 3499,
    description: "Bold architectural black acetate silhouette showcasing the iconic silver Prada Milano triangle emblem. Packaged with the authentic textured Saffiano red & black hard case and luxury presentation box.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.41_PM_54537955.jpeg",
    features: ["Prada Milano Silver Inlay", "Signature Saffiano Red Hard Case", "High-Gloss Heavyweight Acetate", "Made in Italy CE Hallmark"],
    availableColors: ["Jet Black Runway Edition"],
    packageIncludes: "Prada Saffiano Red/Black Hard Case + Luxury Gift Box + Microfiber Dust Cloth",
    badge: "Runway Collection",
    isNew: true
  },
  {
    id: "cartier-135-rimless",
    name: "Cartier 135 Rimless Heritage",
    category: "Haute Couture",
    subCategory: "Haute Couture",
    designerBrand: "Cartier Paris",
    modelCode: "135 Rimless",
    startingPrice: 4299,
    description: "Ultra-prestigious 18k gold-finish fluted temples with double C-decor hinges and beveled hexagonal rimless sun lenses. Includes Cartier's signature royal burgundy leather case and red presentation box.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.41_PM__2__8e6cf90b.jpeg",
    features: ["18k Gold Plated Fluted Temples", "Diamond-Beveled Hexagonal Lenses", "Signature Burgundy Leather Case", "Cartier Paris Engraved Hardware"],
    availableColors: ["18k Gold / Smoky Slate Tint"],
    packageIncludes: "Cartier Red Luxury Box + Royal Burgundy Leather Case + Microfiber Cloth",
    badge: "Ultra Luxury",
    isNew: true
  },
  {
    id: "louis-vuitton-984-millionaire",
    name: "Louis Vuitton 984 Millionaire",
    category: "Haute Couture",
    subCategory: "Haute Couture",
    designerBrand: "Louis Vuitton",
    modelCode: "984 Millionaire",
    startingPrice: 3899,
    description: "The iconic deep square aviator silhouette with a polished gold top brow bar, LV monogram engraving, and warm amber-yellow sun lenses. Packaged with brown leather capsule and saffron LV box.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.42_PM_d395e0bb.jpeg",
    features: ["Gold Monogram Metal Brow Bar", "Amber High-Contrast Lenses", "Sculpted Beveled Temples", "LV Hard Capsule & Saffron Box"],
    availableColors: ["Gloss Black / Warm Amber / Gold Bar"],
    packageIncludes: "Louis Vuitton Saffron Box + Brown Leather Capsule Case + Velvet Dust Pouch",
    badge: "Collector's Icon",
    isNew: true
  },
  {
    id: "dita-844-titanium",
    name: "DITA 844 Titanium & Woodgrain",
    category: "Haute Couture",
    subCategory: "Haute Couture",
    designerBrand: "DITA Optical",
    modelCode: "844 Select",
    startingPrice: 3299,
    description: "Handcrafted round-octagonal titanium wire chassis with rich hand-finished woodgrain acetate temples and warm gradient lenses. Includes gold-crested DITA presentation box and structured magnetic case.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.41_PM__1__ffff1d1d.jpeg",
    features: ["Japanese Titanium Chassis", "Hand-Finished Woodgrain Temples", "Dual-Tone Gradient Lenses", "Gold-Embossed Crest Case"],
    availableColors: ["Gunmetal / Espresso Woodgrain"],
    packageIncludes: "DITA Optical Crest Box + Hard Clamshell Case + Microfiber Pouch",
    badge: "Bespoke Titanium",
    isNew: true
  },
  {
    id: "miu-miu-073-butterfly",
    name: "Miu Miu 073 Butterfly Wing",
    category: "Haute Couture",
    subCategory: "Haute Couture",
    designerBrand: "Miu Miu Milano",
    modelCode: "073 Butterfly",
    startingPrice: 3199,
    description: "Delicate rimless butterfly silhouette featuring gradient rose blush lenses, polished gold bridge brackets, and pastel pink temples. Packaged with Miu Miu signature blush pink velvet case and presentation box.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.43_PM__1__92365ff2.jpeg",
    features: ["Rimless Butterfly Wing Cut", "Blush Pink Gradient Lenses", "Polished Gold Bridge Clamp", "Miu Miu Signature Blush Velvet Case"],
    availableColors: ["Blush Pink Gradient / Gold Accents"],
    packageIncludes: "Miu Miu Blush Pink Box + Soft Suede Hard Case + Velvet Pouch",
    badge: "Haute Couture",
    isNew: true
  },

  // --- NEW FAHRENHEIT ARCHITECTURAL OPTICAL SERIES ---
  {
    id: "fahrenheit-fa-2306",
    name: "Fahrenheit FA-2306 Custom Core",
    category: "Fahrenheit Series",
    subCategory: "Fahrenheit Series",
    designerBrand: "Fahrenheit Eyewear",
    modelCode: "FA-2306",
    startingPrice: 1299,
    description: "Refined square optical frame cut from premium Italian acetate with an exposed custom-chiseled temple core wire. Features dual-pin rivets and precision 5-barrel hinges.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.40_PM_a40a6fae.jpeg",
    features: ["Visible Chiseled Core Wire", "Handcrafted Italian Acetate", "5-Barrel Precision Hinges", "Dual-Pin Rivet Accents"],
    availableColors: ["C2: Dark Demi Tortoise & Turquoise", "C3: Sapphire Crystal Blue"],
    packageIncludes: "Fahrenheit Magnetic Hard Case + Optical Lens Cloth",
    badge: "Architectural Acetate",
    isNew: true
  },
  {
    id: "fahrenheit-2271",
    name: "Fahrenheit 2271 Modern Classic",
    category: "Fahrenheit Series",
    subCategory: "Fahrenheit Series",
    designerBrand: "Fahrenheit Eyewear",
    modelCode: "2271",
    startingPrice: 1199,
    description: "Ergonomic square optical frame with an architectural beveled brow, comfortable saddle bridge, and featherlight structural balance.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.40_PM__1__9edbc7b0.jpeg",
    features: ["Beveled Modern Brow", "Saddle Nose Contour", "Matte & Gloss Dual Options", "All-Day Working Balance"],
    availableColors: ["C1: Jet Black", "C2: Dark Havana Tortoise", "C3: Matte Wood Mahogany"],
    packageIncludes: "Fahrenheit Protective Eyewear Case + Microfiber Cloth",
    badge: "Executive Daily",
    isNew: true
  },
  {
    id: "fahrenheit-fa-7848",
    name: "Fahrenheit FA-7848 Double Bridge",
    category: "Fahrenheit Series",
    subCategory: "Fahrenheit Series",
    designerBrand: "Fahrenheit Eyewear",
    modelCode: "FA-7848",
    startingPrice: 1349,
    description: "Contemporary double-bridge square acetate frame engineered for bold intellectual presence. Available in four statement chromatic acetates including olive and deep navy.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.43_PM_164597d0.jpeg",
    features: ["Architectural Double Top Bridge", "Deep Chromatic Translucent Acetate", "Reinforced Temple Hinges", "Signature V-Insignia on Lens"],
    availableColors: ["C1: Pitch Black", "C2: Slate Gunmetal", "C5: Royal Navy Blue", "C4: Forest Olive Green"],
    packageIncludes: "Fahrenheit Travel Case + Optical Inspection Certificate",
    badge: "Statement Series",
    isNew: true
  },
  {
    id: "fahrenheit-fa-7850",
    name: "Fahrenheit FA-7850 Angular Statement",
    category: "Fahrenheit Series",
    subCategory: "Fahrenheit Series",
    designerBrand: "Fahrenheit Eyewear",
    modelCode: "FA-7850",
    startingPrice: 1399,
    description: "High-fashion angular geometric eyeglasses featuring an elevated brow slant and rich vibrant color formulations. Perfect for progressive and single-vision wearers.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.44_PM_b72e7fb2.jpeg",
    features: ["Angular Geometric Slant", "Rich Color-Infused Blocks", "Anti-Slip Ergonomic Temple Tips", "HD Optical Clarity Ready"],
    availableColors: ["C4: Crimson Amber Red", "C3: Royal Cobalt Blue"],
    packageIncludes: "Fahrenheit Hard Shell Case + Lens Cleaning Solution",
    badge: "Modern Avant-Garde",
    isNew: true
  },
  // --- NEXT-GEN AI SMART GLASSES SHOWROOM ITEM ---
  {
    id: "ai-smart-glasses-mt5",
    name: "Next-Gen AI Smart Glasses (MT5 Ultra & S2 Max)",
    category: "Smart AI",
    subCategory: "Smart AI",
    designerBrand: "Meena Tech AI Innovations",
    modelCode: "MT5 Ultra & S2 Max",
    startingPrice: 4999,
    description: "Next-generation smart eyewear with 4K First-Person View camera, AI Voice Assistant, 30+ language real-time dialogue translation, open-ear surround sound, photochromic UV lenses, and luxury leather charging case.",
    image: "/assets/aistudio/WhatsApp_Image_2026-11-07_at_1.29.41_PM_54537955.jpeg",
    features: ["4K FPV Video & Photo Recording", "Real-Time 30+ Language Dialogue Translation", "Dual Stereo Open-Ear Audio", "Photochromic Auto UV Lens Transitions", "Leather Charging Power Vault"],
    availableColors: ["Obsidian Black", "Frost White", "Denim Blue"],
    packageIncludes: "Leather Power Case + 3-in-1 Quick-Swap Lens Kit + Magnetic Snap Cable",
    badge: "Next-Gen Tech",
    isNew: true
  },

  {
    id: "tr90-frames",
    name: "TR90 Frames",
    category: "TR90",
    startingPrice: 449,
    description: "Engineered with Swiss memory polymer technology, these frames are remarkably lightweight, flexible, and resilient. Ideal for active lifestyles and durable daily wear.",
    image: GENERATED_IMAGES.tr90,
    features: ["Featherlight weight", "Unmatched flexibility", "Hypoallergenic", "Extreme durability"]
  },
  {
    id: "metal-frames",
    name: "Metal Frames",
    category: "Metal",
    startingPrice: 649,
    description: "Classic architectural silhouettes hand-crafted from premium lightweight alloys. Features rich metallic plating, adjustable nose pads, and durable temple joints.",
    image: GENERATED_IMAGES.metal,
    features: ["Architectural sleekness", "Premium metal plating", "Adjustable nose-pads", "Timeless silhouette"]
  },
  {
    id: "acetate-frames",
    name: "Acetate Frames",
    category: "Acetate",
    startingPrice: 899,
    description: "Luxurious, hand-polished organic acetate cut from block-laminates. Features deep gloss finishes and unique tortoiseshell and crystal textures that react beautifully to light.",
    image: GENERATED_IMAGES.acetate,
    features: ["Hand-polished gloss", "Rich organic material", "Unique natural patterns", "Excellent structural weight"]
  },
  {
    id: "fancy-frames",
    name: "Fancy Frames",
    category: "Fancy",
    startingPrice: 749,
    description: "Bold design statements combining contrasting accents, dual-tone finishes, and contemporary artistic detailing for those who treat eyewear as high-fashion curation.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    features: ["Avant-garde designs", "Contrast details", "Dual-tone styling", "Signature styling"]
  },
  {
    id: "magnetic-frames",
    name: "Magnetic Frames",
    category: "Magnetic",
    startingPrice: 999,
    description: "Seamless magnetic snap-on technology. Transform your clear optical prescription glasses into custom polarized sun-protecting spectacles instantly.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    features: ["Instant sun transformation", "Strong secure magnets", "Seamless integrated look", "Polarized clip lenses"]
  },
  {
    id: "womens-collection",
    name: "Women's Collection",
    category: "Women",
    startingPrice: 599,
    description: "A curation of elegant cat-eyes, soft round shapes, and delicate pastel acetates. Designed to gracefully accent facial contours with subtle jewelry-like detailing.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
    features: ["Graceful contours", "Jewelry-grade detail", "Feminine colorways", "Refined temple design"]
  },
  {
    id: "kids-collection",
    name: "Kids Collection",
    category: "Kids",
    startingPrice: 399,
    description: "Ultra-safe, highly flexible, non-toxic frames engineered to withstand school playgrounds and active play. Perfect fit and comfortable weight balance.",
    image: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?auto=format&fit=crop&w=600&q=80",
    features: ["Playground-proof flex", "Non-toxic materials", "Secure ergonomic fit", "Vibrant playful colors"]
  },
  {
    id: "rimless-frames",
    name: "Rimless Frames",
    category: "Rimless",
    startingPrice: 799,
    description: "Virtually invisible visual architecture. Lenses are mounted directly to delicate high-grade titanium bridges and temples, emphasizing the natural beauty of your face.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
    features: ["Near-zero visibility", "High-grade titanium parts", "Minimalist layout", "Superlight comfort"]
  },
  {
    id: "half-rim-frames",
    name: "Half Rim Frames",
    category: "Half Rim",
    startingPrice: 699,
    description: "The perfect balance of minimalist elegance and structural support. Solid brow line styling with an open, nylon-secured lower edge for a clean intellectual aura.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    features: ["Semi-minimalist profile", "Nylon underwire security", "Intellectual aesthetics", "Sturdy top brow"]
  },
  {
    id: "premium-collection",
    name: "Premium Collection",
    category: "Premium",
    startingPrice: 1499,
    description: "Our finest heritage collection. Handcrafted using premium Japanese titanium, 18k gold accents, and vintage wire filigree details for the ultimate luxury purist.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    features: ["Japanese beta-titanium", "18k gold filigree accents", "Handmade custom batches", "Collector-grade luxury"]
  },
  {
    id: "computer-glasses",
    name: "Computer Glasses",
    category: "Computer",
    startingPrice: 599,
    description: "Pre-fitted with advanced Blue-Light Filter lenses. Crafted to reduce digital eye strain, block high-energy blue-violet rays, and relieve screen fatigue.",
    image: "https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=600&q=80",
    features: ["99% Blue block active", "Anti-reflective barrier", "Contrast enhancement", "Comfortable screen hours"]
  },
  {
    id: "sunglasses",
    name: "Sunglasses",
    category: "Sunglasses",
    startingPrice: 999,
    description: "Luxury sun protection. Features certified UV400 lenses that eliminate glare, heighten contrast, and shield eyes completely while maintaining high-fashion style.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=600&q=80",
    features: ["100% UV400 protection", "Anti-glare polarization", "Premium tinted glass", "High-contrast definition"]
  },
  {
    id: "clip-on-collection",
    name: "Clip-On Collection",
    category: "Clip-On",
    startingPrice: 899,
    description: "Versatile modular luxury. Heavy-duty metallic clips with tinted or polarized lenses designed to slide onto classic optical wireframes seamlessly.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    features: ["Modular design", "Heavy-duty steel clips", "Lightweight lens plates", "Retro luxury style"]
  }
];

export const LENS_PARTNERS = [
  {
    name: "Celebrations",
    description: "Known for high-index crisp optics and exceptional clarity custom-milled for luxury frames.",
    badge: "Premium HD Focus"
  },
  {
    name: "Boscher",
    description: "German-engineered hard-coat multi-resistant coatings with industry-leading scratch resistance.",
    badge: "Hydrophobic Durability"
  },
  {
    name: "Essilor Crizal",
    description: "Pioneering anti-reflective and UV-shield protection technology designed for maximum visual acuity.",
    badge: "Global Standard"
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "how-to-choose-first-spectacles",
    title: "How to Choose Your First Spectacles: A Patient Guide",
    date: "July 10, 2026",
    category: "Vision Care",
    readTime: "5 min read",
    excerpt: "Venturing into prescription eyewear for the first time can feel overwhelming. We break down the absolute essentials of optical fit, comfort, and choosing a style that feels like second skin.",
    content: "When stepping into prescription spectacles for the first time, your journey should prioritize comfort and physiological alignment over mere aesthetics. \n\n1. UNDERSTANDING THE ANATOMY\nA frame is not just a style choice; it is a mechanical device that supports two lenses at a precise focal distance from your pupils. Key measurements are critical: the bridge width (the gap over your nose), temple length (the arms fitting over your ears), and frame width (which must align with the temples of your skull without pressing or slipping).\n\n2. BRIDGE ALIGNMENT FIRST\nNose shapes differ. If a frame has integrated acetate pads, they must sit evenly on the nasal bones. If you have a lower bridge, look for adjustable metal nose-pads that can be spaced to prevent the frames from sliding down when you smile or speak.\n\n3. LENS HEIGHT AND SIGHTLINE\nYour pupils should ideally sit in the upper-middle quadrant of the lens opening. This ensures that your natural straight-ahead gaze utilizes the optimal sweet-spot of the optical prescription, minimizing chromatic aberrations around the margins.\n\nAt Raj & Sons, we have spent three decades hand-fitting first-time wearers with a focus on trust and patience. Visit our showroom for a personalized anatomical fitment consultation."
  },
  {
    id: "blue-vs-green-coating",
    title: "Understanding Lens Science: Blue Coating vs. Green Coating",
    date: "June 28, 2026",
    category: "Lens Technology",
    readTime: "4 min read",
    excerpt: "What do lens reflections actually mean? We demystify anti-reflective coatings and explain whether blue or green reflection fits your everyday visual environment.",
    content: "Anti-reflective (AR) coatings are microscopic chemical layers deposited on optical lenses to eliminate distracting surface reflections. The color you see on the lens reflection represents the wavelength of light the coating is filtering or reflecting back.\n\nGREEN COATING (The Classic Anti-Reflective Shield)\n- **How it works:** It is engineered to maximize light transmission across the visible spectrum (over 99% light transmission). It suppresses reflections from both front and rear lens surfaces.\n- **Primary Benefit:** It gives incredible clarity for night-driving and reduces fatigue caused by fluorescent overhead lights. Reflections appear as a soft, premium green tint.\n- **Best suited for:** General office environments, night driving, and people seeking high optical transparency.\n\nBLUE COATING (The Screen-Defense Barrier)\n- **How it works:** It is specifically engineered to block and reflect a targeted spectrum of high-energy visible blue light (typically 415nm to 455nm), which is emitted by digital displays, LEDs, and smartphones.\n- **Primary Benefit:** It reduces sleep cycle disruption and digital eye strain by filtering out blue-violet fatigue wavelengths. Reflections appear as a rich, deep blue.\n- **Best suited for:** Dedicated computer users, writers, developers, and people spending more than 4 hours daily looking at screens.\n\nBoth coatings are available in high-index materials at Raj & Sons, custom-milled in partnership with Boscher and Celebrations."
  },
  {
    id: "how-often-change-glasses",
    title: "How Often Should You Change Your Spectacles?",
    date: "May 15, 2026",
    category: "Eye Health",
    readTime: "3 min read",
    excerpt: "Is it a change in power or lens wear-and-tear? Learn the signs that indicate your glasses need an upgrade for healthy vision.",
    content: "For most adults, optical prescriptions remain stable for 12 to 24 months, but your eyes undergo subtle natural changes. Here are three critical indicators that you are due for a fresh pair:\n\n1. MICRO-SCRATCHES AND COATING DEGRADATION\nEven high-end hard-coatings develop microscopic scratches over a year of everyday cleaning, sleeve-wiping, and drops. These scratches scatter incoming light, creating halos around streetlights and reducing low-contrast readability, even if your prescription has not changed.\n\n2. TENSION HEADACHES AND SQUINTING\nIf you find yourself slightly tilting your head or squinting to read small labels, your ciliary eye muscles are working overtime to compensate for a shifting prescription. This causes micro-strain, leading to dull tension headaches near your brow by late afternoon.\n\n3. FRAME STRETCH AND WARPAGE\nSpectacle frames are subject to heat, skin oils, and constant mechanical pressure. Acetate and metal frames slowly expand, causing the lenses to sit slightly tilted or too far from your eyes, directly degrading the focus accuracy of your prescription.\n\nWe recommend a comprehensive eye screening and a physical frame safety inspection once every 12 to 18 months."
  },
  {
    id: "signs-eye-power-changed",
    title: "5 Silent Signs Your Eye Power Has Changed",
    date: "April 02, 2026",
    category: "Eye Health",
    readTime: "4 min read",
    excerpt: "Prescription changes are rarely dramatic; they creep up silently. Here are five simple behavioral signs to watch out for.",
    content: "Often, patients believe their glasses are perfect because they can see decently. However, visual decline happens incrementally. Watch for these 5 silent signs:\n\n1. SHIFTING READING DISTANCE\nAre you holding your phone slightly closer, or pushing your menu further away to find focus? This is a classic indicator of presbyopia or changing spherical power.\n\n2. FASTER SCREEN FATIGUE\nIf screens begin to feel blurry or physically 'heavy' after just 20 minutes of work, your eyes are struggling with convergence or accommodation.\n\n3. NIGHT-TIME HALOS AND GLARE\nStruggling with oncoming headlight glare while driving at night indicates that your astigmatism correction needs adjustment or your anti-reflective coating is worn.\n\n4. DOUBLE VISION OR GHOST IMAGES\nSeeing a faint 'shadow' outline around clean text indicates that your cylinder power or optical center alignment is misaligned.\n\n5. SPATIAL MISJUDGMENTS\nFinding yourself occasionally misjudging step heights, bumping into door frames, or experiencing subtle motion sickness with your glasses is a sign of incorrect vertex distance or prismatic distortion."
  }
];
