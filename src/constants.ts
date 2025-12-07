import { Experience, Project, SkillCategory, Education, Link } from './types';
import { Github, Linkedin, Mail, Globe, Phone, FileText } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Md Ibrahim Khalil",
  role: "Software Engineer (Data & ML)",
  summary: "Software Engineer with 4+ years of experience architecting scalable ETL pipelines and MLOps infrastructure. Expert in building distributed data systems using Apache Airflow, Kafka, and Spark within Azure and Kubernetes environments. Proven track record of automating complex data workflows and deploying production-grade ML models.",
  location: "Dhaka, Bangladesh",
  resume: "ibrahim_cv_ac.pdf", // Ensure this file exists in your public directory
  profileImage: "profile.jpeg", // Placeholder profile image
  contact: {
    email: "bsse1009@iit.du.ac.bd",
    phone: "+880 179 843 9302",
    linkedin: "https://linkedin.com/in/ibrahim-khalil",
    github: "https://github.com/m-ibrahim-khalil",
    website: "https://m-ibrahim-khalil.github.io"
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Data Engineering",
    skills: ["Apache Airflow", "Kafka", "Mage", "PySpark", "InfluxDB", "PostgreSQL", "Playwright"]
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS", "Azure ML Studio", "MLflow", "Kubernetes", "Docker", "CI/CD (GitHub Actions)"]
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "Bash", "Go", "TypeScript", "C++", "Java"]
  },
  {
    category: "Web & Backend",
    skills: ["FastAPI", "Django", "Node.js", "React"]
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Open3D", "NLP", "LLM"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cefalo Bangladesh Ltd.",
    role: "Software Engineer (Data & ML Engineer)",
    period: "Jan 2023 – Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Mentored junior engineers in web development (HTTP, REST, clean code) and conducted workshops on Data Engineering."
    ],
    images: [
      "cefalo-1.jpeg",
      "cefalo-2.jpeg",
      "cefalo-3.jpeg",
      "cefalo-4.jpeg",
    ],
    projects: [
      {
        name: "Kontali (Aquaculture Analytics)",
        details: [
          "Architected scalable ETL/ELT pipelines using Python, Airflow, and Kafka, handling high-velocity data streams.",
          "Optimized data ingestion workflows, significantly improving latency and reliability of the data lake.",
          "Implemented CI/CD pipelines to automate testing and deployment of data DAGs."
        ]
      },
      {
        name: "Sensa (DataOps)",
        details: [
          "Designed data architecture for a multi-tenant DataOps service using InfluxDB and PostgreSQL.",
          "Built end-to-end MLOps pipeline using Azure ML Studio and MLflow for anomaly detection.",
          "Engineered algorithms to detect 'frozen sensors' and data anomalies in real-time."
        ]
      },
      {
        name: "Wirescan (Energy)",
        details: [
          "Engineered an automated data ingestion system extracting unstructured data from PDF, CSV, and Excel, reducing manual load by 90%.",
          "Developed visualization dashboards for cable health indicators."
        ]
      }
    ]
  },
  {
    company: "Brain Station 23",
    role: "Associate Software Engineer",
    period: "Jan 2022 – Jan 2023",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed a pipeline using Google Document AI to extract structured tabular data from medical diagnostic reports.",
      "Designed microservices using Python and PostgreSQL to serve NLP-derived insights to frontend applications.",
      "Collaborated with the R&D team to optimize ML model inference times for production use cases."
    ],
    images: [
      "bs23-1.png",
      "bs23-2.png",
      "bs23-3.png",
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "IIT, University of Dhaka",
    degree: "B.Sc. in Software Engineering",
    period: "Jan 2018 – Dec 2022",
    gpa: "3.63/4.0",
    details: [
      "Relevant coursework: Distributed Systems, Design Patterns, Artificial Intelligence, Machine Learning, Pattern Recognition."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "LiDAR PointCloud Classification",
    description: "Developed a processing pipeline to classify and segment 3D LiDAR point cloud data using PyTorch and Open3D. Implemented deep learning techniques to identify objects within interior spatial data.",
    tags: ["Python", "PyTorch", "Open3D", "Pyside6"],
    category: "ML",
    links: [{ type: 'github', url: 'https://github.com/m-ibrahim-khalil', label: 'Code' }]
  },
  {
    title: "Distributed Ride Sharing System",
    description: "Designed a microservices architecture ensuring eventual consistency and high availability. Focused on real-time data consistency and system scalability.",
    tags: ["Docker", "Nginx", "MongoDB", "Python", "Flask"],
    category: "System Design",
    links: [{ type: 'github', url: 'https://github.com/m-ibrahim-khalil', label: 'Code' }]
  },
  {
    title: "Deep Learning QA System",
    description: "Built a context-aware Question Answering system using a BiDAF model trained on SQuAD v2.0, demonstrating proficiency in handling unstructured text data.",
    tags: ["NLP", "Deep Learning", "Python", "Keras"],
    category: "ML",
    links: [{ type: 'github', url: 'https://github.com/m-ibrahim-khalil', label: 'Code' }]
  },
  {
    title: "TechGlimpse",
    description: "Developed a full-stack platform for publishing technology articles.",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
    category: "Web",
    links: [{ type: 'github', url: 'https://github.com/m-ibrahim-khalil', label: 'Code' }]
  }
];

export const ACHIEVEMENTS = [
  "1st Runners-up, App Development Competition, KUET BitFest (2019)",
  "2nd Runners-up, Hackathon, ITVerse 2.0 (2019)",
  "Best Defender Award, Intra-department Futsal Tournament, University of Dhaka (2019)"
];

export const SOCIAL_LINKS = [
  { icon: Mail, url: `mailto:${PERSONAL_INFO.contact.email}`, label: "Email" },
  { icon: Linkedin, url: PERSONAL_INFO.contact.linkedin, label: "LinkedIn" },
  { icon: Github, url: PERSONAL_INFO.contact.github, label: "GitHub" },
  { icon: Globe, url: PERSONAL_INFO.contact.website, label: "Website" },
];