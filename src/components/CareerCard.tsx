import {
  VStack,
  StackDivider,
  Box,
  Heading,
  Text,
  Badge,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { FcOvertime } from "react-icons/fc";
import { TbCommand } from "react-icons/tb";
import { career } from "@/lib/data";
import { MotionBox } from "@/utils/motion";

export const CareerCard = () => {
  const badgeVariant = useColorModeValue("solid", "subtle");
  const textColor = useColorModeValue("gray.800", "gray.300");
  const linkColor = useColorModeValue("blue.600", "blue.400");

  return (
    <VStack
      divider={<StackDivider borderColor="gray.600" />}
      spacing={[8, 12]}
      borderRadius="5px"
    >
      {career.map((experience) => {
        return (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 2, delay: 0.1 }}
            h="100%"
            w="100%"
            key={experience.id}
          >
            <Heading
              as="h3"
              fontSize={["xl", "2xl"]}
              textColor={linkColor}
              lineHeight={1.6}
              pb={8}
            >
              {experience.title}
            </Heading>

            <VStack w="full" align="start" textColor={textColor} spacing={4}>
              <HStack>
                <TbCommand />
                <Text fontWeight="semibold" letterSpacing="0.5px">
                  {experience.role}
                </Text>
              </HStack>

              <HStack>
                <FcOvertime />
                <Text>{experience.time}</Text>
              </HStack>

              <Text fontSize={["sm", "md"]} lineHeight={1.8} opacity={0.75}>
                {experience.description}
              </Text>
            </VStack>

            <Box w="full" pt={8}>
              {experience.tags.map((tag) => {
                // to color the badge based on value
                let badgeScheme = "gray";

                if (tag == "Java") {
                  badgeScheme = "blue";
                } else if (tag == "Spring Boot") {
                  badgeScheme = "green";
                } else if (tag == "PL/SQL") {
                  badgeScheme = "orange";
                } else {
                  badgeScheme = "purple";
                }

                return (
                  <Badge
                    key={tag}
                    px={1}
                    my={2}
                    mr={3}
                    letterSpacing="0.5px"
                    colorScheme={badgeScheme}
                    variant={badgeVariant}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </Box>
          </MotionBox>
        );
      })}
    </VStack>
  );
};
