import {
  CodeSquare,
  Cpu,
  ServerCog,
  CloudLightning,
  ShieldCheck,
  Activity,
} from "lucide-react";

export const navItems = [
  { label: "Services", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Clients", href: "#" },
  { label: "Contact", href: "#" },
];


export const services = [
  {
    icon: <CodeSquare />,
    text: "Custom Software Engineering",
    description:
      "From MVPs to full-scale platforms, we build high-performance apps tailored to your business needs.",
  },
  {
    icon: <Cpu />,
    text: "AI & Machine Learning",
    description:
      "Transform your data into actionable insights with our custom ML models and AI workflows.",
  },
  {
    icon: <ServerCog />,
    text: "Cloud Architecture",
    description:
      "Design scalable and secure cloud systems using AWS, Azure, and modern DevOps pipelines.",
  },
  {
    icon: <CloudLightning />,
    text: "DevOps & Automation",
    description:
      "Streamline your CI/CD pipelines with robust automation, monitoring, and deployment tools.",
  },
  {
    icon: <ShieldCheck />,
    text: "Cybersecurity Integration",
    description:
      "Protect your assets with enterprise-grade encryption, risk audits, and threat prevention.",
  },
  {
    icon: <Activity />,
    text: "Real-Time Analytics",
    description:
      "Visualize system performance and user behavior with live dashboards powered by event streaming.",
  },
];

export const solutions = [
  {
    title: "Scalable Backend Systems",
    description:
      "Microservices and serverless functions designed for scale, resilience, and speed.",
  },
  {
    title: "End-to-End Product Delivery",
    description:
      "From concept to code — we handle strategy, design, development, and launch.",
  },
  {
    title: "Secure by Design",
    description:
      "We integrate security best practices from day one, not as an afterthought.",
  },
  {
    title: "Next-Gen Stack Expertise",
    description:
      "React, Next.js, GraphQL, Docker, Kubernetes, and beyond — we work with modern stacks only.",
  },
];


export const pricingOptions = [
  {
    title: "Startup",
    price: "$0",
    features: [
      "Tech Audit & Consultation",
      "Prototype Assistance",
      "Basic Infrastructure Setup",
      "Email Support",
    ],
  },
  {
    title: "Growth",
    price: "$2,500",
    features: [
      "Custom App Development",
      "Cloud Infrastructure",
      "Ongoing Maintenance",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Full-Stack Dev Team",
      "AI & Data Solutions",
      "24/7 Support & SLA",
      "Dedicated Account Manager",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Whitepapers" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "Knowledge Base" },
  { href: "#", text: "API Docs" },
];



