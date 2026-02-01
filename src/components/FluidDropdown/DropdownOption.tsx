
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconWrapper from "./IconWrapper";
import { itemVariants } from "./animations";
import type { Category } from "./types";

interface DropdownOptionProps {
  category: Category;
  index: number;
  isSelected: boolean;
  isHovered: boolean;
  onMouseEnter: (category: Category, index: number) => void;
  onMouseLeave: () => void;
  onClick: (category: Category) => void;
}

const DropdownOption: React.FC<DropdownOptionProps> = ({
  category,
  index,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => (
  <motion.button
    onClick={() => onClick(category)}
    onMouseEnter={() => onMouseEnter(category, index)}
    onMouseLeave={onMouseLeave}
    onFocus={() => onMouseEnter(category, index)}
    className={cn(
      "relative flex w-full items-center px-3 py-2 text-sm rounded-md mx-1",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      "overflow-hidden",
      isSelected
        ? "text-foreground font-medium"
        : "text-muted-foreground"
    )}
    whileTap={{ scale: 0.98 }}
    variants={itemVariants}
    style={{ position: "relative" }}
  >
    {/* Animated background */}
    <motion.div
      className="absolute inset-0 rounded-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isHovered ? 0.15 : 0,
        scale: isHovered ? 1 : 0.8,
        backgroundColor: category.color,
      }}
      transition={{
        opacity: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        scale: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        backgroundColor: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
      }}
    />
    
    {/* Content wrapper with z-index */}
    <div className="relative z-10 flex items-center w-full">
      <IconWrapper
        icon={category.icon}
        isHovered={isHovered}
        isSelected={isSelected}
        color={category.color}
      />
      <motion.span 
        className="transition-colors duration-300 ease-out"
        animate={{
          color: isHovered ? category.color : 'currentColor',
          fontWeight: isHovered ? 500 : 400,
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {category.label}
      </motion.span>
    </div>

    {/* Subtle glow effect on hover */}
    <motion.div
      className="absolute inset-0 rounded-md"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isHovered ? 0.08 : 0,
        boxShadow: isHovered 
          ? `0 0 25px ${category.color}60` 
          : "none"
      }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    />
  </motion.button>
);

export default DropdownOption;
