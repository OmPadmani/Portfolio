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
      description: "I interned for 2 summers and 2 school years at the Brunswick Corporation, a marine recreation company. While there, I worked in an Agile environment on many software projects, mainly in Python, that focused on internal tools and QA regarding a mobile app for boat owners. One such project was a theming project in Python that utilized OpenCV computer vision to ensure that the differently branded apps did not include any other brand's elements. This theming automation helped to reduce QA workload during the release cycle. Another project I worked on involved translating old boat trip JSON data files into a CSV compatible with newer hardware systems which enabled a replay functionality to demonstrate and test boat trips on the app without the need for an actual boat trip, increasing efficiency within our QA team. I had a great time while at Brunswick and learned alot about how a real team operates and collaborates.",
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
  