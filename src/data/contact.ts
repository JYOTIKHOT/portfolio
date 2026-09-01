export type SocialIcon = "github" | "linkedin";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export interface ContactData {
  title: string;
  description: string;
  socialLinks: SocialLink[];
  email: string;
  location: string;
}

export const contactData: ContactData = {
  title: "Get In Touch",
  description:
    "Have a question or want to work together? Feel free to reach out!",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/JYOTIKHOT", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jyoti-khot-166238215/",
      icon: "linkedin",
    },
  ],
  email: "jyotikhot1312@gmail.com",
  location: "Gurugram, India",
};
