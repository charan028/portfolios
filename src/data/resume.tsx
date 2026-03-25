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
    "My journey began with building machine learning–based recommendation,and optimizing database systems, which sparked my passion for developing intelligent, data-driven applications. Over the past 3+ years, I’ve evolved into a versatile AI and Data Engineer, designing everything from predictive models and NLP systems to scalable backend services and real-time analytics platforms.",
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
    email: "merugusaicharan010601@gmail.com",
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
    },
  },

  work: [
    {
      company: "Handshake AI",
      href: "",
      badges: [],
      location: "California, US (Remote)",
      title: "Applied AI Research Engineer",
      logoUrl: "",
      start: "Feb 2026",
      end: "Present",
      description: [
        "Designed and refined domain-specific prompts Large Language Models (LLMs) to improve response quality, reasoning consistency, and task alignment across research workflows.",
        "Evaluated LLM-generated outputs for accuracy, relevance, factual consistency, and adherence to domain-specific standards.",
        "Performed iterative prompt optimization through structured testing, response comparison, and failure analysis to improve model behavior.",
        "Contributed to milestone-based research deliverables in a remote, asynchronous environment, maintaining quality and turnaround expectations.",
        "Documented prompt patterns, evaluation observations, and output quality trends to support reproducible research outcomes.",
      ],
      technologies: [
        "LLMs",
        "Prompt Engineering",
        "Evaluation",
        "Prompt Optimization",
      ],
    },
    {
      company: "Future State University",
      href: "",
      badges: [],
      location: "California, US (Remote)",
      title: "Associate AI Engineer",
      logoUrl: "",
      start: "Nov 2025",
      end: "Feb 2026",
      description: [
        "Built custom RAG systems integrating transformer models with structured business datasets.",
        "Developed AI agents with contextual memory for workflow automation across departments.",
        "Deployed production-grade AI models with monitoring, validation, and performance tracking.",
        "Integrated AI solutions into internal systems to optimize operational processes.",
        "Designed experimentation pipelines ensuring reproducibility and business-aligned evaluation metrics.",
      ],
      technologies: [
        "RAG",
        "Transformer Models",
        "AI Agents",
        "Model Deployment",
      ],
    },
    {
      company: "Arizona State University",
      href: "",
      badges: [],
      location: "Tempe, Arizona, US (Remote)",
      title: "AI Researcher",
      logoUrl: "",
      start: "March 2024",
      end: "Sept 2025",
      description: [
        "Built Unreal Engine-integrated AI systems with low-latency TTS and STT pipelines, RAG-based retrieval, domain-specific model fine-tuning, and FAISS-powered fast indexing to support real-time multimodal AI workflows.",
        "Developed RAG-based models for context-aware retrieval and response generation over structured and unstructured datasets.",
        "Performed model fine-tuning for domain-specific performance improvement, optimizing accuracy, latency, and inference quality.",
        "Implemented fast vector indexing with FAISS to accelerate semantic search and retrieval in large-scale knowledge systems.",
        "Worked on multimodal and quantized model optimization to improve inference efficiency and support production-scale deployment.",
        "Engineered low-latency model serving infrastructure with optimized batching and hardware-aware scheduling.",
      ],
      technologies: [
        "Unreal Engine",
        "RAG",
        "FAISS",
        "Model Fine-Tuning",
        "Multimodal AI",
        "Model Serving",
        "TTS/STT",
      ],
    },
    {
      company: "Infosys LTD",
      href: "https://www.infosys.com/",
      badges: [],
      location: "Hyderabad, India",
      title: "Machine Learning Engineer",
      logoUrl: "/infosys.jpg",
      start: "August 2022",
      end: "August 2023",
      description: [
        "Developed machine learning microservices using Python, TensorFlow, and PyTorch to support enterprise automation workflows.",
        "Built ML models for structured and semi-structured business data to automate classification, tagging, and workflow routing.",
        "Deployed containerized ML services across cloud environments using Docker on Amazon Web Services and Microsoft Azure.",
        "Implemented monitoring pipelines for model drift detection, performance validation, and reliability tracking in production systems.",
        "Worked with engineering and business teams to integrate AI-driven automation solutions into enterprise applications.",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Docker",
        "AWS",
        "Azure",
        "ML Ops",
      ],
    },
    {
      company: "Darwin Box",
      href: "https://darwinbox.com/en-us",
      badges: [],
      location: "Hyderabad, India",
      title: "Data Scientist",
      logoUrl: "/darwinbox.jpg",
      start: "March 2022",
      end: "Aug 2022",
      description: [
        "Built machine learning models (regression and classification) for predictive analytics and business optimization use cases.",
        "Performed data cleaning, feature engineering, and preprocessing for structured and semi-structured datasets.",
        "Evaluated model performance using cross-validation, ROC-AUC, precision-recall, and statistical testing methods.",
        "Automated reporting and analytics workflows to improve operational efficiency.",
      ],
      technologies: [
        "Python",
        "Machine Learning",
        "Data Preprocessing",
        "Predictive Analytics",
        "Model Evaluation",
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
      title: "Pladoc: The AI Plant Doctor",
      href: "https://github.com/charan028/plantdoc",
      dates: "2024 - Present",
      active: true,
      description:
        "A professional grade, multimodal AI application designed for real-time plant diagnosis and botanical consultation. It combines low-latency voice/video interaction with a persistent expert chat interface, leveraging Gemini 2.0 Flash Multimodal Live API.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Neo4j",
        "Gemini 2.0 Flash",
        "WebSockets",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charan028/plantdoc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://raw.githubusercontent.com/charan028/plantdoc/main/assets/chatui.png",
      video: "",
    },
    {
      title: "Project H.Y.D.R.O.",
      href: "https://github.com/charan028/project_h",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "Automatically parses EPA SWMM .rpt files and generates executive engineering summaries, flooding data tables, and capacity alerts. Utilizes a streaming Python parser with a LangGraph AI orchestration layer to summarize 100MB reports in seconds without OOM failures.",
      technologies: [
        "Python",
        "Chainlit",
        "LangGraph",
        "LangChain",
        "OpenAI API",
        "pandas",
        "Plotly",
        "Supabase",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charan028/project_h",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project_hydro_cover.svg",
      video: "",
    },
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
