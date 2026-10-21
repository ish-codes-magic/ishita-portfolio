export type AISafety = {
  id: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  category: string;
  status?: "Selected / Upcoming";
  links?: { label: string; href: string }[];
  link?: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};
