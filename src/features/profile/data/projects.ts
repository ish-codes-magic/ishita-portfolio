import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "gpt-art-critique",
    title: "Art Critique GPT",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/GPT_art_critique",
    skills: [
      "GPT-4 Vision",
      "Instructor",
      "Pydantic",
      "Python",
      "Streamlit",
      "Prompt Engineering",
      "Jinja2",
      "Multimodal AI",
    ],
    description: `Built an art analysis application using GPT-4 Vision API to generate comprehensive critiques of artwork across various media types.
- Designed a structured analysis pipeline using OpenAI’s GPT-4 Vision, integrated through the OpenAI API for generating image-based art critiques.
- Implemented prompt engineering with Jinja2 templating to craft dynamic, customizable prompts guiding GPT output toward detailed and coherent evaluations.
- Utilised Pydantic models and the Instructor library to enforce strict type-safe, structured outputs from GPT responses—ensuring reliability and consistency.
- Developed a clean, responsive Streamlit UI allowing users to upload artwork, enter their API key, and receive AI-powered evaluations with scoring and interpretation.
- Provided detailed output including formal analysis, artistic interpretation, cultural context, constructive feedback, and granular scoring across multiple criteria.
- Enhanced my skills in multimodal AI integration, prompt design, structured data handling, and deploying AI services in real-time interactive applications.`,
    isExpanded: true,
  },
  {
    id: "netflix-recommendation-system",
    title: "Netflix Recommendation System",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/Netflix_recommendation_system",
    skills: [
      "Machine Learning",
      "Content-Based Filtering",
      "Data Analysis",
      "Python",
      "Kaggle Dataset",
      "Algorithm Development",
      "Netflix API",
      "Recommendation Engine",
    ],
    description: `A movie and TV series recommendation website that suggests content based on users' previous watched content, saving time and effort in searching for content on Netflix.
- Utilizes a content-based recommendation system algorithm
- Developed using the Netflix Movies and TV Shows dataset from Kaggle (3.4 MB of data)
- Provides personalized recommendations based on viewing history
- Saves users 10-15 minutes daily through intelligent content suggestions
- Implements efficient algorithms for content matching and user preference analysis`,
    isExpanded: true,
  },
  {
    id: "transformer-model-implementation-from-scratch",
    title: "Transformer from Scratch",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/transformer_from_scratch", // Add GitHub link here when available
    skills: [
      "PyTorch",
      "Transformers",
      "Attention Mechanisms",
      "Python",
      "Deep Learning",
      "Machine Translation",
      "Hugging Face Tokenizers",
      "Model Training",
      "Model Evaluation",
    ],
    description: `Personal project demonstrating my understanding of attention mechanisms and transformer architecture by recreating the Transformer model ("Attention Is All You Need") from scratch using PyTorch.
- Built a modular encoder-decoder architecture with multi-head attention, positional encoding, and feed-forward layers, adhering closely to the original paper.
- Designed each component (attention, layer norm, embeddings, etc.) as separate modules for clarity and flexibility.
- Implemented a full training pipeline for English-to-French translation using the OPUS Books dataset, with masking, label smoothing, and BLEU score evaluation.
- Integrated advanced training techniques such as learning rate scheduling, dropout regularization, and Adam optimizer with weight decay.
- Used HuggingFace tokenizers for text preprocessing and sequence handling, ensuring vocabulary management and consistent batching.
- Demonstrated ability to work with neural network layers, data loaders, optimizers, and attention mechanism directly in PyTorch.`,
    isExpanded: true,
  },
];
