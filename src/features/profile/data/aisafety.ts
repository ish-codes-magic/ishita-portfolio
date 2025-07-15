import type { AISafety } from "../types/ai-safety";

export const AISafetyProjects: AISafety[] = [
  {
    id: "ai-safety-fellowship-by-whitebox-research",
    title: "AI Safety Fellowship by Whitebox Research",
    skills: [
      "Machine Learning",
      "AI Safety",
      "AI Interpretability",
      "Chain-of-Thought",
      "RLHF",
      "Model Evaluation",
      "Research",
      "Technical Writing",
    ],
    description: `Selected as one of 20 fellows from a pool of over 1000 applicants for the prestigious AI Safety Fellowship organized by Whitebox Research.
- Participated in a rigorous 3-month program focused on foundational and advanced concepts in machine learning and AI alignment, with a strong emphasis on technical understanding and interpretability.
- Completed structured coursework and discussions on topics such as Model evaluations, SAEs, AI Interpretability, RLHF and more.
- Engaged in weekly mentor-led sessions and peer-group discussions, reinforcing technical concepts through collaborative learning and problem-solving.
- Developed a capstone research project in the final phase, investigating unfaithfulness in Chain-of-Thought (CoT) reasoning—analyzing where and how model-generated reasoning deviates from true causal chains.
- Gained hands-on experience with theoretical alignment techniques and interpretability tools, sharpening my understanding of how to evaluate and constrain model behavior.`,
    isExpanded: true,
  },
  {
    id: "cot-reasoning-for-multimodal-inputs",
    title:
      "Investigating Unfaithful Shortcuts in Chain-of-Thought Reasoning for Multimodal Inputs",
    skills: [
      "AI Safety Evaluations",
      "Chain-of-Thought",
      "Python",
      "Research",
      "LLMs",
      "Prompt Engineering",
      "Model Evaluation",
      "Model Safety",
      "Chain-of-Thought",
      "Technical Writing",
    ],
    description: `Capstone research project as part of the AI Safety Fellowship (Whitebox Research) focused on evaluating the faithfulness of Chain-of-Thought (CoT) reasoning in large multimodal models.
- Studied how multimodal LLMs (Claude 3.7 Sonnet and Gemini 2.0 Flash Experimental) reason over semantically equivalent math problems presented in both text and image modalities using a custom-curated subset of the PutnamBench dataset.
- Built a 5-stage end-to-end evaluation pipeline.
- Designed a normalized unfaithfulness metric to compare reasoning across problems with varying lengths and complexities.
- Found that both models showed comparable reasoning patterns and accuracy across modalities, with very low incidence of fully unfaithful shortcuts.
- Identified limitations including compute constraints, token limits, and reliance on LLM-based auto-raters for CoT step evaluation and proposed future directions including expanding the benchmark across different domains and developing a Unfaithful Shortcuts Benchmark for more comprehensive faithfulness testing.`,
    isExpanded: true,
  },
];
