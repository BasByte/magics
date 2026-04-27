export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  url: string; // The URL to display in the iframe
  tags: string[];
  type: string;
  technologies: string[];
  dateCompleted: string; // YYYY-MM
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Neon Glow Button",
    shortDescription: "A mesmerizing pure CSS neon button hover effect.",
    description: "An advanced exploration of box-shadows, transitions, and z-index trickery to create a pulsing, highly engaging neon button suitable for cyberpunk themes or modern tech sites.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-1/index.html", // Dummy URL for iframe
    tags: ["UI", "Buttons", "Glow"],
    type: "Components",
    technologies: ["CSS3", "HTML5"],
    dateCompleted: "2023-11"
  },
  {
    id: "2",
    title: "CSS Grid Art",
    shortDescription: "A responsive generative art piece made entirely with CSS Grid.",
    description: "Pushing the boundaries of CSS Grid layout module. This project creates a Mondrian-style generative art puzzle that rearranges itself seamlessly on different screen sizes.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-2/index.html", // Dummy URL for iframe
    tags: ["Grid", "Layout", "Art"],
    type: "Layout",
    technologies: ["CSS Grid", "Animations"],
    dateCompleted: "2024-02"
  },
  {
    id: "3",
    title: "3D Flip Card",
    shortDescription: "Interactive 3D profile cards using CSS transforms.",
    description: "A highly interactive profile card that flips in 3D space when hovered, revealing social links and bio information. Built with performance in mind using hardware-accelerated transforms.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-3/index.html", // Dummy URL for iframe
    tags: ["3D", "Transforms", "Card"],
    type: "Components",
    technologies: ["CSS 3D", "Perspective"],
    dateCompleted: "2024-01"
  },
  {
    id: "4",
    title: "Parallax Scrolling Story",
    shortDescription: "A pure CSS native parallax scrolling experience.",
    description: "A digital storybook that leverages CSS 3D perspective to create a smooth, performant parallax scrolling effect without a single line of JavaScript.",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-4/index.html", // Dummy URL for iframe
    tags: ["Parallax", "Scrolling", "Story"],
    type: "Template",
    technologies: ["CSS Variables", "Transforms"],
    dateCompleted: "2023-09"
  },
  {
    id: "5",
    title: "Glassmorphism Login",
    shortDescription: "A modern glassmorphism login form UI.",
    description: "Implementation of the trendy glassmorphism design language featuring transparent blurred backgrounds, subtle borders, and delicate gradients.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-5/index.html", // Dummy URL for iframe
    tags: ["Glassmorphism", "Forms", "UI"],
    type: "Pages",
    technologies: ["Backdrop Filter", "CSS Gradients"],
    dateCompleted: "2024-03"
  },
    {
    id: "6",
    title: "Glassmorphism Login",
    shortDescription: "A modern glassmorphism login form UI.",
    description: "Implementation of the trendy glassmorphism design language featuring transparent blurred backgrounds, subtle borders, and delicate gradients.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop",
    url: "/logins/login-6/index.html", // Dummy URL for iframe
    tags: ["Glassmorphism", "Forms", "UI"],
    type: "Pages",
    technologies: ["Backdrop Filter", "CSS Gradients"],
    dateCompleted: "2024-03"
  }
];

// Helper functions for filters
export const getUniqueValues = (key: keyof Project | 'tags' | 'technologies') => {
  const values = projectsData.map(p => p[key]).flat();
  return Array.from(new Set(values));
};
