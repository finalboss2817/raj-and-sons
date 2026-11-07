/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FrameProduct {
  id: string;
  name: string;
  category: string;
  subCategory?: "Haute Couture" | "Fahrenheit Series" | "Smart AI" | "Optical Classic";
  modelCode?: string;
  designerBrand?: string;
  availableColors?: string[];
  startingPrice: number;
  description: string;
  image: string;
  features: string[];
  packageIncludes?: string;
  badge?: string;
  isNew?: boolean;
}

export interface SmartGlassesVideo {
  id: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  model: string;
  duration: string;
  tags: string[];
  description: string;
  highlights: string[];
}


export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  preferredTime: string;
  area: string;
  frameId?: string;
  frameName?: string;
  lensType?: string;
  status: "pending" | "resolved";
  createdAt: string;
  notes?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  options?: string[]; // Quick choices for the user to make booking fun & quick
}

export interface LensOption {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

