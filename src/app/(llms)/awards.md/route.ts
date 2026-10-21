import { AWARDS } from "@/features/profile/data/awards";

function formatAward(item: (typeof AWARDS)[number]) {
  return `## ${item.prize} | ${item.title}\n\n${item.date.slice(0, 4)}\n\n${item.description}${item.referenceLink ? `\n\nReference: ${item.referenceLink}` : ""}`;
}

const content = `# Recognition & Fellowships

${AWARDS.filter((item) => !item.isAcademicDistinction)
  .map(formatAward)
  .join("\n\n")}

# Earlier Academic Distinctions

${AWARDS.filter((item) => item.isAcademicDistinction)
  .map(formatAward)
  .join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
