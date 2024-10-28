import React from "react";
import Head from "next/head";
import { CareerCard } from "@/components/CareerCard";
import { Box, Heading } from "@chakra-ui/react";

import { MotionBox } from "@/utils/motion";

const Career = () => {
  return (
    <>
      <Head>
        <title>Career Path | Kaushik Ravikumar</title>
      </Head>

      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        as="section"
        mb={"14"}
      >
        <Heading as="h1" fontSize="4xl">
          Career Path
        </Heading>
      </MotionBox>
      <CareerCard />
    </>
  );
};

export default Career;
