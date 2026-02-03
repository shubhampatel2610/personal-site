class AppConstants {
  // Navbar Constants
  static USER_NAME = "Shubham";
  static DOWNLOAD_BUTTON_LABEL = "Download CV";

  static NAVLINKS = [
    { id: 1, url: "#", label: "Home" },
    { id: 2, url: "#", label: "About" },
    { id: 3, url: "#", label: "Experience" },
    { id: 4, url: "#", label: "Skills" },
    { id: 5, url: "#", label: "Projects" },
    { id: 6, url: "#", label: "Testimonials" },
    { id: 7, url: "#", label: "Contact" },
  ];

  // Main Section Constants
  static PROFILE_PICTURE_PATH = "/siteImages/profile_picture.jpg";
  static MAIN_SECTION_TAGLINE_1 =
    "Passionate About Creating Intuitive, Creative, User-Centric ";
  static MAIN_SECTION_TAGLINE_2 = "Web Solutions.";
  static MAIN_SECTION_INTROLINE = "Hi, I'm Shubham, a";
  static WORK_BUTTON_LABEL = "See My Work";

  // Service Section Constants
  static SERVICE_SECTION_TAGLINE =
    "Clean Code, Smooth Experiences, Real Results: From UI to API — I Build It All...";
  static SERVICES = [
    {
      id: 1,
      title: "Frontend Development",
      description:
        "Crafting responsive and engaging user interfaces using modern frameworks.",
      iconPath: "/siteImages/icons/frontend_icon.png",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications and APIs.",
      iconPath: "/siteImages/icons/backend_icon.png",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Creating full-stack web applications with seamless integration.",
      iconPath: "/siteImages/icons/webdev_icon.png",
    },
    {
      id: 4,
      title: "Freelancing",
      description: "Delivering tailored web solutions to clients worldwide.",
      iconPath: "/siteImages/icons/freelance_icon.png",
    },
  ];

  // Experience Section Constants
  static EXPERIENCE_HEADER = "Experience";
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
    }
  ];
  static SHOW_MORE_TEXT = "Show More";
  static SHOW_LESS_TEXT = "Show Less";

  // Education Section Constants
  static EDUCATION_HEADER = "Education";
}

export default AppConstants;
