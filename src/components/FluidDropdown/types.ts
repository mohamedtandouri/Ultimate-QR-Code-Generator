
import { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface FluidDropdownProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  categories?: Category[];
}
