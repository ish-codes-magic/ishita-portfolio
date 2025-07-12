import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "netflix-recommendation-system",
    title: "Netflix Recommendation System",
    period: {
      start: "2024", // You can update this with the actual period
    },
    link: "https://github.com/dipayanDNP/Netflix_recommendation_system",
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
