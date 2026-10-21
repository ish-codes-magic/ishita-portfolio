import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";

const content = `# ${USER.displayName}

> ${SITE_INFO.description}

- [Home](${SITE_INFO.url}/): Founding AI engineer and AI safety researcher.
- [About & Expertise](${SITE_INFO.url}/about.md): Production multimodal AI, audio intelligence, agent systems, infrastructure, and AI safety.
- [Experience](${SITE_INFO.url}/experience.md): Employment at Storefox.ai, Hashkraft, and Coriolis, plus scientific research at IISER Pune, Glasgow, DESY, and CERN.
- [Research](${SITE_INFO.url}/research.md): Janus agent security, shutdown-resistant model organisms, emergent misalignment, multimodal chain-of-thought faithfulness, continuous threat modeling, and the selected/upcoming Mercial monitorability project.
- [Projects](${SITE_INFO.url}/projects.md): Open-source agent security, AI safety experiments, and engineering implementations.
- [Writing & Talks](${SITE_INFO.url}/writing.md): Black Hat SecTor Arsenal presentation, Whitebox research writing, and related USENIX research presented by Preeti Ravindra.
- [Recognition](${SITE_INFO.url}/awards.md): Black Hat Arsenal, KVPY, Whitebox, DESY, and earlier academic distinctions.
- [Training & Certifications](${SITE_INFO.url}/certifications.md): BlueDot Technical AI Safety and foundational machine learning training.
- [Contact](${SITE_INFO.url}/#contact): Email, LinkedIn, and GitHub.

`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
