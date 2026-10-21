import type { AISafety } from "../types/ai-safety";

export const JANUS_RESEARCH = {
  id: "research-janus",
  title: "AI Safety Camp — AI Control & Agent Security",
  role: "AI Safety Researcher / Research Engineer",
  period: "2026",
  category: "AI Safety Camp",
  summary:
    "Developed Janus, an open-source security framework for LLM agents that mitigates indirect prompt-injection risks through fine-grained, least-privilege policy enforcement at the tool-call boundary.",
  description: `Large language model agents increasingly interact with external tools, files, APIs, and untrusted information. These capabilities introduce security risks when malicious instructions embedded in lower-trust content influence an agent's actions.

At AI Safety Camp, I contributed to Project Janus, which explores a system-level approach to this problem.

Rather than relying exclusively on a model recognizing and refusing malicious instructions, Janus enforces security restrictions on the actions an agent is permitted to perform.

My contributions included developing the framework into a reusable Python library, working on integrations with agent frameworks and model providers, testing policy enforcement, and creating demonstrations involving indirect prompt-injection scenarios.

The framework supports deterministic policies, tool-call interception, JSON Schema argument restrictions, and least-privilege access controls.

Janus was presented at Black Hat Arsenal, SecTor 2026.`,
  skills: [
    "AI Control",
    "Agent Security",
    "Prompt Injection",
    "Runtime Policy Enforcement",
    "Adversarial Robustness",
  ],
  link: "https://github.com/Agentic-AI-Risk-Mitigation/Janus",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Agentic-AI-Risk-Mitigation/Janus",
    },
    {
      label: "Documentation",
      href: "https://agentic-ai-risk-mitigation.github.io/Janus/",
    },
  ],
} satisfies AISafety;

export const ALGOVERSE_RESEARCH: AISafety = {
  id: "research-algoverse",
  title: "Model Organisms of Shutdown Resistance & Emergent Misalignment",
  role: "AI Safety Research Fellow",
  period: "2026",
  category: "Algoverse",
  summary:
    "Investigating potentially dangerous language-model behaviors through fine-tuned model organisms, with a focus on shutdown resistance, emergent misalignment, and evaluating defensive interventions.",
  description: `Understanding dangerous model behaviors is difficult when those behaviors are rare, poorly specified, or difficult to reproduce experimentally.

Model organisms provide controlled settings in which researchers can induce and study particular behavioral patterns.

Through Algoverse, I worked on creating and evaluating model organisms exhibiting shutdown-resistant behavior.

The research involved fine-tuning language models to elicit targeted behaviors, designing behavioral evaluation scenarios, measuring the frequency of undesirable responses, and studying the effectiveness of defensive interventions.

The work also developed toward emergent misalignment: investigating whether narrowly targeted fine-tuning can lead to undesirable behavior outside the original training domain.

My contributions focused on model-organism development, fine-tuning, evaluation design, and experimental analysis.

#### Research questions
- Under what conditions do models exhibit shutdown-resistant behavior?
- How reliably can these behaviors be measured?
- How effective are defensive interventions across different settings?
- When do narrowly induced behaviors generalize beyond their training context?`,
  skills: [
    "AI Alignment",
    "Model Organisms",
    "Shutdown Resistance",
    "Emergent Misalignment",
    "Fine-Tuning",
    "Behavioral Evaluations",
  ],
};

export const WHITEBOX_RESEARCH = {
  id: "research-whitebox",
  title: "From Words to Images: Is CoT Still Trustworthy?",
  role: "AI Interpretability Research Fellow",
  period: "2025",
  category: "Whitebox Research",
  summary:
    "Investigated the faithfulness of chain-of-thought reasoning in frontier multimodal language models through controlled comparisons of mathematically equivalent text and image-based problems.",
  description: `As language models increasingly generate detailed reasoning traces, an important question arises: how faithfully do those explanations reflect the processes responsible for their answers?

During the Whitebox Research AI Interpretability Fellowship, I co-developed an evaluation framework to investigate this question in multimodal reasoning.

The project examined Claude 3.7 Sonnet and Gemini 2.0 Flash Experimental using mathematical problems based on PutnamBench, presented in equivalent text and image modalities.

We compared answer correctness, reasoning behavior, and indicators of reasoning faithfulness across the two modalities.

The research investigated whether models produce plausible explanations that omit important parts of the reasoning process, and whether changing the input modality affects the frequency or character of such behavior.

The study found evidence of partially unfaithful reasoning and highlighted limitations of treating generated chain-of-thought as a transparent account of model reasoning.

I contributed to the experimental framework, evaluation pipeline, analysis, and research report.`,
  skills: [
    "Chain-of-Thought Faithfulness",
    "AI Interpretability",
    "Multimodal LLMs",
    "Reasoning Evaluations",
    "AI Safety",
  ],
  link: "https://github.com/whitebox-research/c2-proving-ground-martinez-cot",
  links: [
    {
      label: "Research code & report",
      href: "https://github.com/whitebox-research/c2-proving-ground-martinez-cot",
    },
  ],
} satisfies AISafety;

export const AISafetyProjects: AISafety[] = [
  JANUS_RESEARCH,
  ALGOVERSE_RESEARCH,
  WHITEBOX_RESEARCH,
  {
    id: "research-threat-modeling",
    title: "Continuous Threat Modeling for AI-Driven Software Development",
    role: "AI Security Research",
    period: "Collaborative project",
    category: "Continuous Threat Modeling — Stealth",
    summary:
      "Exploring graph-based representations of software architectures and continuous threat-model updates to identify security posture drift as AI-assisted development changes application systems.",
    description: `Traditional threat modeling is often performed at discrete points in the software development lifecycle. In rapidly evolving systems, particularly those developed with AI-assisted engineering workflows, security-relevant architectural changes can occur much more frequently.

This research explores how threat models can evolve alongside the systems they represent.

The approach uses graph-based representations of architectural components, dependencies, permissions, trust boundaries, and security-relevant relationships.

By comparing system representations over time, continuous threat modeling can help identify changes to attack surfaces, privilege relationships, and sensitive data flows.

I contributed to research examining how changes in application architecture and configuration can be connected to evolving security risks.

The broader research was featured in a presentation at USENIX Security 2026, Enigma Track, delivered by **Preeti Ravindra**.`,
    skills: [
      "Continuous Threat Modeling",
      "Security Posture Drift",
      "Graph-Based Analysis",
      "Application Security",
      "AI-Assisted Software Development",
    ],
    links: [
      {
        label: "Related presentation · Preeti Ravindra",
        href: "https://www.usenix.org/conference/usenixsecurity26/presentation/ravindra",
      },
    ],
  },
  {
    id: "research-mercial",
    title: "Reasoning Monitorability vs Agent-Trace Monitorability",
    role: "Selected AI Safety Research Project",
    period: "October 2026",
    category: "Mercial",
    status: "Selected / Upcoming",
    summary:
      "Selected for an AI safety research project investigating whether monitoring a model's generated reasoning or its observable actions provides more reliable evidence of unsafe agent behavior.",
    description: `Monitoring advanced AI agents is an important component of AI control and scalable oversight.

Two possible monitoring approaches examine different sources of evidence: the model's generated chain-of-thought reasoning, and its observable behavior, such as tool calls, actions, and execution traces.

This selected, upcoming research project investigates the strengths and limitations of these approaches.

The proposed work focuses on comparing their effectiveness at detecting unsafe or misaligned behavior, identifying cases in which one monitor detects information the other misses, and understanding how monitorability changes across different threat models.

The broader goal is to inform the design of practical monitoring systems for increasingly capable autonomous agents.

#### Proposed research questions
- What evidence of misbehavior is visible in reasoning traces but absent from observable actions?
- What behavior can agent-trace monitors detect even when reasoning is uninformative?
- Under what conditions are the two monitoring approaches complementary?
- How should monitoring effectiveness be evaluated under realistic threat models?`,
    skills: [
      "AI Control",
      "Chain-of-Thought Monitorability",
      "Agent Evaluations",
      "Scalable Oversight",
      "Misbehavior Detection",
    ],
  },
];
