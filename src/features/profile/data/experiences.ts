import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "storefox",
    companyName: "Storefox.ai",
    companyLogo: "https://assets.chanhdai.com/images/companies/storefox.webp",
    positions: [
      {
        id: "founding-ai-engineer",
        title: "Founding AI engineer - Core Team",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Designing and implementing a scalable system for capturing and analyzing customer-representative interactions in retail environments.
- Working with state-of-the-art ASR models, Speaker Embeddings and Audio Models to transcribe large volumes of audio data, optimizing for accuracy in noisy and dynamic retail settings.
- Integrating transcribed data into LLMs to generate insights from customer-representative conversations, to drive business for physical stores.
- Collaborating with teams across machine learning, data engineering, and retail operations to design, test, and deploy the audio analysis system.`,
        skills: [
          "ASR Models",
          "Speaker Embeddings",
          "Audio Models",
          "LLMs",
          "Machine Learning",
          "Data Engineering",
          "System Architecture",
          "Retail Analytics",
          "Python",
          "AI/ML",
          "Audio Processing",
          "NLP",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hashkraft",
    companyName: "Hashkraft",
    positions: [
      {
        id: "lead-data-scientist",
        title: "Lead Data Scientist",
        employmentPeriod: {
          start: "06.2022",
          end: "06.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Designed and built a large-scale hiring platform leveraging advanced AI techniques, including LLMs (e.g., GPT-4), Retrieval-Augmented Generation (RAG) frameworks (e.g., Langchain), and vector databases (e.g., Chroma), reducing hiring time by 90%.
- Led the end-to-end design and development of an AI-based real estate chatbot, applying advanced NLP models (GPT-4) and Elasticsearch for accurate property search and retrieval, showcasing strong system architecture and algorithm design skills and deploying it to cloud using AWS.
- Managed a team of two interns, guiding them through development projects while overseeing workflow management.`,
        skills: [
          "LLMs",
          "GPT-4",
          "RAG",
          "Langchain",
          "Vector Databases",
          "Chroma",
          "NLP",
          "Elasticsearch",
          "AWS",
          "System Architecture",
          "Team Management",
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
    positions: [
      {
        id: "data-science-intern",
        title: "Data Science Intern",
        employmentPeriod: {
          start: "10.2021",
          end: "12.2021",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed an AI based surveillance software with a team of about 5-6 people.
- Deployed on scale face recognition algorithms with an accuracy of 75% on Spark.
- Optimised object detection on spark increasing processing speed from 16 to 30 frames/s.
- Improved the loading time of the UI reducing it from 1-2 minutes to 15 seconds.
- Developed a scalable and fault-tolerant system that can process 60 million images per day by deploying it on Kubernetes.
- Automated the entire process of setting up our Kubernetes cluster using Ansible, reducing the deployment time from 3 hours to 15 minutes.
- Managed a team of 7 full time interns working on 4 different projects, overseeing their onboarding and mentoring, increasing the productivity of the entire team by 13%.`,
        skills: [
          "Computer Vision",
          "Face Recognition",
          "Object Detection",
          "Apache Spark",
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
    id: "desy",
    companyName: "Deutsches Elektronen-Synchrotron (DESY)",
    positions: [
      {
        id: "summer-research-intern",
        title: "Summer Research Intern",
        employmentPeriod: {
          start: "10.2021",
          end: "12.2021",
        },
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
    id: "cern",
    companyName: "Conseil européen pour la Recherche Nucléaire (CERN)",
    positions: [
      {
        id: "research-assistant",
        title: "Research Assistant",
        employmentPeriod: {
          start: "10.2021",
          end: "12.2021",
        },
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
];
