import { Icons } from "@/components/icons";
import Navbar from "@/components/navbar";
import { frame } from "framer-motion";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { machine } from "os";

export const DATA = {
  name: "Charan",
  initials: "M",
  url: "https://saicharanmerugu.com",
  location: "Denton, TX",
  locationLink:
    "https://www.google.com/maps/search/124%20W.%20Oak%20Street%2C%20Denton%2C%20Texas%2C%20US",
  description:
    "AI and VR engineer and researcher focused on Human-Computer Interaction and applying AI to real-world problems. I love building things and helping people.I also enjoy experimenting with deep learning integrating AI into interactive VR environments.",
  summary:
    "My journey began with building machine learning–based recommendation systems, which sparked my passion for developing intelligent, data-driven applications. Over the past 3+ years, I’ve evolved into a versatile AI and Data Engineer, designing everything from predictive models and NLP systems to scalable backend services and real-time analytics platforms.",
  avatarUrl: "/mef1.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  programmingLanguages: [
    "ts",
    "py",
    "c",
    "cs",
    "go",
    "nodejs",
    "js",
    "java",
    "cpp",
    "solidity",
  ],
  frameworks: [
    "express",
    "nextjs",
    "flask",
    "tensorflow",

    "fastapi",
    "pytorch",
    "sklearn",
    "opencv",
    "dotnet",
  ],
  databases: ["mongodb", "mysql", "postgres", "supabase"],
  dataengineering: [
    "Postgres",
    "MongoDB",
    "Redis",
    "Elasticsearch",
    "Kafka",
    "Spark",
    "Airflow",
  ],
  cloudanddevops: [
    "aws",
    "gcp",
    "azure",
    "docker",
    "kubernetes",
    "git",
    "githubactions",
  ],
  othertools: ["figma", "photoshop", "unrealengine", "heroku", "webflow"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", navbar: true },
    // { href: "/blog", icon: NotebookIcon, label: "Blog", navbar: false },
  ],
  contact: {
    email: " mailto:merugusaicharan010601@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/charan028?tab=repositories",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sai-charan-merugu-6a44ab225/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:merugusaicharan010601@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MxR Labs",
      href: "https://ci.unt.edu/mxr/index.html",
      badges: [],
      location: "UNT, Denton, TX",
      title: "AI Engineer - Research Assistant",
      logoUrl: "/mxrlogo.png",
      start: "Mar 2024",
      end: "Present",
      description: [
        "Engineered a custom RAG pipeline using FAISS and Qdrant, significantly boosting AI response contextuality by 35% through high-relevance retrieval and generation workflows.",
        " Optimized immersive VR-AI integration by reducing end-to-end latency by 40%, connecting AWS, Unreal Engine, and Pixel Streaming to support real-time NLP interactions.",
        "Developed scalable FastAPI microservices and Unreal Engine plugins with adaptive feedback loops and telemetry logging, enabling personalized, low-latency VR experiences with 30% fewer data failures.",
      ],
      technologies: [
        "FAISS",
        "Qdrant",
        "RAG",
        "FastAPI",
        "AWS",
        "Unreal Engine",
        "Pixel Streaming",
        "Real-time telemetry",
        "behavioral analysis",
        "docker",
      ],
    },
    {
      company: "Infosys",
      badges: [],
      href: "https://www.infosys.com/",
      location: "Hyderabad, India",
      title: "Data Engineer(digital specialist engineer)",
      logoUrl: "/infosys.jpg",
      start: "Aug 2022",
      end: "Aug 2023",
      description: [
        "Developed and deployed real-time ML pipelines using PySpark and Scala on Azure Databricks for logistics forecasting.",
        "Built structured data pipelines using Azure Data Factory, PostgreSQL, and MongoDB for production-grade analytics.",
        " Integrated Snowflake for batch model scoring and reporting with SQL-based transformations and optimization.",
        "Automated Python-based model training and microservices, reducing inference latency and boosting reliability.",
        "Containerized services with Docker, and deployed using Jenkins and GitHub Actions under Agile delivery cycles.",
        // "Orchestrated scalable ETL pipelines using PySpark and Apache Airflow, enabling ML-ready data processing for large-scale predictive analytics.",

        // "Engineered modular Python microservices and automated workflows across AWS Redshift, PostgreSQL, and MongoDB, improving retraining reliability and reducing latency by 30%.",

        // "Streamlined deployment and CI/CD automation with Docker and Airflow, cutting release cycles by 25% and enhancing system resilience.",
        // "Migrated few backend services .NET from Azure to AWS Python, improving performance and maintainability.",
        // "Led a team of three developers in designing and implementing a data pipeline for a large-scale e-commerce transactions, resulting in a 40% reduction in data processing time and improved data accuracy.",
        // "Collaborated with cross-functional teams to gather requirements and deliver data solutions that met business needs, resulting in a 20% increase in customer satisfaction.",
      ],
      technologies: [
        "PySpark",
        "Data Azure Factory",
        "Azure Databricks",
        "Snow Flake",
        "Apache Airflow",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "AWS Redshift",
        "Python ",
        "Docker",
        "AWS ",
        "dotnet",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      company: "Darwin Box",
      href: "https://darwinbox.com/en-us",
      badges: [],
      location: "Hyderabad, India",
      title: "Software Engineer-Intern",
      logoUrl: "/darwinbox.jpg",
      start: "Mar 2022",
      end: "Aug 2022",
      description: [
        "Designed and deployed a scalable Facility Resource Management System using the MERN stack, streamlining space allocation and enabling real-time resource tracking.",

        "Engineered a secure, modular full-stack architecture with JWT-based role authentication, achieving 99.5% uptime and reducing UI defects by 20%.",

        "Dockerized the system and implemented CI workflows, enhancing local development efficiency and enabling seamless production deployment.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        " Express.js",
        "MongoDB",
        "JWT ",
        " GitHub CI/CD",
        " Role-based Access",
        "Docker",
        "mongodb",
      ],
    },
    {
      company: "Exposys Data Labs",
      href: "https://www.exposysdata.com/",
      badges: [],
      location: "Remote",
      title: "Data Engineer Engineer",
      logoUrl: "/exposys.jpg",
      start: "Sep  2021",
      end: "Feb 2022",
      description: [
        "Built preprocessing pipelines for structured datasets using Python (Pandas, NumPy), enabling smooth data preparation for modeling.",
        "Performed exploratory data analysis (EDA) and created visualizations using Matplotlib and Seaborn to uncover trends and patterns.",
        "Trained and evaluated ML models (classification, regression) using scikit-learn, with performance measured via F1 score and AUC.",
        "Supported experimental deep learning research and collaborated in Agile sprint cycles with the engineering team.",

        // "Built a high-accuracy ML model (92.3%) for predicting employee attrition using Random Forest, Decision Tree, and KNN, enabling proactive HR decision-making.",
        // "Engineered a complete data pipeline including cleaning, feature encoding, correlation filtering, and SMOTE-based oversampling to improve model robustness.",
        // "Identified key attrition drivers and visualized insights using Seaborn and Matplotlib, supporting data-driven employee retention strategies.",
      ],
      technologies: [
        "SQL",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Label Encoding",
        " SMOTE",
        "Feature Engineering",
      ],
    },
    {
      company: "Orbit Shifters",
      href: "https://www.linkedin.com/company/orbit-shift-learning-solutions/",
      badges: [],
      location: "Hyderabad, India",
      title: "Data Analyst Engineer",
      logoUrl: "/orbitshift.jpg",
      start: "Jan 2020",
      end: "Jul 2020",
      description: [
        "Analyzed structured borrower data and built predictive models (Random Forest, AdaBoost, SVM) for loan approvals.",
        " Engineered features like DTI ratio and job tenure bins to improve interpretability and model performance.",
        "Evaluated model outcomes using AUC, F1-score, and accuracy to derive data-driven insights.",
        "Used Python, Pandas, and scikit-learn for EDA, model tuning, and visualization.",
        // "Built and optimized supervised ML models (SVM, Random Forest, Neural Nets, AdaBoost) to automate loan approval, reducing manual screening by 35%.",

        // "Engineered high-signal features (e.g., debt-to-income ratio, experience bins) and performed extensive data wrangling to boost prediction accuracy and model generalization.",

        // "Evaluated and visualized model performance using AUC, confusion matrices, and feature importance plots to support data-driven underwriting.",
      ],
      technologies: [
        "SVM",
        "SQL",
        "Random Forest",
        "Neural Networks",
        "AdaBoost",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Seaborn",
        "Matplotlib",
      ],
    },
  ],
  education: [
    {
      school: "University Of North Texas",
      href: "https://www.unt.edu/index.html",
      degree: "Master's Degree of Computer Science (MCS)",
      logoUrl: "/unt1.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Sreenidhi Institute of Science and Technology",
      href: "https://sreenidhi.edu.in/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/snist.png",
      start: "2018",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "AI Code Review Agent",
      href: "https://github.com/charan028/ai_code_review_agent",
      dates: "Feb 2024 - Mar 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a modern web application built with Next.js and Convex for AI-powered code review. This project demonstrates the integration of AI capabilities to assist in code review processes, providing automated analysis and suggestions for code improvements.",
      technologies: [
        "Next.js",
        "React ",
        "Tailwind CSS",
        "Convex",
        "OpenAI SDK",
        "Radix UI",
        "Shadcn UI",
        "React Syntax Highlighter",
        "TypeScript",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-code-review-agent-2pf9evlmf-charan028s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "ggf.mp4",
    },
    {
      title: "Virtual Human Platform",
      href: "https://github.com/mcmahanf/VIP_Unreal_Sr",
      dates: "March 2023 - May 2025",
      active: true,
      description:
        "Designed and developed AI-integrated Virtual Human Platform research at the University of North Texas, focusing on developing and deploying intelligent systems for cognitive and behavioral analysis. Engineered VR-based simulations for neuropsychological evaluation, processed multimodal data (e.g., EEG, eye-tracking, voice), and integrated Natural Language Processing (NLP) for automated scoring and insight generation. Collaborated on experimental design, statistical modeling, and human-subject studies involving real-time AI feedback and Human-Computer Interaction (HCI) optimization.",
      technologies: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "Unreal Engine",
        "FastAPI",
        "MongoDB",
        "scikit-learn",
        "OpenCV",
        "CUDA",
        "EEG/eye-tracking SDKs",
        "Fiass",
        "Qdrant",
      ],
      links: [
        {
          type: "Source",
          href: "http://nexus.mxr.unt.edu/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/s5.png",
      video: "",
    },
  ],
  research: [
    {
      title:
        "Next Generation Neurophysiological Assessments: Leveraging High Performance Servers for Streaming Virtual Environments",
      href: "https://easychair.org/smart-program/CYPSY27/2024-09-25.html#talk:267957",
      dates: "Sep 2024",
      active: true,
      description:
        "Next-Gen AI-Driven Neurophysiological Assessments Using Cloud-Streamed Virtual Environments Pioneered the integration of GPU-powered high-performance servers to stream immersive 3D virtual environments for real-time neurophysiological assessments. Leveraged Unreal Engine’s Pixel Streaming and Unity’s Render Streaming to deliver ecologically valid simulations directly via web browsers—eliminating the need for local high-end hardware and expanding clinical accessibility. Engineered a low-latency, high-fidelity system architecture capable of synchronizing biometric data (EEG, HRV, eye-tracking) with dynamic virtual tasks, ensuring scientific precision. Deployed scalable solutions on AWS, enabling secure, remote diagnostics and cognitive evaluations across diverse populations. This work underscores the transformative role of AI and cloud infrastructure in modernizing digital health and advancing brain-behavior research.",
      technologies: [
        "Pixel Streaming",
        "AWS EC2 with NVIDIA GPU instances ",
        "S3",
        "CloudFront",
        "EEG ",
        "Real time-Data Sync & Processing",
        "Nextjs",
        "React Syntax Highlighter",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "real-time data analysis",
        "Unreal Engine",
        "Zod",
      ],
      links: [
        {
          type: "Website",
          href: "https://easychair.org/smart-program/CYPSY27/2024-09-25.html#talk:267957",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Slide1.jpg",
      video: "",
    },
    {
      title:
        "Deep Neural Approaches for Early Detection of Apple Foliar Disorders",
      href: "https://www.ijraset.com/research-paper/apple-leaf-diseases-classification-using-cnn",
      dates: "Jun 2022",
      active: true,
      description:
        "Built a machine learning pipeline to automate the detection of foliar diseases in apple trees, reducing reliance on time-consuming expert inspections and biological tests. Employed OpenCV (cv2) for preprocessing, including image resizing, grayscale conversion, and normalization to standardize input data. Implemented a custom Convolutional Neural Network (CNN) that achieved 93% classification accuracy on biotic and abiotic stressors affecting apple foliage. Benchmarked model performance against pretrained architectures—InceptionV3 (92%), VGG16 (62%), and VGG19 (63%)—highlighting the effectiveness of custom deep models for domain-specific disease detection. This AI-driven solution enhances early intervention capabilities and supports scalable, precision agriculture practices.",
      technologies: [
        "Python",
        " CNN and pretrained models ",
        "OpenCV",
        "NumPy",
        "Matplotlib ",
        "Pandas ",
        "InceptionV3",
        "VGG16",
        "VGG19",
        "Image Classification",

        "Supervised Learning",
        "Cuda",
        "Pytorch",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ijraset.com/research-paper/apple-leaf-diseases-classification-using-cnn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cnn.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "GradInnoHack",
      dates: "April 4th - 5th, 2025",
      location: "UNT, Denton, TX",
      description:
        " Developed an AI-powered web app where an MCP (Multi-Component Pipeline) server coordinates custom agents for user profiling, article retrieval from Convex DB, and viewpoint contrast using Hugging Face Transformers. Users enter biographical info and a topic, and receive a curated article set plus an AI-generated summary comparing their inferred perspective with an opposing view.",
      image: "gradhack.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Avijeetas/BlindSpot",
        },
      ],
    },
    {
      title: "Tidal Hackathon",
      dates: "March 22nd - 23rd, 2025",
      location: "Texas A&M University, College Station, TX",
      description:
        "Built a Streamlit app with responsive styling for multiple pages ML Model: trained cloud model using vertex AI Deployment: Model deployed on Vertex AI and integrated via REST Data: Earth Engine API + GLDAS + Sentinel-2 for fetching NDVI, temperature, humidity Storage: Google Cloud Storage used to archive weather reports Email: Custom SMTP system that emails reports to authenticated users Auth: Lightweight Google SSO login via session control",
      image: "tidalhack.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/heat-sentinels",
        },

        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charan028/tidal-hack",
        },
      ],
    },
    {
      title: "Hacklahoma",
      dates: "Feb 15th - 16th, 2025",
      location: "Oklahoma City, Oklahoma",
      description:
        "Developed a secure, AI-powered crypto trading platform featuring a real-time Streamlit dashboard, with a Flask/FastAPI backend integrated with Web3.py for Ethereum transactions. User activities and transactions were stored in MongoDB, while machine learning models handled market trend prediction and fraud detection. Security was reinforced through private key encryption and multi-factor authentication.",

      icon: "public",
      image: "oklahama.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/dualeth-trade-hub",
        },

        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charan028/DualETH",
        },
      ],
    },
    {
      title: "Hack UTD",
      dates: "Nov 16th - 17th, 2024",
      location: "UTD, Dallas, TX",
      description:
        "Hydrate Event Predictor is a machine learning-driven solution designed to detect and predict hydrate formations in gas pipelines using time-series sensor data. By analyzing key metrics such as Volume Deviation and Valve Efficiency, the tool leverages LSTM neural networks to anticipate hydrate events before they escalate. Built with FastAPI and powered by Python, Pandas, and MongoDB, it offers real-time visualization for quick decision-making and employs techniques to handle imbalanced datasets, ensuring reliable predictions across both real and simulated pipeline data.",
      image: "hackutd.jpg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/ai-form-coach",
        },

        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/charan028/eog",
        },
      ],
    },
    {
      title: "Hack UNT",
      dates: "October 26th - 27th, 2024",
      location: "UNT, Denton, TX",
      description:
        "Developed NutriSmart, an AI-powered 7-day meal planner that simplifies healthy eating by generating personalized meal plans based on users’ health goals, dietary needs, and favorite ingredients. I integrated OpenAI’s GPT-3.5 for intelligent meal generation, built the backend using Node.js, and used MongoDB Atlas to store user preferences securely. The front end was developed with HTML, CSS, and JavaScript to provide a clean, user-friendly interface. I implemented JWT-based authentication for secure login after pivoting from OAuth integration. One of the biggest challenges I tackled was fine-tuning the AI to create balanced and goal-specific meal plans while adapting to diverse dietary preferences. NutriSmart is designed to scale and evolve into a full digital nutrition assistant, with future features like mobile support, condition-specific goals (e.g., diabetes, heart health), and wearable integration for real-time meal adaptation.",
      image: "hackunt.jpg",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/nutrismart-your-ai-powered-meal-planner",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Angel0002/HackUNT2024",
        },
      ],
    },
  ],
} as const;
