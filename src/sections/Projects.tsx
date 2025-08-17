import { useEffect, useState } from "react";
import { Project } from "../types";
import { fetchProjects } from "../api";
import { ProjectDeck } from "../components/ProjectDeck";
import ProjectModal from "../components/ProjectModal";

const IMPRESSIVE: Project = {
  id: 107,
  title: "DeployForge",
  subtitle: "Spring Boot • Docker • AWS CI/CD",
  tech: ["Java", "Spring Boot", "Docker", "AWS"],
  description:
    "Production-grade microservice showcasing CI/CD on AWS. Containerized Spring Boot app with GitHub Actions pipeline, multi-stage Docker builds, ECR push, and Blue‑Green deployment on ECS Fargate behind an Application Load Balancer. Centralized logging and metrics ready.",
  highlights: [
    "Multi-stage Docker build → slim image, faster cold starts",
    "GitHub Actions: test → build → push to ECR → deploy to ECS (Blue/Green)",
    "AWS ALB health checks + zero‑downtime rollouts",
    "Env‑based config, secrets via SSM Parameter Store",
    "Observability hooks: Prometheus endpoint + Grafana-ready dashboards",
  ],
  repoUrl: "https://github.com/hackedboi15/deployforge",
  liveUrl: "https://deployforge.vercel.app",
  thumb: "",
  theme: "emerald",
  featured: true,
};

const FALLBACK: Project[] = [
  {
    id: 101,
    title: "JobNavigator",
    subtitle: "Full-stack Job Search Platform",
    tech: ["Java", "Spring Boot", "MicroServices", "SQL"],
    description:
      "Advanced job search with saved searches, alerts, and admin dashboard. Role-based access with JWT auth and rate-limited public API.",
    highlights: [
      "JWT-based auth and RBAC", 
      "Query DSL filters + pagination", 
      "Admin dashboard with analytics"
    ],
    repoUrl: "https://github.com/hackedboi15/jobnavigator-microservices",
    liveUrl: "",
    thumb: "",
    theme: "cyan",
    featured: true,
  },
  {
    id: 102,
    title: "Intelligent Chart Analyzer",
    subtitle: "Chrome Extension for Trading",
    tech: ["JavaScript", "Spring Boot", "OpenAI API",],
    description:
      "One-click capture of chart images and AI-driven trend summaries, with session history and export to CSV.",
    highlights: [
      "On-page capture with canvas", 
      "OpenAI summaries + tags", 
      "Offline cache of analyses"
    ],
    repoUrl: "https://github.com/hackedboi15/IntelligentChartAnalyzer",
    liveUrl: "",
    thumb: "",
    theme: "fuchsia",
  },
  {
    id: 106,
    title: "NoteNexus",
    subtitle: "Sync Notes with AI Summaries",
    tech: ["React", "OpenAI API", "Java", "SQL"],
    description:
      "Cloud-synced notes with AI summary, tag suggestions, and cross-device history.",
    highlights: [
      "AI-generated tags", 
      "Conflict resolution", 
      "Search by meaning"
    ],
    repoUrl: "https://github.com/hackedboi15/notenexus",
    liveUrl: "",
    thumb: "",
    theme: "purple",
  },
  IMPRESSIVE,
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<Project | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const themed = data.map((p, i) => ({
            ...p,
            theme: (["cyan", "emerald", "fuchsia", "purple"] as const)[i % 4], 
          }));
          setProjects([IMPRESSIVE, ...themed]);
        } else {
          setProjects(FALLBACK);
        }
      })
      .catch(() => setProjects(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold">
        <span className="text-gradient-cyan">Personal</span>{" "}
        <span className="text-slate-200">Projects</span>
      </h2>
      <p className="mt-2 text-slate-400">Click any card to morph into a 3D preview.</p>
      {loading && <p className="mt-4 text-slate-400">Loading projects…</p>}
      {!loading && (
        <>
          <ProjectDeck projects={projects} onOpen={setActive} />
          <ProjectModal project={active} onClose={() => setActive(undefined)} />
        </>
      )}
    </section>
  );
}
