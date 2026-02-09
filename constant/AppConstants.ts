/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import NextJsIcon from "../public/skillIcons/NextJsIcon";
import ReactJsIcon from "@/public/skillIcons/ReactJsIcon";
import TypescriptIcon from "@/public/skillIcons/TypescriptIcon";
import JavascriptIcon from "@/public/skillIcons/JavascriptIcon";
import HtmlIcon from "@/public/skillIcons/HtmlIcon";
import CssIcon from "@/public/skillIcons/CssIcon";
import SassIcon from "@/public/skillIcons/SassIcon";
import ReduxIcon from "@/public/skillIcons/ReduxIcon";
import MobxIcon from "@/public/skillIcons/MobxIcon";
import GitIcon from "@/public/skillIcons/GitIcon";
import JestIcon from "@/public/skillIcons/JestIcon";
import VSCodeIcon from "@/public/toolsIcons/VSCodeIcon";
import GithubIcon from "@/public/toolsIcons/GithubIcon";
import BitbucketIcon from "@/public/toolsIcons/BitbucketIcon";
import JiraIcon from "@/public/toolsIcons/JiraIcon";
import FigmaIcon from "@/public/toolsIcons/FigmaIcon";
import PostmanIcon from "@/public/toolsIcons/PostmanIcon";
import ReactTestingLibraryIcon from "@/public/skillIcons/ReactTestingLibraryIcon";

export type CarouselItem = {
  id: number;
  name: string;
  component?: React.ComponentType<any> | null;
};

class AppConstants {
  // Navbar Constants
  static USER_NAME = "Shubham";
  static DOWNLOAD_BUTTON_LABEL = "Download CV";

  static NAVLINKS = [
    { id: 1, url: "#home", label: "Home" },
    { id: 2, url: "#about", label: "About" },
    { id: 3, url: "#experience", label: "Experience" },
    { id: 4, url: "#skills", label: "Skills" },
    // { id: 5, url: "#projects", label: "Projects" },
    // { id: 6, url: "#testimonials", label: "Testimonials" },
    { id: 7, url: "#contact", label: "Contact" },
  ];
  static DOWNLOAD_CV_LINK = "https://drive.google.com/drive/folders/1pqGbz5LVK53attjk8Cv6TVC1bMc7NO0Z?usp=sharing";

  // Main Section Constants
  static PROFILE_PICTURE_PATH = "/siteImages/profile_picture.jpg";
  static MAIN_SECTION_TAGLINE_1 =
    "Pssionate About Creating AI-powered, Scalable & Pixel-Perfect ";
  static MAIN_SECTION_TAGLINE_2 = "High Performance Web Experiences.";
  static MAIN_SECTION_INTROLINE = "Hi, I'm Shubham, a";

  // Service Section Constants
  static SERVICE_SECTION_TAGLINE =
    "Clean Code, Smooth Experiences, Real Results: From UI to API — I Build It All...";
  static SERVICES = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Building high-performance, responsive web UIs with strong proficiency in React/Next.js and TypeScript, robust state management (Redux, MobX), component-driven architecture, accessibility best practices, and rapid feature shipping.",
      iconPath: "/siteImages/frontend.png",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "System-level understanding of backend architectures and integrations; familiar with NestJS, Node.js, Java, and Spring Boot — able to implement API integrations, and collaborate on scalable server solutions (not a primary backend specialist).",
      iconPath: "/siteImages/backend.png",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Developing end-to-end web solutions based on project requirements, with a strong focus on frontend quality, seamless integration, and reliable on-time delivery.",
      iconPath: "/siteImages/web-development.png",
    },
    {
      id: 4,
      title: "Freelancing",
      description:
        "Frontend-focused software developer ready to contribute expertise to client projects. While new to freelancing, I bring strong engineering fundamentals, clear communication, and a commitment to delivering high-quality results on schedule.",
      iconPath: "/siteImages/freelancing.png",
    },
  ];

  // Experience Section Constants
  static EXPERIENCE_HEADER = "Professional Experience";
  static EXPERIENCE_SUBHEADER = "My Journey So Far";
  static EXPERIENCE_DETAILS = [
    {
      id: 1,
      role: "Associate Software Developer Trainee",
      company: "Eliteware Solutions",
      location: "Vadodara, Gujarat, India",
      duration: "July 2023 - Jan 2024",
      description: [
        "Contributed to the development of B2B and B2C SaaS platforms for managing EV charging stations, including tenant management, user access control, RFID integration and usage monitoring.",
        "Designed and implemented dynamic, responsive, and interactive UIs using React.js with Redux.",
        "Gained hands-on experience building scalable server-side logic using Node.js, Express.js, and MongoDB.",
        "Collaborated closely with cross-functional teams to deliver high-quality features.",
        "Used Git and GitHub for version control, including branching, merging, and resolving code conflicts.",
        "Diagnosed and resolved production and non-production issues, ensuring stability and performance.",
      ],
    },
    {
      id: 2,
      role: "Software Developer",
      company: "KIT Solutions Pvt Ltd",
      location: "Vadodara, Gujarat, India",
      duration: "March 2024 - Present",
      description: [
        "Developed and enhanced high-quality, scalable features for a B2B SaaS platform used by aviation operations teams to communicate with ATC, airports, and flight systems.",
        "Built clean, reusable, and maintainable UI components using React.js, Next.js, and TypeScript, following modern frontend best practices.",
        "Implemented efficient state management using Redux, Redux Toolkit, and MobX to handle complex application data flows.",
        "Integrated RESTful and GraphQL APIs to enable seamless communication between frontend and backend.",
        "Wrote comprehensive unit and component tests using Jest, Enzyme, and React Testing Library to ensure code quality, stability, and maintainability with SonarQube.",
        "Familiar with backend systems built using NestJS, Java, and Spring Boot, with a working understanding of APIs, service flows, and backend integration.",
        "Collaborated closely with cross-functional teams to deliver features efficiently in an Agile environment.",
        "Used Git and Bitbucket for version control, including branching , code reviews, merging, and conflict resolution.",
        "Debugged and resolved technical issues across the application to ensure system stability, performance, and a smooth user experience.",
      ],
    },
  ];
  static SHOW_MORE_TEXT = "Show More";
  static SHOW_LESS_TEXT = "Show Less";

  // Skills Section Constants
  static SKILLS_HEADER = "Skills";
  static TOOLS_HEADER = "Tools & Technologies";
  static SKILLS_LIST: CarouselItem[] = [
    { id: 1, name: "Next.js", component: NextJsIcon },
    { id: 2, name: "React.js", component: ReactJsIcon },
    { id: 3, name: "TypeScript", component: TypescriptIcon },
    { id: 4, name: "JavaScript", component: JavascriptIcon },
    { id: 5, name: "HTML5", component: HtmlIcon },
    { id: 6, name: "CSS3", component: CssIcon },
    { id: 7, name: "Sass", component: SassIcon },
    { id: 8, name: "Redux", component: ReduxIcon },
    { id: 9, name: "Mobx", component: MobxIcon },
    { id: 10, name: "Git", component: GitIcon },
    { id: 11, name: "Jest", component: JestIcon },
    { id: 12, name: "Enzyme", component: JavascriptIcon },
    { id: 13, name: "R T L", component: ReactTestingLibraryIcon },
    // { id: 14, name: "Java" },
    // { id: 15, name: "Spring Boot" },
    // { id: 16, name: "Node.js" },
    // { id: 17, name: "Express.js" },
    // { id: 18, name: "MongoDB" },
    // { id: 19, name: "PostgreSQL" },
  ];
  static TOOLS_LIST: CarouselItem[] = [
    { id: 1, name: "VS Code", component: VSCodeIcon },
    { id: 2, name: "GitHub", component: GithubIcon },
    { id: 3, name: "Bitbucket", component: BitbucketIcon },
    { id: 5, name: "Jira", component: JiraIcon },
    { id: 7, name: "Figma", component: FigmaIcon },
    { id: 4, name: "Postman", component: PostmanIcon },
    // { id: 6, name: "SonarQube" },
  ];

  // Contact Section Constants
  static CONTACT_HEADER = "Let's Connect and Work Together!";
  static CONTACT_SUBHEADER =
    "Ready to bring your ideas to life? Get in touch with me today! even if you just want to say hii! I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's create something amazing together!";
  static CONTACT_PHONE = "+91 7990037804";
  static CONTACT_EMAIL = "shubham2610patel@gmail.com";
  static CONTACT_LOCATION = "Ahmedabad, Gujarat, India";
  static CONTACT_LINKEDIN = "https://www.linkedin.com/in/shubham-patel-6b01131b8/";
  static CONTACT_GITHUB = "https://github.com/shubhampatel2610";
  static CONTACT_FORM_LABELS = {
    name: "Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Your Message",
    submitButton: "Send",
  };

  // Education Section Constants
  static EDUCATION_HEADER = "Education";
}

export default AppConstants;
