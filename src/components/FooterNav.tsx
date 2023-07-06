import React from "react";
import SocialIcons from "./SocialIcons";
import { siteConfig } from "@/lib/data";

import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" minH={"64px"}>
      <Box as="section">
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          justifyContent={{ base: "center", md: "space-between" }}
          paddingY={"5rem"}
          w="full"
          h="full"
        >
          <Box
            fontSize={"sm"}
            lineHeight="1.25rem"
            textAlign={{ base: "center", md: "left" }}
          >
            <Box as="span" textAlign={"center"} lineHeight="1.75rem">
              Built with 💙 using{" "}
              <Link
                href="https://nextjs.org/"
                _hover={{ textDecoration: "none" }}
              >
                <Box as="span" color="base.50" fontWeight="bold">
                  {" "}
                  Next.Js
                </Box>
              </Link>
              {" & "}
              <Link
                href="https://chakra-ui.com/"
                color="base.50"
                _hover={{ textDecoration: "none" }}
                fontWeight="bold"
              >
                Chakra UI
              </Link>
            </Box>
            <Text mt={"1rem"}>
              Code licensed under <b>MIT License</b>.
            </Text>
            <Text fontFamily={"body"} fontStyle={"italic"} mt={"1rem"}>
              {siteConfig.copyright}{" "}
            </Text>
          </Box>
          <SocialIcons />
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
