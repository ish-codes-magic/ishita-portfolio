import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://ishita-codes-ai.in",
  ogImage: USER.ogImage,
  description: USER.bio,
};

export const META_THEME_COLORS = {
  light: "#fdfaff",
  dark: "#1c1523",
};

export const MAIN_NAV: NavItem[] = [
  { title: "Home", href: "/#home" },
  { title: "About", href: "/#about" },
  { title: "Experience", href: "/#experience" },
  { title: "Research", href: "/#research" },
  { title: "Projects", href: "/#projects" },
  { title: "Writing & Talks", href: "/#writing" },
  { title: "Recognition", href: "/#recognition" },
  { title: "Contact", href: "/#contact" },
];

export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/ish-codes-magic/ishita-portfolio/tree/main";

export const UTM_PARAMS = {
  utm_source: "ishita-codes-ai.in",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
