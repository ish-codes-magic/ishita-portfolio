import type { Award } from "../types/awards";

export const AWARDS: Award[] = [
  {
    id: "black-hat-sector-2026",
    prize: "Selected Arsenal Presenter",
    title: "Black Hat SecTor 2026",
    date: "2026-10-07",
    grade: "Research",
    description:
      "Selected to co-present Project Janus at Black Hat SecTor Arsenal 2026 in Toronto, Canada. The demonstration showcased runtime security enforcement for LLM agents, focusing on indirect prompt injection, least-privilege tool access, and deterministic policy enforcement.",
    referenceLink: "https://blackhat.com/sector/arsenal/schedule/index.html",
  },
  {
    id: "kvpy-2018",
    prize: "KVPY Scholar",
    title: "Kishore Vaigyanik Protsahan Yojana",
    date: "2018",
    grade: "National fellowship",
    description:
      "Selected for the Kishore Vaigyanik Protsahan Yojana (KVPY), a national fellowship program supporting students with strong aptitude and potential for scientific research.",
  },
  {
    id: "whitebox-fellowship-2025",
    prize: "AI Interpretability Research Fellow",
    title: "Whitebox Research",
    date: "2025",
    grade: "Research fellowship",
    description:
      "Selected for a technical AI safety research fellowship focused on mechanistic interpretability, model evaluations, and chain-of-thought reasoning. Co-developed and co-authored research investigating reasoning faithfulness in multimodal language models.",
    referenceLink:
      "https://github.com/whitebox-research/c2-proving-ground-martinez-cot",
  },
  {
    id: "d9f4e5a6-7b8c-6d9e-0f1a-3b4c5d6e7f8a",
    prize: "Summer Research Fellow",
    title: "DESY Summer Research Fellowship 2021",
    date: "2021-07",
    grade: "University",
    description:
      "Selected for the DESY Summer Research Fellowship in 2021, participating in an eight-week scientific computing and machine learning research project.",
  },
  {
    id: "a144bd19-3706-4e4c-ba22-0e0d8302642a",
    prize: "Rank 4379 out of 2,00,000",
    title: "JEE Advanced 2018",
    isAcademicDistinction: true,
    date: "2018-05",
    grade: "Grade 12",
    description: "Achieved top 2.2 percentile in JEE Advanced 2018",
    // referenceLink:
    //   "https://drive.google.com/file/d/16bia3XoeVbSlfvg4FzVapQf3LVI8wUA-/view?usp=sharing",
  },
  {
    id: "b7f2c8d9-4e5f-4a6b-8c9d-1e2f3a4b5c6d",
    prize: "Rank 1757 out of 8,00,000",
    title: "JEE Mains 2018",
    isAcademicDistinction: true,
    date: "2018-04",
    grade: "Grade 12",
    description: "Achieved top 0.2 percentile in JEE Mains 2018",
  },
  {
    id: "c8e3d4f5-6a7b-5c8d-9e0f-2a3b4c5d6e7f",
    prize: "Rank 112 out of 50,000",
    title: "NEST Exam 2018",
    isAcademicDistinction: true,
    date: "2018-06",
    grade: "Grade 12",
    description:
      "Achieved top 0.2 percentile in National Entrance Screening Test (NEST) 2018",
  },
];
