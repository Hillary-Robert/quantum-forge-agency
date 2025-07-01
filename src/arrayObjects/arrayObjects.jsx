import {
  CodeSquare,
  Cpu,
  ServerCog,
  CloudLightning,
  ShieldCheck,
  Activity,
} from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Insights", href: "#insights" },
  { label: "Prices", href: "#prices" },
  { label: "Testimonial", href: "#testimonial" },
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


export const testimonials = [
  {
    user: "Alexander Reed",
    company: "NovaCore Labs",
    image: user1,
    text: "Partnering with this agency elevated our entire infrastructure. Their deep tech expertise and proactive approach set them apart.",
  },
  {
    user: "Sophia Martinez",
    company: "Aether AI",
    image: user2,
    text: "From strategy to deployment, the team delivered flawlessly. They truly understand how to build scalable, intelligent systems.",
  },
  {
    user: "Liam Chen",
    company: "Stratus Edge",
    image: user3,
    text: "Their engineering team is brilliant. We saw a 300% performance boost after integrating their microservices architecture.",
  },
  {
    user: "Amira Khalid",
    company: "Quantify.io",
    image: user4,
    text: "They brought clarity to our product roadmap, and executed with precision. We consider them an extension of our own team.",
  },
  {
    user: "Noah Walker",
    company: "Cortex Cloud",
    image: user5,
    text: "Their DevOps solutions helped us automate deployments and save hours every sprint. We recommend them with full confidence.",
  },
  {
    user: "Isabelle Fontaine",
    company: "ZenithNet",
    image: user6,
    text: "Impressed by their ability to balance cutting-edge tech with clean, maintainable code. A true technology partner.",
  },
];



export const resourcesLinks = [
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Whitepapers" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "Knowledge Base" },
  { href: "#", text: "API Docs" },
];

export const platformLinks = [
  { href: "#", text: "Our Tech Stack" },
  { href: "#", text: "Engineering Blog" },
  { href: "#", text: "Infrastructure" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "Changelog" },
];

export const communityLinks = [
  { href: "#", text: "Developer Network" },
  { href: "#", text: "Tech Meetups" },
  { href: "#", text: "Contributors Program" },
  { href: "#", text: "Open Source Projects" },
  { href: "#", text: "Careers" },
];


export const insightsData = [
  {
    title: "Scaling Dev Tools for Growth",
    excerpt: "Learn how to optimize your engineering stack to support rapid user growth and maintain high performance.",
    date: "July 1, 2025",
    link: "#",
  },
  {
    title: "Why Reliability Matters in Production",
    excerpt: "Discover best practices for building reliable systems that minimize downtime and increase user trust.",
    date: "June 20, 2025",
    link: "#",
  },
  {
    title: "The Future of Cloud Engineering",
    excerpt: "Explore emerging trends in cloud-native development and how they impact software delivery.",
    date: "June 5, 2025",
    link: "#",
  },
  {
    title: "DevOps Automation Techniques",
    excerpt: "Step up your deployment pipeline with automation tools that save time and reduce errors.",
    date: "May 28, 2025",
    link: "#",
  },
  {
    title: "Building Secure APIs",
    excerpt: "A practical guide to designing APIs with security as a priority from day one.",
    date: "May 15, 2025",
    link: "#",
  },
  {
    title: "Monitoring and Observability",
    excerpt: "Gain insights on monitoring your applications to proactively address issues before users do.",
    date: "May 1, 2025",
    link: "#",
  },
]

