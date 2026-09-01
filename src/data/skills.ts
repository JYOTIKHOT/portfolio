export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillsData {
  title: string;
  categories: SkillCategory[];
}

export const skillsData: SkillsData = {
  title: "Skills & Technologies",
  categories: [
    {
      title: "Core Engineering",
      skills: [
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Git" },
      ],
    },
    {
      title: "AI & Emerging Tech",
      skills: [{ name: "Github Copilot" }, { name: "Claude Code" }],
    },
  ],
};
