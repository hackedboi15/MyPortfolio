
export type Project = {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  thumb?: string;
  theme?: "cyan" | "emerald" | "fuchsia" | "amber" | "purple";
  featured?: boolean; // for confetti, etc.
};
