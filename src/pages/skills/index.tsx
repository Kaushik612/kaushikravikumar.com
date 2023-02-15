import React from "react";
import { backendStacks, webTechStacks, otherTechStacks } from "@/lib/data";
import {
  Text,
  Box,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Grid,
} from "@chakra-ui/react";
import { MotionBox } from "@/utils/motion";
import StackCard from "@/components/StackCard";
import { TechStack } from "@/types/techstack";
import Head from "next/head";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills | Kaushik Ravikumar</title>
      </Head>
      <Box>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          marginBottom="3.5rem"
        >
          <Heading
            fontSize={"5xl"}
            pos="relative"
            textAlign={"left"}
            marginBottom="2.5rem"
          >
            Tech Stack
          </Heading>
          <Text textAlign={"left"}>
            These are some of the Technologies I work with on daily basis,
            however I am constantly learning and updating my skillset everyday!
          </Text>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
        >
          <Tabs variant="solid-rounded" mt={5}>
            <TabList mb={"1rem"}>
              <Tab>Frontend</Tab>
              <Tab mx={2}>Backend</Tab>
              <Tab mx={2}>Others</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid
                  templateColumns={[
                    "1fr",
                    "repeat(2,1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                  ]}
                  gap={[2, 5, 5, 5]}
                >
                  {webTechStacks.map((stack: TechStack) => (
                    <StackCard stack={stack} key={stack?.name} />
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns={[
                    "1fr",
                    "repeat(2,1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                  ]}
                  gap={[2, 5, 5, 5]}
                >
                  {backendStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Grid
                  templateColumns={[
                    "1fr",
                    "repeat(2,1fr)",
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                  ]}
                  gap={[2, 5, 5, 5]}
                >
                  {otherTechStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                  ))}
                </Grid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </MotionBox>
      </Box>
    </>
  );
};

export default Skills;
