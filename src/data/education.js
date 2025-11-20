import mern from "../assets/mern.pdf";
import aws from "../assets/aws.pdf";
import hash from "../assets/hash.pdf";
import ccna from "../assets/ccana.pdf";
import bac from "../assets/bac.pdf";
export const education = [
  {
    id: 1,
    degree: "MERN Stack Certification",
    institution: "SOILCO",
    location: "India",
    period: "2024",
    description: "Comprehensive certification in MERN stack development covering MongoDB, Express.js, React, and Node.js.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack Development"],
    type: "certification",
    certificatePDF: mern,
    icon: "🎓"
  },

  {
    id: 4,
    degree: "AWS Certification",
    institution: "Amazon Web Services",
    location: "Online",
    period: "2025",
    description: "Professional certification in Amazon Web Services covering cloud infrastructure, services, and best practices for scalable and secure cloud solutions.",
    skills: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda", "Cloud Architecture", "DevOps"],
    type: "certification",
    certificatePDF: aws,
    icon: "☁️"
  },
  {
    id: 5,
    degree: "HashiCorp Certification",
    institution: "HashiCorp",
    location: "Online",
    period: "2025",
    description: "Professional certification in HashiCorp tools including Terraform for infrastructure as code, Vault for secrets management, and Consul for service networking.",
    skills: ["Terraform", "Vault", "Consul", "Infrastructure as Code", "DevOps", "Cloud Automation"],
    type: "certification",
    certificatePDF: hash,
    icon: "🔐"
  },
  {
    id: 3,
    degree: "Bachelor's Degree in Mathematics",
    institution: "Sadikia's College",
    location: "Tunis, Tunisia",
    period: "2021",
    description: "Strong foundation in mathematical principles, problem-solving, and analytical thinking.",
    skills: ["Mathematics", "Problem Solving", "Analytical Thinking", "Statistics"],
    type: "degree",
    certificatePDF: bac,
    icon: "📊"
  },
  {
    id: 6,
    degree: "CCNA Certification",
    institution: "Cisco",
    location: "Online",
    period: "2025",
    description: "Professional certification in Cisco networking technologies covering network fundamentals, IP connectivity, security, and automation.",
    skills: ["Networking", "Cisco IOS", "IP Routing", "Network Security", "LAN/WAN", "Network Automation"],
    type: "certification",
    certificatePDF: ccna,
    icon: "🌐"
    }
];

