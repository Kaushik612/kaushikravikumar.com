import Footer from "@/components/FooterNav";
import Sidebar from "@/components/SideNav";

import { Box, Flex } from "@chakra-ui/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex
        maxW={"4xl"}
        flexDir={{ base: "column", md: "row" }}
        marginX={{ base: "1rem", lg: "auto" }}
        mt={{ base: "2rem", md: "5rem", lg: "8rem" }}
      >
        <Sidebar />
        <Flex
          as="main"
          minW={0}
          mt={{ base: "1.5rem", md: "0" }}
          flexDir="column"
          px={{ base: "0.5rem", md: "0" }}
          flex="1 1 auto"
        >
          {children}
          <Footer />
        </Flex>
      </Flex>
    </>
  );
}
