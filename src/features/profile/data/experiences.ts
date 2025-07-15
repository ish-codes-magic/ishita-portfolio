import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "storefox",
    companyName: "Storefox.ai",
    companyLogo:
      "https://assets.ishita-codes-ai.in/images/companies/storefox.jpg",
    positions: [
      {
        id: "founding-ai-engineer",
        title: "Founding Engineer and AI Lead",
        employmentPeriod: {
          start: "06.2024",
        },
        location: "Bangalore, India",
        employmentType: "Full-time",
        icon: "code",
        description: `- Led the end-to-end design and implementation of a scalable audio processing pipeline for analyzing customer-representative interactions in retail environments, delivering actionable insights to drive business performance in physical stores.
- Developed a robust system where raw audio is captured and cleaned using Silero Voice Activity Detection (VAD) to remove silent segments, followed by transcription via Gemini LLM models optimized for noisy retail settings.
- Designed a two-tiered processing architecture: internal clips were filtered and categorized using LLMs, while external clips were further analyzed to generate structured insights tailored to client needs.
- Instrumental in the development, testing, and validation of each pipeline component—built custom evaluation datasets and benchmarks to compare model performance, prompts, and filtering strategies.
- Achieved a consistent **80% accuracy** across all insight-generation tasks, earning positive feedback from over 15 active clients.
- Reduced audio processing time by **50%** (from 3 minutes to 1.5 minutes) and cut cost per hour of audio from **$100 to $20**, enabling the introduction of multiple pricing tiers for scalability.
- Acted as the technical lead and manager for 4 interns, guiding their workstreams and significantly improving team productivity through structured task delegation and mentoring.
- Worked closely with clients to understand domain-specific needs and customized the pipeline accordingly, resulting in high client satisfaction and successful adoption across diverse use cases.
- Collaborated cross-functionally with product, frontend, and backend engineering teams to align development with business goals, effectively multitasking across responsibilities and delivering high-impact results.`,
        skills: [
          "Azure Cloud",
          "GCP",
          "Speech-to-Text",
          "AWS",
          "AWS SageMaker",
          "Prompt Engineering",
          "LLMs",
          "GPT/Gemini models",
          "LLM evaluations",
          "Instructor",
          "MongoDB",
          "Jinja2",
          "Docker",
          "Redis",
          "Celery",
          "Python",
          "AI/ML",
          "API design",
          "Portkey",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hashkraft",
    companyName: "Hashkraft",
    companyLogo:
      "https://assets.ishita-codes-ai.in/images/companies/hashkraft.svg",
    positions: [
      {
        id: "lead-ai-researcher",
        title: "Lead AI Researcher",
        employmentPeriod: {
          start: "06.2023",
          end: "06.2024",
        },
        location: "Hyderabad, India",
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed a scalable AI-driven hiring platform that streamlined candidate evaluation, matching, and communication, with an estimated 50% reduction in hiring time through automation and intelligent retrieval.
        - Leveraged cutting-edge LLMs (GPT-4) alongside Retrieval-Augmented Generation (RAG) pipelines using LangChain, integrating with Chroma vector database to enable real-time semantic candidate-job matching.
        - Conducted detailed benchmarking and evaluations of different LLM configurations, embeddings, and RAG architectures to optimize cost, latency, and accuracy.
        - Led the design and deployment of an AI-based real estate chatbot, allowing users to search, query, and retrieve property listings using natural language.
        - Utilized GPT-4 for conversational context handling and Elasticsearch for fast and accurate property data retrieval across diverse queries.
        - Designed the entire system architecture, ensuring efficient state management, query parsing, and document retrieval, resulting in highly responsive and accurate user interactions.
        - Deployed the chatbot to production using AWS services (EC2, S3, Lambda), ensuring scalability, security, and uptime.
        - Managed and mentored a team of two interns, overseeing their project pipelines, providing code reviews, and ensuring timely deliverables aligned with business goals.
        - Set up project tracking, documentation workflows, and weekly syncs, improving team collaboration and technical output.
        - Drove cross-functional collaboration between backend, frontend, and product teams to ensure seamless integration and user experience.`,
        skills: [
          "LLMs",
          "GPT/Gemini models",
          "RAG",
          "Langchain",
          "Pinecone",
          "Chroma",
          "NLP",
          "AWS",
          "Elasticsearch",
          "Docker",
          "Scrapy",
          "Jira",
          "GitHub",
          "Whatsapp API",
          "API design",
          "Prompt Engineering",
          "Python",
          "Machine Learning",
          "AI/ML",
        ],
        isExpanded: true,
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
        id: "computer-vision-research-intern",
        title: "Computer Vision Research Intern",
        employmentPeriod: {
          start: "07.2022",
          end: "06.2023",
        },
        location: "Pune, India",
        employmentType: "Internship",
        icon: "code",
        description: `- Developed an AI based surveillance software with a team of about 5-6 people.
- Deployed on scale face recognition algorithms with an accuracy of **75%** on Spark.
- Optimised object detection on spark increasing processing speed from **16 to 30 frames/s**.
- Improved the loading time of the UI reducing it from **1-2 minutes to 15 seconds**.
- Developed a scalable and fault-tolerant system that can process **60 million images per day** by deploying it on Kubernetes.
- Automated the entire process of setting up our Kubernetes cluster using Ansible, reducing the deployment time from **3 hours to 15 minutes**.
- Managed a team of 7 full time interns working on 4 different projects, overseeing their onboarding and mentoring, increasing the productivity of the entire team by 13%.`,
        skills: [
          "Computer Vision",
          "Face Recognition",
          "Object Detection",
          "Apache Spark",
          "PySpark",
          "Docker",
          "Ansible",
          "Apache Kafka",
          "Elasticsearch",
          "Opensearch",
          "OpenCV",
          "PyTorch",
          "Github",
          "Kubernetes",
          "Ansible",
          "DevOps",
          "Team Management",
          "Python",
          "Machine Learning",
          "AI/ML",
          "System Optimization",
          "UI Development",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "cern",
    companyName: "Conseil européen pour la Recherche Nucléaire (CERN)",
    companyLogo: "https://assets.ishita-codes-ai.in/images/companies/cern.png",
    positions: [
      {
        id: "research-assistant",
        title: "Research Assistant",
        employmentPeriod: {
          start: "01.2021",
          end: "09.2021",
        },
        location: "Geneva, Switzerland",
        employmentType: "Internship",
        icon: "code",
        description: `- Contributed to a joint project between CERN and IISER Pune, focused on synthetic data generation for the Higgs boson decay process to enable more robust statistical analysis in particle physics experiments.
- Implemented the RealNVP normalizing flow model to generate synthetic data points from latent space, matching the original distribution of Higgs decay data from particle physics experiments.
- After performing statistical analysis on synthetically generated data, we found that the statistical results closely matched the experimental values, confirming the viability of RealNVP models for data augmentation in scientific research.`,
        skills: [
          "Particle Physics",
          "Synthetic Data Generation",
          "RealNVP",
          "Normalizing Flows",
          "Generative Modeling",
          "PyTorch",
          "MADGraph",
          "Statistical Analysis",
          "Deep Learning",
          "Python",
          "Scientific Research",
          "Data Augmentation",
          "Machine Learning",
        ],
        isExpanded: true,
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
        employmentPeriod: {
          start: "07.2021",
          end: "09.2021",
        },
        location: "Hamburg, Germany",
        employmentType: "Internship",
        icon: "code",
        description: `- Developed a predictive anomaly detection algorithm to forecast system failures during data transfers between global university experiments and DESY's data unit.
- Established and managed a distributed computing environment using Apache Spark to efficiently process terabytes of data, enabling scalable analysis for anomaly detection.
- Applied logistic regression on high-dimensional data, achieving an 85% accuracy in predicting system downtimes.`,
        skills: [
          "Anomaly Detection",
          "Predictive Analytics",
          "Apache Spark",
          "Distributed Computing",
          "Logistic Regression",
          "Big Data",
          "Machine Learning",
          "Python",
          "Data Science",
          "High-Dimensional Data",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "iiser-pune",
    companyName:
      "Indian Institute of Science Education and Research (IISER), Pune",
    positions: [
      {
        id: "research-assistant",
        title: "Research Assistant",
        employmentPeriod: {
          start: "01.2022",
          end: "05.2022",
        },
        location: "Pune",
        employmentType: "Internship",
        icon: "code",
        description: `- Explored and evaluated various clustering algorithms to identify the most effective method for analyzing epigenetic data.
- Developed and tested implementation pipelines for algorithms including K-Means, DBSCAN, Hierarchical Clustering, and others using Python and scikit-learn.
- Designed sample test cases and applied clustering techniques to biological datasets, comparing results across algorithms for accuracy and reliability.
- Assessed clustering quality using metrics such as the elbow method, silhouette score, and intra-cluster distance to determine optimal performance.
- Gained experience in unsupervised machine learning, data preprocessing, and applying statistical metrics to real-world scientific datasets.`,
        skills: [
          "Clustering Algorithms",
          "K-Means",
          "DBSCAN",
          "Hierarchical Clustering",
          "Unsupervised Learning",
          "Data Preprocessing",
          "Statistical Analysis",
          "Deep Learning",
          "Python",
          "Machine Learning",
          "AI/ML",
          "Data Science",
          "Data Preprocessing",
          "Statistical Analysis",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "genmark",
    companyName: "Genmark.ai",
    positions: [
      {
        id: "ai-consultant",
        title: "AI Consultant",
        employmentPeriod: {
          start: "09.2021",
          end: "10.2021",
        },
        location: "Delaware, USA",
        employmentType: "Freelance",
        icon: "code",
        description: `- Contributed to improving automation of client servicing tasks by streamlining API-based operations via the chatbot interface.
- Designed and developed an agentic chatbot capable of understanding complex user queries and executing appropriate actions autonomously.
- Integrated the chatbot with Genmark.ai's internal APIs, enabling real-time interaction and dynamic response generation based on API specifications.`,
        skills: [
          "Agentic AI",
          "LLMs",
          "Python",
          "Flask",
          "Firebase",
          "GCP",
          "API design",
          "Prompt Engineering",
        ],
        isExpanded: true,
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
        employmentPeriod: {
          start: "09.2021",
          end: "10.2021",
        },
        location: "Glasgow, Scotland",
        employmentType: "Internship",
        icon: "code",
        description: `- Worked on a research-oriented project exploring how neural networks can be used to probe Effective Field Theory (EFT) couplings, inspired by the ATLAS experiment and the paper "Parameterized Machine Learning for High-Energy Physics".
- Processed simulated event-level datasets using NumPy and Pandas, followed by exploratory data analysis (EDA) to understand feature distributions and parameter dependencies.
- Developed and trained a parameterized neural network that incorporates both event features and physics parameters as inputs, enabling smooth interpolation across different EFT coupling values.
- This project strengthened my knowledge of machine learning in high-energy physics, EFT parameterization, and designing neural networks that generalize over a range of theoretical parameters.`,
        skills: [
          "Machine Learning",
          "Deep Learning",
          "Python",
          "Data Science",
          "High-Energy Physics",
          "Effective Field Theory",
          "Parameterized Machine Learning",
          "Neural Networks",
          "AI/ML",
          "Data Science",
          "Data Preprocessing",
        ],
        isExpanded: true,
      },
    ],
  },
];
