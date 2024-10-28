import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { name, avatar } from "../lib/info";

//Chakra Components
import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";
import { MotionBox } from "@/utils/motion";
import ColorModeSwitcher from "./ColorModeSwitcher";

const navItems = {
  "/": {
    name: "home",
    x: 0,
    y: 5,
    w: "64px",
  },
  "/skills": {
    name: "skills",
    x: 64,
    y: 50,
    w: "65px",
  },
  "/career": {
    name: "career",
    x: 127,
    y: 95,
    w: "75px",
  },
};

const navItemsMobile = {
  "/": {
    name: "home",
    x: 0,
    y: 5,
    w: "64px",
  },
  "/skills": {
    name: "skills",
    x: 65,
    y: 5,
    w: "65px",
  },
  "/career": {
    name: "career",
    x: 127,
    y: 5,
    w: "56px",
  },
};

function Logo() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Flex
      alignItems={["start", "center"]}
      justifyItems={["start", "start"]}
      marginY="1rem"
      flexDir={["row", "row", "row"]}
    >
      <Image
        alt={name}
        style={{
          borderRadius: "100%",
        }}
        src={avatar}
        placeholder="blur"
        width={100}
        priority
      />
    </Flex>
    // <Link as={NextLink} aria-label="Kaushik Ravikumar" href="/">
    //   <motion.svg
    //     display={"inline-block"}
    //     width="150px"
    //     stroke={colorMode === "light" ? "black" : "white"}
    //     viewBox="0 0 120 120"
    //   >
    //     <motion.path
    //       fill={"none"}
    //       strokeLinecap="round"
    //       strokeLinejoin={"round"}
    //       strokeWidth="5px"
    //       initial={{
    //         opacity: 0,
    //         pathLength: 0,
    //       }}
    //       animate={{
    //         opacity: 1,
    //         pathLength: 1,
    //       }}
    //       transition={{
    //         duration: 1,
    //         type: "spring",
    //         stiffness: 50,
    //       }}
    //       d="M5,5
    //        l0,88
    //        M5,49
    //        l35,-44z
    //        l40,44"
    //     />
    //   </motion.svg>
    // </Link>
  );
}

const Sidebar = () => {
  const pathname = usePathname();
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      as="aside"
      w={{ md: "150px" }}
      flexShrink={{ md: "0" }}
      marginX={{ base: "-1rem", md: "0rem" }}
      paddingX={{ md: "0", lg: "0" }}
    >
      <Box pos={{ lg: "sticky" }} top={{ lg: "5rem" }}>
        <Flex
          marginLeft={{ base: "0.5rem", md: "0px" }}
          marginBottom="0.5rem"
          paddingX={{ base: "1rem", md: "0" }}
          flexDir={{ base: "column", md: "row" }}
          alignItems="flex-start"
        >
          <Logo />
        </Flex>
        <Flex
          as="nav"
          flexDir={{ base: "row", md: "column" }}
          alignItems="flex-start"
          pos={"relative"}
          overflow={{ base: "scroll", md: "auto" }}
          paddingX={{ base: "1rem", md: "0" }}
          paddingBottom="0"
          scrollPaddingRight={"1.5rem"}
          id="nav"
        >
          <Flex
            flexDir={{ base: "row", md: "column" }}
            paddingRight="2.5rem"
            marginBottom={"0.5rem"}
            marginTop={{ base: "0.5rem", md: "0" }}
          >
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <Box display={{ base: "none", md: "block" }}>
                  <MotionBox
                    pos={"absolute"}
                    bg={colorMode === "light" ? "bg.300" : "bg.400"}
                    h="34px"
                    rounded={"md"}
                    zIndex="-1"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </Box>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <Box display={{ base: "block", md: "none" }}>
                  <MotionBox
                    pos={"absolute"}
                    bg={colorMode === "light" ? "bg.300" : "bg.400"}
                    h="34px"
                    rounded={"md"}
                    zIndex="-1"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItemsMobile[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItemsMobile[pathname].x,
                      y: navItemsMobile[pathname].y,
                      width: navItemsMobile[pathname].w,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </Box>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  as={NextLink}
                  key={path}
                  textTransform="capitalize"
                  paddingY={"10px"}
                  paddingX={"10px"}
                  fontSize="1rem"
                  lineHeight={"1.5rem"}
                  transitionProperty="all"
                  transitionDuration={"150ms"}
                  transitionTimingFunction={"cubic-bezier(0.4, 0, 0.2, 1)"}
                  _hover={{
                    textDecoration: "none",
                    color: colorMode === "light" ? "text.100" : "text.200",
                  }}
                  fontWeight={isActive ? "bold" : "normal"}
                  href={path}
                >
                  {name}
                </Link>
              );
            })}
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
