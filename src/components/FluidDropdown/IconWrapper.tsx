
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconWrapperProps {
  icon: LucideIcon;
  isHovered: boolean;
  isSelected: boolean;
  color: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  isHovered,
  isSelected,
  color,
}) => (
  <motion.div 
    className="w-4 h-4 mr-2 relative" 
    initial={false} 
    animate={{
      scale: isHovered || isSelected ? 1.15 : 1,
      rotate: isHovered ? [0, -5, 5, 0] : 0,
    }}
    transition={{
      scale: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      rotate: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }}
  >
    <motion.div
      animate={{
        color: isHovered || isSelected ? color : 'currentColor',
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Icon className="w-4 h-4" />
    </motion.div>
  </motion.div>
);

export default IconWrapper;
