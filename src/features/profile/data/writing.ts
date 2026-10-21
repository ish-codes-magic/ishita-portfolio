import type { WritingItem } from "../types/writing";
import { WHITEBOX_RESEARCH } from "./aisafety";

export const WRITING_AND_TALKS: WritingItem[] = [
  {
    id: "black-hat-sector-janus",
    category: "Talk",
    title:
      "Janus: Defending LLM Agents Against Indirect Prompt Injection at the Tool-Call Boundary",
    venue: "Black Hat Arsenal — SecTor 2026",
    period: "October 7, 2026 · Toronto, Canada",
    summary:
      "Co-presented Janus, an open-source security framework for autonomous LLM agents, with Evan Harris. The demonstration explored runtime tool-call interception and least-privilege policy enforcement as practical mechanisms for mitigating indirect prompt-injection risks.",
    description: `Presented at Black Hat Arsenal, SecTor 2026, on October 7 in Toronto, Canada.

The presentation demonstrated runtime tool-call interception and least-privilege policy enforcement as practical mechanisms for mitigating indirect prompt-injection risks.

**Co-presenter:** Evan Harris.`,
    links: [
      {
        label: "Official listing",
        href: "https://blackhat.com/sector/arsenal/schedule/index.html",
      },
    ],
  },
  {
    id: "whitebox-cot-report",
    category: "Research writing",
    title: WHITEBOX_RESEARCH.title,
    venue: "Whitebox Research",
    period: "2025",
    summary:
      "Co-authored research investigating reasoning faithfulness in multimodal language models. The research code and report document controlled comparisons of mathematically equivalent text and image-based problems, evaluating answer correctness and indicators of reasoning faithfulness.",
    description:
      "I contributed to the experimental framework, evaluation pipeline, analysis, and research report. The full research description, including the models and evaluation setting, is available in the Research section.",
    links: WHITEBOX_RESEARCH.links,
  },
  {
    id: "usenix-threat-modeling",
    category: "Related research talk",
    title:
      "Detecting Security Posture Drift in AI-Driven Software Development via Continuous Threat Modeling",
    venue: "USENIX Security 2026 · Enigma Track",
    period: "2026",
    isRelated: true,
    summary:
      "Related presentation on the broader continuous threat-modeling research, delivered by Preeti Ravindra. The talk explores how threat-model differencing can surface security posture drift as AI-assisted development changes application architectures, permissions, and configurations.",
    description:
      "**Presenter: Preeti Ravindra.** The broader research was featured at USENIX Security 2026, Enigma Track. My involvement was in the collaborative research described in the Research section.",
    links: [
      {
        label: "Presentation · Preeti Ravindra",
        href: "https://www.usenix.org/conference/usenixsecurity26/presentation/ravindra",
      },
    ],
  },
];
