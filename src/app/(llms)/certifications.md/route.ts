import { CERTIFICATIONS } from "@/features/profile/data/certifications";

function formatCertification(item: (typeof CERTIFICATIONS)[number]) {
  const title = item.credentialURL
    ? `[${item.title}](${item.credentialURL})`
    : item.title;
  return `- ${title} — ${item.issuer}, ${item.issueDate.slice(0, 4)}${item.description ? `\n  ${item.description}` : ""}`;
}

const content = `# Relevant Training & Certifications

${CERTIFICATIONS.filter((item) => !item.isAdditional)
  .map(formatCertification)
  .join("\n")}

## Additional Certifications

${CERTIFICATIONS.filter((item) => item.isAdditional)
  .map(formatCertification)
  .join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
