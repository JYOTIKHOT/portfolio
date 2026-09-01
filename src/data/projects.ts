import projectImageOne from "../assets/projectImages/jyo-stocks.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  sourceUrl: string;
  category: string;
}

export interface ProjectsData {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

export const projectsData: ProjectsData = {
  title: "Featured Projects",
  description:
    "Here are some of my recent works. Hover over the cards to learn more.",
  categories: [],
  projects: [
    {
      id: 1,
      title: "Jyo Stocks",
      description:
        "A stock application which can list stocks and can display real-time data.",
      technologies: ["React", "Javascript"],
      image: projectImageOne,
      demoUrl: "https://jyotikhot.github.io/jyo-stocks/",
      sourceUrl: "https://github.com/JYOTIKHOT/jyo-stocks",
      category: "frontend",
    },
  ],
};
