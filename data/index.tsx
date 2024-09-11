import Image from "next/image";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];
  
  export const bentoGridItems = [
    {
      id: 1,
      title: "Education",
      description: "I am currently attending the University of Illinois at Urbana-Champaign with a major in Computer Engineering. I plan to graduate in December 2024 with my bachelors degree. Some of the relevant coursework I have taken are Artificial Intelligence, IoT and Cognitive Computing, Distributed Systems, Computer Systems Engineering, and Introduction to Algorithms and Models of Computation.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
      imgClassName: "w-full h-full -my-5",
      titleClassName: "justify-start",
      img: "/uiuclogo.png",
      // spareImg: "/19096.jpg",
    },
    {
      id: 2,
      title: "Hobbies",
      description: "I enjoy taking photos occasionally either on my phone or my Nikon D5100 and then editing them in lightroom. Below is a linked photo if you want to see more. Additionally I enjoy to play pickleball with my friends sometimes.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-4 ",
      imgClassName: "mb-12",
      titleClassName: "justify-start",
      img: "/IMG_9020.jpg",
      imglink:"https://www.instagram.com/_opphoto_/",
      // spareImg: "/19096.jpg",
    },
    {
      id: 3,
      title: "Résumé",
      description: "Here is a link to my résumé.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-6",
      imgClassName: "",
      titleClassName: "justify-start",
      // img: "/grid.svg",
      // spareImg: "/19096.jpg",
    },
  
    {
      id: 4,
      title: "Work Experience",
      description: "I interned for 2 summers and 2 school years at the Brunswick Corporation, a marine recreation company. While there, I worked on many software projects mainly in Python that focused on internal tools and QA. ",
      className: "md:col-span-3 md:row-span-12",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      // img: "/b5.svg",
      // spareImg: "/19096.jpg",
    },
    {
      id: 5,
      title: "Self-Learning",
      description: "I try to learn new services and attempt to improve myself when I have time. For example during Summer 2024 I learned about Microsoft Azure and acquired 3 certifications which you can see below.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-6",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      // img: "",
      // spareImg: "/19096.jpg",
    },
  ];
  
//   export const projects = [
//     {
//       id: 1,
//       title: "3D Solar System Planets to Explore",
//       des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
//       img: "/p1.svg",
//       iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
//       link: "https://github.com/adrianhajdin?tab=repositories",
//     },
//     {
//       id: 2,
//       title: "Yoom - Video Conferencing App",
//       des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//       img: "/p2.svg",
//       iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
//       link: "https://github.com/adrianhajdin/zoom-clone",
//     },
//     {
//       id: 3,
//       title: "AI Image SaaS - Canva Application",
//       des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//       img: "/p3.svg",
//       iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
//       link: "https://github.com/adrianhajdin/ai_saas_app",
//     },
//     {
//       id: 4,
//       title: "Animated Apple Iphone 3D Website",
//       des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//       img: "/p4.svg",
//       iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
//       link: "https://github.com/adrianhajdin/iphone",
//     },
//   ];
  
//   export const testimonials = [
//     {
//       quote:
//         "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//       name: "Michael Johnson",
//       title: "Director of AlphaStream Technologies",
//     },
//     {
//       quote:
//         "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//       name: "Michael Johnson",
//       title: "Director of AlphaStream Technologies",
//     },
//   ];
  
//   export const companies = [
//     {
//       id: 1,
//       name: "cloudinary",
//       img: "/cloud.svg",
//       nameImg: "/cloudName.svg",
//     },
//     {
//       id: 2,
//       name: "appwrite",
//       img: "/app.svg",
//       nameImg: "/appName.svg",
//     },
//   ];
  
//   export const workExperience = [
//     {
//       id: 1,
//       title: "Frontend Engineer Intern",
//       desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//       className: "md:col-span-2",
//       thumbnail: "/exp1.svg",
//     },
//     {
//       id: 2,
//       title: "Mobile App Dev - JSM Tech",
//       desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//       className: "md:col-span-2", // change to md:col-span-2
//       thumbnail: "/exp2.svg",
//     },
//   ];
  
//   export const socialMedia = [
//     {
//       id: 1,
//       img: "/git.svg",
//     },
//     {
//       id: 2,
//       img: "/twit.svg",
//     },
//     {
//       id: 3,
//       img: "/link.svg",
//     },
//   ];

// export const cards = [
// {
// description: "Lana Del Rey",
// title: "Summertime Sadness",
// src: "/IMG_9020.jpg",
// ctaText: "Explore",
// ctaLink: "https://ui.aceternity.com/templates",
// content: () => {
//     return (
//     <p>
//         Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//         her melancholic and cinematic music style. Born Elizabeth Woolridge
//         Grant in New York City, she has captivated audiences worldwide with
//         her haunting voice and introspective lyrics. <br /> <br /> Her songs
//         often explore themes of tragic romance, glamour, and melancholia,
//         drawing inspiration from both contemporary and vintage pop culture.
//         With a career that has seen numerous critically acclaimed albums, Lana
//         Del Rey has established herself as a unique and influential figure in
//         the music industry, earning a dedicated fan base and numerous
//         accolades.
//     </p>
//     );
// },
// },
// ];
export const cards = [
  {
    description: "Founder, CEO & CTO",
    title: "Madhav KSV",
    src: "/IMG_9020.jpg",
    ctaText: "https://ui.aceternity.com/templates",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Leading our innovative team is Madhav, an accomplished IIT Kharagpur graduate with over 18 years of industry experience. His impressive career includes key roles at top-tier companies like Nvidia and HP, where he honed his hands-on coding skills and built a strong delivery track record.  Madhavs enthusiasm for learning new technologies and mentoring teams underpins our dedication to excellence and innovation. Under his leadership, we are committed to delivering state-of-the-art solutions, building a strong technology team and fostering a culture of continuous growth and technological advancement.
        </p>
      );
    },
  },
  {
    description: "Founder, CIO & COO",
    title: "Akkiraju Hari Kishore",
    src: "/IMG_9020.jpg",
    ctaText: "https://ui.aceternity.com/templates",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Hari, a passionate advocate for testing as a service, brings over 26 years of IT industry experience to our leadership team. With extensive IT delivery expertise spanning start-ups, product companies, and both captive and vendor organizations, he is well-versed in digital transformation and transitioning work from onshore to offshore. <br /> <br /> His robust background includes over a decade of coding experience in application development and maintenance. Hari has held leadership roles at tech giants such as Wells Fargo and Infosys, showcasing his ability to drive innovation and excellence across diverse environments.
        </p>
      );
    },
  },
];