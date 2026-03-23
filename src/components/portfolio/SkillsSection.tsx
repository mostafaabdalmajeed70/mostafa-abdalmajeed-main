import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Project Management",
    color: "primary",
    skills: [
      { name: "Agile / Scrum", level: 88 },
      { name: "Sprint Planning & Backlog", level: 85 },
      { name: "Risk Awareness", level: 78 },
      { name: "Team Coordination", level: 90 },
      { name: "Stakeholder Communication", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "accent",
    skills: [
      { name: "Jira", level: 82 },
      { name: "Trello", level: 88 },
      { name: "Notion", level: 85 },
      { name: "GitHub", level: 80 },
      { name: "Figma", level: 72 },
    ],
  },
  {
    category: "Technical Understanding",
    color: "primary",
    skills: [
      { name: "Requirements Gathering", level: 85 },
      { name: "User Story Writing", level: 83 },
      { name: "Frontend Development (React)", level: 78 },
      { name: "AI/ML Concepts (NTI-trained)", level: 75 },
      { name: "Software Development Lifecycle", level: 82 },
    ],
  },
  {
    category: "AI & Modern Workflows",
    color: "accent",
    skills: [
      { name: "Prompt Engineering", level: 88 },
      { name: "AI-Assisted Content Generation", level: 85 },
      { name: "AI Workflow Integration", level: 80 },
      { name: "Documentation with AI Tools", level: 82 },
    ],
  },
];

const experience = [
  { name: "AI & ML Trainee", issuer: "NTI", year: "Training" },
  { name: "Frontend Developer", issuer: "GDG", year: "Experience" },
  { name: "IT Trainee", issuer: "Omal Masr", year: "Training" },
  { name: "Public Relations Officer", issuer: "Student Union", year: "Leadership" },
  { name: "Ambassador", issuer: "USAM Foundation", year: "Leadership" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-card/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 font-display">Expertise</p>
          <div className="glow-line w-12 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Skills &{" "}
            <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            A cross-functional toolkit built for modern tech environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 rounded-2xl border border-border bg-card card-glow"
            >
              <h3 className="font-display font-bold text-base mb-5 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    cat.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-foreground/80 font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: catIdx * 0.15 + skillIdx * 0.08 + 0.3, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          cat.color === "primary"
                            ? "bg-gradient-to-r from-primary to-primary/70"
                            : "bg-gradient-to-r from-accent to-accent/70"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-display font-bold text-lg mb-5">Experience & Leadership</h3>
          <div className="flex flex-wrap gap-4">
            {experience.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                <div>
                  <p className="font-display font-semibold text-sm">{item.name}</p>
                  <p className="text-muted-foreground text-xs">{item.issuer} · {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
