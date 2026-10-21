import { AISafetyProjects } from "@/features/profile/data/aisafety";

const content = `# AI Safety Research

I investigate how advanced AI systems behave, how their failures can be measured, and how we can design mechanisms to keep them safe and controllable.

${AISafetyProjects.map((item) => `## ${item.title}\n\n${item.category} · ${item.role} · ${item.period}${item.status ? `\n\nStatus: ${item.status}` : ""}\n\n${item.summary}\n\n${item.description?.trim() || ""}\n\nResearch areas: ${item.skills.join(", ")}${item.links?.length ? `\n\n${item.links.map((link) => `- [${link.label}](${link.href})`).join("\n")}` : ""}`).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/markdown;charset=utf-8" },
  });
}
