export type Project = {
  id: string;
  title: string;
  summary?: string;
  category?: string;
  featured?: boolean;
  researchId?: string;
  isEarlierProject?: boolean;
  links?: { label: string; href: string }[];
  period: {
    start: string;
    end?: string;
  };
  link: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
};
