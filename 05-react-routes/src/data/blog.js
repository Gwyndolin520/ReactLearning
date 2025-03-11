const blogs = [
  {
    id: 1,
    title: "10 Tips for Writing Clean and Maintainable CSS",
    content:
      "Writing clean and maintainable CSS is crucial for any frontend developer. In this blog, we'll explore 10 practical tips to improve your CSS skills, including BEM methodology, using CSS variables, and organizing your stylesheets.",
    author: "John Doe",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/1.jpg",
    views: 1200,
    favorites: 150,
    tags: ["CSS", "Frontend", "Best Practices"],
  },
  {
    id: 2,
    title: "Mastering Flexbox: A Comprehensive Guide",
    content:
      "Flexbox is a powerful layout module in CSS that makes it easy to design flexible and responsive layouts. This guide covers everything from the basics to advanced techniques, with practical examples to help you master Flexbox.",
    author: "Jane Smith",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/2.jpg",
    views: 950,
    favorites: 90,
    tags: ["CSS", "Flexbox", "Responsive Design"],
  },
  {
    id: 3,
    title: "Getting Started with React Hooks",
    content:
      "React Hooks revolutionized the way we write components in React. In this blog, we'll dive into the basics of useState, useEffect, and custom hooks, and how they can simplify your React code.",
    author: "Alice Johnson",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/3.jpg",
    views: 1500,
    favorites: 200,
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: 4,
    title: "Building a Responsive Navbar with CSS Grid",
    content:
      "Learn how to create a fully responsive navbar using CSS Grid. This tutorial covers everything from setting up the grid to adding animations and making it mobile-friendly.",
    author: "Bob Brown",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/4.jpg",
    views: 800,
    favorites: 75,
    tags: ["CSS", "CSS Grid", "Responsive Design"],
  },
  {
    id: 5,
    title: "Top 5 JavaScript Frameworks for Frontend Development in 2023",
    content:
      "With so many JavaScript frameworks available, it can be hard to choose the right one. In this blog, we'll compare the top 5 frameworks, including React, Vue, Angular, Svelte, and SolidJS, to help you decide which one is best for your project.",
    author: "Charlie Davis",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/5.jpg",
    views: 2000,
    favorites: 300,
    tags: ["JavaScript", "Frameworks", "Frontend"],
  },
  {
    id: 6,
    title: "How to Optimize Your Frontend Performance",
    content:
      "Frontend performance is critical for user experience. In this blog, we'll explore techniques like lazy loading, code splitting, and optimizing images to make your website faster and more efficient.",
    author: "Eva Green",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/6.jpg",
    views: 1300,
    favorites: 180,
    tags: ["Performance", "Frontend", "Optimization"],
  },
  {
    id: 7,
    title: "Introduction to TypeScript for Frontend Developers",
    content:
      "TypeScript is becoming increasingly popular in the frontend world. This blog provides an introduction to TypeScript, covering its benefits, basic syntax, and how to integrate it into your React or Vue projects.",
    author: "Frank White",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/7.jpg",
    views: 700,
    favorites: 60,
    tags: ["TypeScript", "JavaScript", "Frontend"],
  },
  {
    id: 8,
    title: "Creating Animations with CSS and JavaScript",
    content:
      "Animations can bring your website to life. In this blog, we'll explore how to create smooth animations using CSS transitions, keyframes, and JavaScript libraries like GSAP.",
    author: "Grace Lee",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/8.jpg",
    views: 1600,
    favorites: 220,
    tags: ["CSS", "JavaScript", "Animations"],
  },
  {
    id: 9,
    title: "A Beginner's Guide to Web Accessibility",
    content:
      "Web accessibility is essential for creating inclusive websites. This guide covers the basics of accessibility, including ARIA roles, semantic HTML, and tools to test your website's accessibility.",
    author: "Henry Black",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/9.jpg",
    views: 900,
    favorites: 85,
    tags: ["Accessibility", "Frontend", "Best Practices"],
  },
  {
    id: 10,
    title: "Building a Real-Time Chat App with React and Socket.IO",
    content:
      "In this tutorial, we'll build a real-time chat application using React for the frontend and Socket.IO for real-time communication. Learn how to set up the backend, handle messages, and deploy your app.",
    author: "Ivy Blue",
    image: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/10.jpg",
    views: 1100,
    favorites: 130,
    tags: ["React", "Socket.IO", "Real-Time"],
  },
];

export default blogs;
