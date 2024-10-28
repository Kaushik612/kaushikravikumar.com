import React from "react";
import { siteConfig } from "@/lib/data";

import { Link, Box, useColorModeValue } from "@chakra-ui/react";

const SocialIcons = () => {
  const color = useColorModeValue("white.200", "gray.900");
  const linkColor = useColorModeValue("gray.900", "blue.100");
  return (
    <Box
      as="div"
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(4, minmax(0, 1fr))",
        md: "repeat(2, minmax(0, 1fr))",
      }}
      gap={{ base: "1.25rem", md: "1rem" }}
      mb={{ base: "1.5rem" }}
    >
      {siteConfig.author.accounts.map((link, index) => (
        <Link
          isExternal
          key={index}
          href={link.url}
          _hover={{
            textDecoration: "none",
            bg: "rgba(255,255,255,0.16)",
          }}
          width={"2.5rem"}
          height={"2.5rem"}
          display="flex"
          rounded="full"
          justifyContent="center"
          alignItems={"center"}
          aria-label={link.name}
          bg={color}
          color={linkColor}
        >
          {<link.icon size={"20px"} color={link.type} />}
        </Link>
      ))}
    </Box>
  );
};

export default SocialIcons;
