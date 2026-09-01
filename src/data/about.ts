export interface AboutStat {
  label: string;
  valueTemplate: string; // e.g., "{years}+"
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  stats: AboutStat[];
  startDate: Date;
}

export const aboutData: AboutData = {
  title: "About Me",
  paragraphs: [
    "As a Software Developer, I aim to write efficient code, drive testing practices, and stay current with innovative technologies. My focus is on maintaining application availability, promoting collaboration, and ensuring code quality.",
    "Enthusiastic Front-End Developer with {years}+ years of experience leading and collaborating on complex ReactJS projects. Adept at building user-centric interfaces and fostering seamless integration with backend services. Proven ability to empower teams to deliver high-quality applications on time.",
  ],
  stats: [
    { label: "Years Experience", valueTemplate: "{years}+" },
    { label: "Projects Completed", valueTemplate: "10+" },
  ],
  startDate: new Date(2022, 8), // October 2019
};
