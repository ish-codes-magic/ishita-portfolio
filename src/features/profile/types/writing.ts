export type WritingItem = {
  id: string;
  category: "Talk" | "Research writing" | "Related research talk";
  title: string;
  venue: string;
  period: string;
  summary: string;
  description: string;
  links: { label: string; href: string }[];
  isRelated?: boolean;
};
