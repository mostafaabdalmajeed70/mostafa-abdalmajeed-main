import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Smart Cane for the Blind",
    subtitle: "AI-Powered Assistive Navigation Device",
    category: "IoT · AI · Hardware",
    status: "Completed",
    description:
      "The challenge: build an assistive device for visually impaired users with no prior process, a brand-new team, and vague requirements. I stepped in as Team Leader — structured the project using Agile, broke down the work into clear tracks, and kept the team coordinated through weekly sprints and daily check-ins. The result: a functioning prototype that achieved 95% obstacle detection accuracy and reduced response time by ~20%.",
    role: "Team Leader",
    highlights: [
      "Led a team of 4 across hardware, ML, and software",
      "Applied Agile sprints to manage delivery milestones",
      "Achieved 95% obstacle detection accuracy",
      "Reduced obstacle response time by ~20%",
    ],
    tech: ["Python", "Raspberry Pi", "OpenCV", "Agile", "Jira"],
    color: "primary",
    github: "#",
    demo: "#",
  },
  {
    title: "Job Portal Platform",
    subtitle: "Full-Stack Recruitment Web Application",
    category: "Web App · Full-Stack",
    status: "Completed",
    description:
      "The challenge: coordinate a development team with no shared workflow, undefined requirements, and looming deadlines. As Project Coordinator, I structured the collaboration — defined requirements, organized task ownership, and enforced a delivery workflow that kept the team on track. The platform launched on schedule, connecting employers and job seekers through a clean, functional web app.",
    role: "Project Coordinator",
    highlights: [
      "Structured requirements and delivery workflow",
      "Coordinated team collaboration across modules",
      "Ensured timely delivery through milestone tracking",
      "Reduced ambiguity by defining clear task ownership",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Trello", "Notion"],
    color: "accent",
    github: "#",
    demo: "#",
  },
  {
    title: "Bilingual Word Guessing Game",
    subtitle: "AI-Assisted Multiplayer Vocabulary Game",
    category: "Game Dev · Frontend",
    status: "Completed",
    description:
      "The challenge: build an engaging, bilingual game experience quickly — with AI-generated content and a small frontend team. As Project Lead, I led the React development, used AI prompts to generate game content efficiently, and kept the team focused on user experience. The result: a shipped product with a 30% increase in user engagement compared to the initial prototype.",
    role: "Project Lead",
    highlights: [
      "Led frontend development using React",
      "Used AI prompt engineering for content generation",
      "Increased user engagement by 30%",
      "Delivered within a tight project timeline",
    ],
    tech: ["React", "AI Prompting", "Figma", "GitHub", "Notion"],
    color: "primary",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 font-display">Portfolio</p>
          <div className="glow-line w-12 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Real projects. Real teams. Real results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card card-glow overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-medium border border-border bg-secondary text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">Role: {project.role}</span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 font-medium">{project.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md border border-border bg-secondary text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} /> Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink size={16} /> View Project
                      </a>
                    </div>
                  </div>

                  {/* Right: highlights */}
                  <div className="lg:w-72 shrink-0">
                    <div className="p-5 rounded-xl border border-border bg-secondary/50">
                      <h4 className="font-display font-semibold text-sm mb-4 text-foreground">PM Highlights</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
