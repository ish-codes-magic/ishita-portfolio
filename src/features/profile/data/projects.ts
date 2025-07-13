import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "gpt-art-critique",
    title: "Art Critique GPT – AI-Powered Artwork Analysis Tool",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/GPT_art_critique",
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
    link: "https://github.com/ish-codes-magic/Art_Critique_GPT",
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
    title: "Transformer Model Implementation From Scratch",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/transformer_from_scratch", // Add GitHub link here when available
    skills: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
      "Convolutional Neural Networks",
      "Transfer Learning",
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
  {
    id: "data-analysis-for-telangana-government",
    title:
      "Data Analysis for Telangana Government (in collaboration with Codebasics)",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/telangana-project", // Add GitHub link here when available
    skills: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
      "Convolutional Neural Networks",
      "Transfer Learning",
      "Model Training",
      "Model Evaluation",
    ],
    description: `Worked on a real-world data analysis project for a competition organised by Telangana Government in collaboration with Codebasics to extract actionable insights from public datasets.
- Performed in-depth analysis across multiple domains including document registration (e-Stamps), transportation, industrial investments (TS-iPASS), and government schemes.
- Analysed district-level revenue growth from stamp registration, identifying key contributing districts like Rangareddy and Medchal-Malkajgiri based on proximity to Hyderabad and industrial zone development.
- Evaluated transport sales trends across Telangana districts from 2019–2023, identifying growth in electric and petrol vehicle sales and highlighting regional variations.
- Assessed sector-wise investments through TS-iPASS data, correlating them with employment, infrastructure, and proximity to special economic zones (SEZs).Identified top 5 districts for commercial property investment based on multi-factor data analysis, including revenue trends, document registration, and industrial activity.
- Proposed actionable recommendations for improving e-Stamp adoption, targeting infrastructure investments, and boosting agricultural and industrial growth.
- This project enhanced my skills in data analysis, storytelling with data, geospatial and sectoral insights generation, and converting public data into development-focused recommendations.`,
    isExpanded: true,
  },
  {
    id: "alexnet-implementation-from-scratch",
    title: "AlexNet Implementation From Scratch",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/Alexnet_from_scratch", // Add GitHub link here when available
    skills: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
      "Convolutional Neural Networks",
      "Transfer Learning",
      "Model Training",
      "Model Evaluation",
    ],
    description: `Personal deep learning project showcasing my understanding of convolutional neural networks and hands-on experience with PyTorch.
- Recreated the AlexNet architecture from scratch, including 5 convolutional layers, 3 fully connected layers, ReLU activations, dropout, and Local Response Normalization.
- Built a complete training pipeline with model checkpoints, training/validation loops, and performance logging using TensorBoard.
- Implemented key training techniques such as mixed precision training, label smoothing, cosine annealing scheduler, and gradient clipping.
- Tested the model on datasets like CIFAR-10 and custom image classification tasks to validate accuracy and generalization.
- Demonstrated ability to work with neural network layers, data loaders, optimizers, and training loops directly in PyTorch.`,
    isExpanded: true,
  },
  {
    id: "vggnet-implementation-from-scratch",
    title: "VGGNet Implementation From Scratch",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/ish-codes-magic/VGGNet_from_scratch", // Add GitHub link here when available
    skills: [
      "Python",
      "PyTorch",
      "Computer Vision",
      "Deep Learning",
      "Image Classification",
      "Convolutional Neural Networks",
      "Transfer Learning",
      "Model Training",
      "Model Evaluation",
    ],
    description: `Personal deep learning project showcasing my understanding of convolutional neural networks and hands-on experience with PyTorch.
- Implemented the VGGNet architecture (including VGG-11, VGG-13, VGG-16, and VGG-19) from scratch with support for optional batch normalization.
- Trained the models on the CIFAR-100 dataset using data augmentation, mixed precision training, and label smoothing for better generalization.
- Developed an advanced training pipeline featuring exponential moving average (EMA), cosine annealing learning rate scheduler, checkpointing, and TensorBoard logging.
- Adapted the architecture for small image sizes (32×32), with full support for resume training, real-time metric tracking, and structured logging.
- Demonstrated in-depth knowledge of training loops, model optimization and data handling using PyTorch.`,
    isExpanded: true,
  },
  {
    id: "spotify-etl-pipeline",
    title: "Spotify ETL Pipeline",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "", // Add GitHub link here when available
    skills: [
      "Data Engineering",
      "Apache Airflow",
      "Spotify API",
      "ETL Pipeline",
      "AWS",
      "Amazon S3",
      "Data Processing",
      "Workflow Automation",
      "Python",
      "API Integration",
    ],
    description: `An automated ETL pipeline that extracts top songs data from Spotify's API and processes it using Apache Airflow.
- Leverages Spotify's API to extract the top 10 songs of any artist
- Orchestrates seamless ETL (Extract, Transform, Load) pipeline using Apache Airflow
- Ensures efficient data processing and workflow automation
- Utilizes AWS services including Amazon S3 for scalable and secure storage
- Stores processed song details in CSV format for further analysis
- Implements robust error handling and monitoring for data pipeline reliability`,
    isExpanded: true,
  },
];
