import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and material UI, as well as back-end technologies like Node.js, MySQL ,express and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, netlify(basic),render(basic) and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "•	Secure login and registration using JSON Server Auth. Access to the cart and dashboard is restricted to authenticated users	Browse, search, and sort products by price and availability. Implemented all CRUD operations 	Context API and Reducer for efficient and centralized state handling. ",
    technologies: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/neerajne/eCommerce",
    deployed: "https://codebookul.netlify.app",
  },
  {
    title: " Meal express",
    image: project2,
    description:
      "•	created a feature-rich meal delivery system with the MERN stack. 	JWT was used to implement secure user permission and authentication. 	Stripe was integrated to handle payments securely. RESTful APIs were developed for effective backend services. enabled order processing, responsive design, and dynamic product management. ",
    technologies: ["React", "Node.js", "MongoDB", "Expressjs"],
    githubLink: "https://github.com/neerajne/FoodDelievery",
    deployed: "https://github.com/neerajne/FoodDelievery",
  },
  {
    title: "Cinemate App",
    image: project3,
    description:
      "•Uses tmdbAPI to fetch movies real-time information . 	Built responsive UI with React and Tailwind css. ",
    technologies: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/neerajne/Cinematee",
    deployed: "https://tmdbcinemate.netlify.app/",
  },

  {
    title: "ConnectFlock",
    image: project4,
    description:
      "•	Implemented secure user authentication, profile management, and user search functionality. 	Developed one-on-one and group chat features with admin controls for group management.	Integrated real-time messaging and notifications using Socket.IO. Built responsive UI with React and Chakra UI, ensuring seamless user experience. 	Designed RESTful API with Node.js/Express for efficient data handling. ",
    technologies: ["React", "Node.js", "MongoDB", "Expressjs"],
    githubLink: "https://github.com/neerajne/ChatApp",
    deployed: "https://connectflock.netlify.app/",
  },
  {
    title: "Trade-wind",
    image: project6,
    description:
      "Implemented functionality to display stock prices, indices, and trading volumes using a financial data API. Enabled users to place buy and sell orders with updates retrieved from a backend database. Integrated React Chart.js to provide graphical representations of stock data and portfolio performance.Created a responsive and intuitive user interface using React, ensuring usability across both desktop and mobile devices Built server-side functionality using Node.js and Express, with data stored and managed in MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Expressjs"],
    githubLink: "https://github.com/neerajne/Tradewind",
  },
];

export const CONTACT = {
  address: "clement town,Dehradun",
  phoneNo: "+91 7252976754 ",
  email: "nnegi637673@gmail.com / nneeraj9876@gmail.com",

};
