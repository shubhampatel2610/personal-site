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
}

export default AppConstants;
