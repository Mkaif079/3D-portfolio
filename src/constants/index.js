import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bosch,
    cognizant,
    java,
    python,
    azure,
    mysql,
    springboot,
    zia,
    megha,
    mukund,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cloud Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "My Sql",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [

    {
      title: "Full Stack Developer Intern",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#383E56",
      date: "April 2021 - August 2021",
      points: [
        "Attended training in Full stack development.",
        "Hands-on learning and experience in Java, HTML, CSS, JavaScript, jQuery, SQL, AWS, and SpringBoot.",
        "Deployed these skills in a project- Audit Management System which automates the audit processing makes the management scalable and ensures clarity and ease of tracking.",
        "Achieved >90% success rate in project completion and developed a user-friendly front-end.",
      ],
    },
    {
      title: "Associate Software Developer",
      company_name: "Bosch Global Software Technologies",
      icon: bosch,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Actively participate and contribute to IOT garage team.",
        "Developed a smart mirror platform with 4 modules - Sign language translator, Fitness trainer, Public speaking, and Navigation.",
        "Implemented the sign language translator module which helps differently-abled people for smooth interaction with mirror with 95% performance.",
        "Technologies used - Mediapipe, Computer vision, Nodejs, Azure cognitive services.",
        "Working on the Green Coding project, developing backend functionalities using Java and integrating them with the frontend.",
        "Contributing to algorithm development for complexity analysis and resource usage measurement.",
        "Part of the Associate Engagement Team responsible for conducting fun and informative activities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A committed and tireless learner, consistently pushing boundaries and embracing new knowledge and skills.",
      name: "Mohd Zia ullah",
      designation: "Computer Scientist 2",
      company: "Adobe",
      image: zia,
    },
    {
      testimonial:
        "An invaluable asset to any team, consistently exceeding expectations with unwavering excellence.",
      name: "Phani Mukund Pammi VSS",
      designation: "Senior Associate Consultant",
      company: "Bosch",
      image: mukund,
    },
    {
      testimonial:
        "Kaif possesses outstanding problem-solving skills, consistently finding innovative solutions to complex challenges.",
      name: "Megha Singhal",
      designation: "Programmer Analyst",
      company: "Cognizant",
      image: megha,
    },
  ];
  
  const projects = [
    {
      name: "Memory Verse",
      description:
        "MemoryVerse is an innovative Full Stack MERN application with User Registration and Enhanced Authentication; Seamless Sharing of Memorable Life Verses; Robust CRUD Functionality for effortless Post management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Mkaif079/",
    },
    {
      name: "Balloon Buster",
      description:
        "Balloon Buster is an action-packed arcade game where you use your hand in front of the webcam to pop colorful balloons and score points. Test your agility and timing in this thrilling balloon-popping challenge!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "pygame",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mkaif079/",
    },
    {
      name: "JackpotRush",
      description:
        "JavaScript-based slot machine game where users deposit money, choose their betting lines, spin the reels, and win prizes based on symbol combinations.It provides an engaging and interactive experience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Mkaif079/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };