import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "storefox",
    companyName: "Storefox.ai",
    companyLogo:
      "https://assets.ishita-codes-ai.in/images/companies/storefox.jpg",
    isCurrentEmployer: true,
    positions: [
      {
        id: "founding-ai-engineer",
        title: "Founding Engineer and AI Lead",
        employmentPeriod: { start: "06.2024" },
        location: "Bangalore, India",
        employmentType: "Full-time",
        icon: "code",
        summary:
          "Leading the development of production multimodal AI systems that transform noisy, real-world retail audio into structured intelligence for customer experience, operations, and revenue optimization.",
        description: `- Architected and developed an end-to-end audio intelligence pipeline combining voice activity detection, speech recognition, conversational analysis, multimodal LLMs, and structured insight extraction.
- Designed custom evaluation and benchmarking frameworks for a problem without an established public benchmark, combining human-annotated ground truth, automated assessments, and LLM-as-judge methodologies.
- Built and optimized systems for challenging retail audio environments involving background noise, overlapping speech, speaker-identification ambiguity, and fragmented customer interactions.
- Improved internal benchmark accuracy to approximately **80%** across evaluated insight-generation tasks, while reducing processing time by **50%** and per-hour audio processing costs from approximately **$100 to $20**.
- Led four engineering interns and collaborated with product, engineering, and customer teams to translate business requirements into deployed AI capabilities.
- Contributed to model selection, infrastructure optimization, reliability improvements, and the evolution of the platform from proof of concept to production.`,
        skills: [
          "Python",
          "Multimodal LLMs",
          "ASR",
          "Voice Activity Detection",
          "LLM Evaluations",
          "AWS",
          "Cloud Infrastructure",
          "Model Optimization",
          "Production ML",
        ],
      },
    ],
  },
  {
    id: "hashkraft",
    companyName: "Hashkraft",
    companyLogo:
      "https://assets.ishita-codes-ai.in/images/companies/hashkraft.svg",
    positions: [
      {
        id: "lead-data-scientist",
        title: "Lead Data Scientist",
        employmentPeriod: { start: "06.2023", end: "06.2024" },
        location: "Hyderabad, India",
        employmentType: "Full-time",
        icon: "code",
        summary:
          "Led the design and deployment of applied LLM systems, including AI-assisted recruitment platforms, retrieval-augmented generation applications, and conversational AI products.",
        description: `- Led development of an AI-powered recruitment platform combining candidate-job matching, semantic retrieval, interview transcription, and LLM-based candidate evaluation.
- Developed retrieval-augmented generation (RAG) pipelines using GPT models, LangChain, vector databases, and Elasticsearch.
- Designed and deployed a conversational real-estate search assistant integrating natural-language understanding, property retrieval, and multi-channel communication.
- Evaluated alternative language models, embedding models, and retrieval strategies to optimize system accuracy, cost, and latency.
- Built cloud-based deployments using AWS services and contributed to end-to-end product architecture.
- Mentored two engineering interns and coordinated development across technical and product teams.`,
        skills: [
          "Python",
          "LLMs",
          "RAG",
          "LangChain",
          "GPT",
          "Elasticsearch",
          "Chroma",
          "AWS",
          "REST APIs",
        ],
      },
    ],
  },
  {
    id: "coriolis",
    companyName: "Coriolis Technologies",
    companyLogo:
      "https://assets.ishita-codes-ai.in/images/companies/coriolis.webp",
    positions: [
      {
        id: "member-of-technical-staff-intern",
        title: "Member of Technical Staff, Intern · Computer Vision",
        employmentPeriod: { start: "07.2022", end: "06.2023" },
        location: "Pune, India",
        employmentType: "Internship",
        icon: "code",
        summary:
          "Developed large-scale computer vision systems for visual recognition and tracking, focusing on distributed processing, model performance, and production infrastructure.",
        description: `- Developed and evaluated computer vision models for face recognition, object detection, and person re-identification.
- Improved visual-processing throughput through Apache Spark optimization, increasing frame-processing speed from approximately **16 to 30 frames per second** across system improvements.
- Worked on distributed image-processing architecture using Spark and Kubernetes to support high-volume workloads.
- Automated Kubernetes infrastructure setup using Ansible, reducing deployment time from approximately **three hours to fifteen minutes**.
- Evaluated recognition approaches under challenging image-quality conditions and integrated selected models into production workflows.
- Led and mentored engineering interns across multiple workstreams.`,
        skills: [
          "Computer Vision",
          "Deep Learning",
          "Python",
          "PySpark",
          "Apache Spark",
          "Kubernetes",
          "Ansible",
          "Docker",
        ],
      },
    ],
  },
  {
    id: "iiser-pune",
    companyName: "IISER Pune",
    positions: [
      {
        id: "research-assistant",
        title: "Research Assistant",
        employmentPeriod: { start: "01.2022", end: "05.2022" },
        location: "Pune, India",
        employmentType: "Internship",
        icon: "code",
        summary:
          "Investigated clustering methodologies for epigenetic datasets, applying unsupervised machine learning and statistical evaluation to biological research data.",
        description: `- Implemented K-Means, DBSCAN, hierarchical clustering, and related methods for analyzing epigenetic datasets.
- Developed preprocessing and evaluation workflows using Python and scikit-learn.
- Compared clustering results using silhouette scores, intra-cluster distances, and other quality measures.
- Investigated algorithm suitability, parameter selection, and interpretability of clustering outcomes.`,
        skills: [
          "Python",
          "scikit-learn",
          "Unsupervised Learning",
          "Statistics",
          "Data Analysis",
        ],
      },
    ],
  },
  {
    id: "glasgow",
    companyName: "University of Glasgow",
    positions: [
      {
        id: "research-assistant",
        title: "Research Assistant",
        employmentPeriod: { start: "09.2021", end: "10.2021" },
        location: "Glasgow, Scotland",
        employmentType: "Internship",
        icon: "code",
        summary:
          "Explored parameterized neural networks for high-energy physics, investigating how machine learning can model dependencies between simulated events and Effective Field Theory parameters.",
        description: `- Studied applications of parameterized machine learning to Effective Field Theory coupling analysis.
- Processed simulated particle physics datasets using NumPy and Pandas.
- Developed a neural-network model incorporating both event features and physics parameters.
- Investigated interpolation across parameter configurations and the applicability of neural networks to scientific inference.`,
        skills: [
          "Python",
          "Neural Networks",
          "NumPy",
          "Pandas",
          "Scientific Machine Learning",
          "High-Energy Physics",
        ],
      },
    ],
  },
  {
    id: "desy",
    companyName: "Deutsches Elektronen-Synchrotron (DESY)",
    positions: [
      {
        id: "summer-research-intern",
        title: "Summer Research Intern",
        employmentPeriod: { start: "07.2021", end: "09.2021" },
        location: "Hamburg, Germany",
        employmentType: "Internship",
        icon: "code",
        summary:
          "Developed a machine learning approach for detecting potential system failures in large-scale scientific data-transfer infrastructure at Deutsches Elektronen-Synchrotron (DESY).",
        description: `- Worked with approximately **10 TB** of transfer and telemetry data from dCache infrastructure.
- Designed distributed data-processing workflows using PySpark and Apache Spark.
- Developed a logistic regression-based anomaly detection approach to identify patterns associated with system downtime.
- Achieved approximately **85% predictive accuracy** in the evaluated experimental setting.
- Gained practical experience with large-scale scientific infrastructure, distributed computing, and reliability monitoring.`,
        skills: [
          "Apache Spark",
          "PySpark",
          "Python",
          "Logistic Regression",
          "Anomaly Detection",
          "Distributed Systems",
        ],
      },
    ],
  },
  {
    id: "cern",
    companyName: "CERN",
    companyLogo: "https://assets.ishita-codes-ai.in/images/companies/cern.png",
    positions: [
      {
        id: "undergraduate-researcher",
        title: "Undergraduate Researcher",
        employmentPeriod: { start: "01.2021", end: "09.2021" },
        location: "Geneva, Switzerland",
        employmentType: "Internship",
        icon: "code",
        summary:
          "Researched generative machine learning for high-energy physics, using normalizing flows to model complex particle physics distributions and support scientific analysis.",
        description: `- Contributed to a research project involving simulated Higgs boson decay data.
- Implemented RealNVP, a normalizing-flow architecture, to learn and generate samples from complex probability distributions.
- Investigated the consistency of generated and original physics data through statistical comparisons.
- Explored the application of deep generative modeling to scientific simulation and data augmentation.`,
        skills: [
          "Python",
          "Deep Learning",
          "Normalizing Flows",
          "RealNVP",
          "Statistics",
          "High-Energy Physics",
        ],
      },
    ],
  },
];
