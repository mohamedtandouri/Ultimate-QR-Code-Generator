
import { QrCode, Contact, MapPin, Wifi, Smartphone, Calendar, Bitcoin, Mail, Share2, MessageSquare } from "lucide-react";
import type { Category } from "./types";

export const defaultCategories: Category[] = [
  { id: "standard", label: "Standard QR", icon: QrCode, color: "#A06CD5" },
  { id: "esim", label: "eSIM QR", icon: Smartphone, color: "#FF6B6B" },
  { id: "wifi", label: "WiFi QR", icon: Wifi, color: "#4ECDC4" },
  { id: "contact", label: "Contact QR", icon: Contact, color: "#45B7D1" },
  { id: "calendar", label: "Calendar QR", icon: Calendar, color: "#96CEB4" },
  { id: "email", label: "Email QR", icon: Mail, color: "#74B9FF" },
  { id: "sms", label: "SMS QR", icon: MessageSquare, color: "#6C5CE7" },
  { id: "social", label: "Social QR", icon: Share2, color: "#FD79A8" },
  { id: "location", label: "Location QR", icon: MapPin, color: "#F9C74F" },
  { id: "crypto", label: "Crypto QR", icon: Bitcoin, color: "#FFEAA7" },
];
