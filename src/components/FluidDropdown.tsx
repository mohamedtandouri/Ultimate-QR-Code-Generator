
"use client"

import * as React from "react"
import { motion, AnimatePresence, MotionConfig } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useClickAway } from "@/hooks/use-click-away"
import IconWrapper from "./FluidDropdown/IconWrapper"
import DropdownOption from "./FluidDropdown/DropdownOption"
import { containerVariants } from "./FluidDropdown/animations"
import { defaultCategories } from "./FluidDropdown/defaultCategories"
import type { FluidDropdownProps, Category } from "./FluidDropdown/types"

const FluidDropdown = ({ activeTab, onTabChange, categories = defaultCategories }: FluidDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(
    categories.find(category => category.id === activeTab) || categories[0]
  );
  const [hoveredCategory, setHoveredCategory] = React.useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useClickAway(dropdownRef, () => {
    setIsOpen(false);
    setHoveredCategory(null);
    setFocusedIndex(-1);
  });

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setFocusedIndex(-1);
      setHoveredCategory(null);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (focusedIndex + 1) % categories.length;
      setFocusedIndex(nextIndex);
      setHoveredCategory(categories[nextIndex].id);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = focusedIndex <= 0 ? categories.length - 1 : focusedIndex - 1;
      setFocusedIndex(prevIndex);
      setHoveredCategory(categories[prevIndex].id);
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      const category = categories[focusedIndex];
      setSelectedCategory(category);
      onTabChange(category.id);
      setIsOpen(false);
      setFocusedIndex(-1);
      setHoveredCategory(null);
    }
  };

  // Update the selected category when activeTab changes
  React.useEffect(() => {
    const category = categories.find(c => c.id === activeTab);
    if (category) {
      setSelectedCategory(category);
    }
  }, [activeTab, categories]);

  const handleOptionClick = (category: Category) => {
    setSelectedCategory(category);
    onTabChange(category.id);
    setIsOpen(false);
    setHoveredCategory(null);
    setFocusedIndex(-1);
  };

  const handleOptionMouseEnter = (category: Category, index: number) => {
    setHoveredCategory(category.id);
    setFocusedIndex(index);
  };

  const handleOptionMouseLeave = () => {
    setHoveredCategory(null);
    setFocusedIndex(-1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative w-full"
        style={{ maxWidth: "100%", height: "40px" }}
        ref={dropdownRef}
        onKeyDown={handleKeyDown}
      >
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full justify-between bg-background",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-200 ease-in-out",
            "border h-10",
            isOpen && "bg-accent text-accent-foreground ring-2 ring-ring",
          )}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span className="flex items-center">
            <IconWrapper 
              icon={selectedCategory.icon} 
              isHovered={false} 
              isSelected={true}
              color={selectedCategory.color} 
            />
            {selectedCategory.label}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "20px",
            }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
                transition: {
                  duration: 0.15,
                },
              }}
              className="absolute left-0 right-0 top-full mt-2 z-50"
            >
              <motion.div
                className={cn(
                  "w-full rounded-lg border bg-popover shadow-lg",
                  "backdrop-blur-sm bg-opacity-95"
                )}
                style={{ transformOrigin: "top center" }}
              >
                <motion.div 
                  className="py-1 relative" 
                  variants={containerVariants} 
                  initial="hidden" 
                  animate="visible"
                >
                  {categories.map((category, index) => (
                    <React.Fragment key={category.id}>
                      {index === 5 && categories.length > 5 && (
                        <motion.div 
                          className="mx-2 my-1 border-t border-border/50" 
                          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} 
                        />
                      )}
                      <DropdownOption
                        category={category}
                        index={index}
                        isSelected={selectedCategory.id === category.id}
                        isHovered={hoveredCategory === category.id}
                        onMouseEnter={handleOptionMouseEnter}
                        onMouseLeave={handleOptionMouseLeave}
                        onClick={handleOptionClick}
                      />
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};

export default FluidDropdown;
