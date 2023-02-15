import React from "react";
import { useColorMode, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "@/utils/motion";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue("dark", "light");
  const handleClick = () => {
    toggleColorMode();
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Tooltip
        hasArrow
        label={`${mode} mode 🌓`}
        fontWeight="semibold"
        marginLeft="-5rem"
      >
        <MotionBox
          onClick={handleClick}
          key={mode === "dark" ? "dark-icon" : "light-icon"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          cursor="pointer"
          fontSize={["2xl", "3xl", "3xl"]}
          marginLeft={{ base: "0.5rem", md: "1rem" }}
          marginTop={{ md: "1rem" }}
        >
          {mode === "dark" ? "🌤" : "🌙"}
        </MotionBox>
      </Tooltip>
    </AnimatePresence>
  );
};

export default ColorModeSwitcher;
