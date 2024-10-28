import { TechStack } from "@/types/techstack";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaJava,
  FaLinkedin,
  FaGithub,
  FaSass,
  FaInstagram,
} from "react-icons/fa";
import {
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiSpringboot,
  SiOracle,
  SiPostgresql,
  SiMongodb,
  SiChakraui,
  SiAmazonaws,
  SiGooglecloud,
  SiNodedotjs,
  SiMicrosoftazure,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const siteConfig = {
  copyright: `© ${new Date().getFullYear()} Kaushik Ravikumar. All Rights Reserved.`,
  author: {
    name: "Kaushik Ravikumar",
    accounts: [
      {
        url: "https://github.com/Kaushik612",
        icon: FaGithub,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/kaushikrav/",
        icon: FaLinkedin,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://instagram.com/whereiskashnow",
        icon: FaInstagram,
        name: "Instagram",
        type: "pink",
      },
      {
        url: "mailto:kaushikr.612@gmail.com",
        icon: SiGmail,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

export const career = [
  {
    id: 4,
    title: "Staples Inc.",
    role: "Lead Software Engineer",
    description:
      "Develop highly scalable backend microservices for supporting the customer facing Staples logistics infrastructure.",
    time: "April 2023 - Present",
    tags: ["Java", "Spring Boot", "Azure", "PL/SQL", "RabbitMQ"],
  },
  {
    id: 3,
    title: "American Eagle Outfitters",
    role: "Senior Software Engineer",
    description:
      "Design and architect highly scalable backend microservices using Java & Spring boot.",
    time: "December 2021 - April 2023",
    tags: ["Java", "Spring Boot", "GCP", "PL/SQL", "RabbitMQ"],
  },
  {
    id: 2,
    title: "Dunkin Brands Inc.",
    role: "Senior Java Developer",
    description:
      "Responsible for building the backend infrastructure that powered the Dunkin mobile and web applications.",
    time: "April 2018 - December 2021",
    tags: ["Java", "Spring Boot", "AWS", "PL/SQL", "RabbitMQ", "REST"],
  },
  {
    id: 1,
    title: "Capgemini",
    role: "Test Lead/Senior Consultant",
    description:
      "Design & develop test automation frameworks for both Web & Mobile using Selenium & Appium.",
    time: "July 2011 - April 2018",
    tags: ["Java", "Selenium", "Appium", "Test Automation", "QA", "PL/SQL"],
  },
];

export const webTechStacks: TechStack[] = [
  {
    name: "Javascript",
    icon: FaJs,
    url: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    icon: SiTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: FaReact,
    url: "https://reactjs.org/",
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
    url: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    url: "https://redux.js.org/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    url: "https://chakra-ui.com/",
  },
  {
    name: "SASS",
    icon: FaSass,
    url: "https://sass-lang.com/",
  },
];

export const backendStacks: TechStack[] = [
  {
    name: "Java",
    icon: FaJava,
    url: "https://www.java.com/en/",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    url: "https://spring.io/",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    url: "https://nodejs.org/",
  },
  {
    name: "Oracle",
    icon: SiOracle,
    url: "https://www.oracle.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    url: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    url: "https://www.mongodb.com/",
  },
];

export const otherTechStacks = [
  {
    name: "AWS",
    icon: SiAmazonaws,
    url: "https://aws.amazon.com/",
  },
  {
    name: "GCP",
    icon: SiGooglecloud,
    url: "https://cloud.google.com/",
  },
  {
    name: "Azure",
    icon: SiMicrosoftazure,
    url: "https://azure.microsoft.com/en-us/",
  },
  {
    name: "Github & GitLab",
    icon: FaGitAlt,
    url: "https://www.gitlab.com/",
  },
];
