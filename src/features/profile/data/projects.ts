import type { Project } from "../types/projects";
import {
  ALGOVERSE_RESEARCH,
  JANUS_RESEARCH,
  WHITEBOX_RESEARCH,
} from "./aisafety";

export const PROJECTS: Project[] = [
  {
    id: "janus",
    title: "Janus — System-Level Security for LLM Agents",
    category: "Featured · Open-source security",
    featured: true,
    researchId: JANUS_RESEARCH.id,
    period: { start: "2026" },
    summary:
      "An open-source Python framework that helps defend autonomous LLM agents against indirect prompt injection through runtime tool-call security policies.",
    description: `LLM agents can encounter malicious instructions embedded in external documents, websites, repository issues, and tool responses. If followed, these instructions may induce unauthorized actions.

Janus takes a system-level approach by enforcing security policies at the point where an agent attempts to invoke external tools.

Rather than relying on the model to decide whether an action is safe, the framework validates tool calls against deterministic policies before execution.

Key capabilities include:
- Runtime tool-call interception and policy enforcement
- Least-privilege access controls
- JSON Schema-based restrictions on tool arguments
- Integrations with LLM providers and agent frameworks
- Security testing and adversarial demonstrations

Developed through AI Safety Camp and presented at Black Hat Arsenal, SecTor 2026.`,
    skills: [
      "Python",
      "LLM Agents",
      "JSON Schema",
      "Agent Frameworks",
      "Runtime Security",
      "AI Control",
    ],
    link: JANUS_RESEARCH.link,
    links: JANUS_RESEARCH.links,
  },
  {
    id: "multimodal-cot-faithfulness",
    title: "Multimodal Chain-of-Thought Faithfulness",
    category: "Featured · Research project",
    featured: true,
    researchId: WHITEBOX_RESEARCH.id,
    period: { start: "2025" },
    summary: WHITEBOX_RESEARCH.summary,
    skills: WHITEBOX_RESEARCH.skills,
    link: WHITEBOX_RESEARCH.link,
  },
  {
    id: "shutdown-resistance-model-organisms",
    title: "Shutdown-Resistance Model Organisms",
    category: "Research project · Algoverse",
    researchId: ALGOVERSE_RESEARCH.id,
    period: { start: "2026" },
    summary: ALGOVERSE_RESEARCH.summary,
    skills: ALGOVERSE_RESEARCH.skills,
    link: `/#${ALGOVERSE_RESEARCH.id}`,
  },
  {
    id: "transformer-model-implementation-from-scratch",
    title: "Transformer from Scratch",
    category: "Engineering project",
    period: { start: "2024" },
    summary:
      'Implemented the Transformer architecture from the original "Attention Is All You Need" paper using PyTorch to explore its underlying mathematics and computational structure.',
    description: `Implemented core Transformer components including multi-head attention, positional encoding, encoder and decoder blocks, feed-forward networks, residual connections, and attention masking.

The project provided a hands-on exploration of how attention-based sequence modeling works, from individual mathematical operations to the complete architecture.`,
    skills: [
      "Python",
      "PyTorch",
      "Transformers",
      "Attention Mechanisms",
      "Deep Learning",
    ],
    link: "https://github.com/ish-codes-magic/transformer_from_scratch",
  },
  {
    id: "gpt-art-critique",
    title: "Art Critique GPT — Multimodal Artwork Analysis",
    category: "Engineering project",
    period: { start: "2024" },
    summary:
      "Built a multimodal AI application that analyzes uploaded artwork and generates structured critiques, interpretations, and feedback using vision-capable language models.",
    description: `Developed an application using GPT-4 Vision to interpret artwork and generate structured evaluations covering visual composition, artistic technique, interpretation, and constructive feedback.

Integrated Jinja2 for configurable prompts, Pydantic and Instructor for typed structured outputs, and Streamlit for an interactive user interface.

The project explores how multimodal LLMs can support creative analysis through structured, reproducible output formats.`,
    skills: [
      "Python",
      "GPT-4 Vision",
      "Streamlit",
      "Pydantic",
      "Instructor",
      "Jinja2",
      "Multimodal AI",
    ],
    link: "https://github.com/ish-codes-magic/GPT_art_critique",
  },
  {
    id: "netflix-recommendation-system",
    title: "Content-Based Movie & TV Recommendation System",
    category: "Earlier project",
    isEarlierProject: true,
    period: { start: "2024" },
    summary:
      "Built a recommendation application using content-based filtering to suggest movies and television shows based on similarities between content features.",
    description: `Developed a recommendation pipeline using the Netflix Movies and TV Shows dataset to identify related titles and provide personalized content discovery.

The project involved preprocessing metadata, extracting relevant features, implementing similarity-based ranking, and developing a user-facing recommendation interface.`,
    skills: [
      "Python",
      "Machine Learning",
      "Content-Based Filtering",
      "Data Analysis",
    ],
    link: "https://github.com/ish-codes-magic/Netflix_recommendation_system",
  },
];
