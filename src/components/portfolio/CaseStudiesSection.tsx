import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    project: "Smart Cane for the Blind",
    challenge:
      "A hardware + AI project with a brand-new team, no defined process, and vague requirements. The team had the technical skills but no shared workflow — and the risk of the project stalling was high from day one.",
    approach: [
      "Ran a kick-off session to align the team on scope and success criteria",
      "Structured delivery into Agile sprints with clear weekly milestones",
      "Divided work into hardware, ML, and software tracks with defined owners",
      "Held regular check-ins to surface blockers early and keep momentum",
      "Tracked progress against milestones to ensure on-time delivery",
    ],
    results: [
      { icon: <CheckCircle size={16} />, metric: "95%", label: "Detection accuracy" },
      { icon: <TrendingUp size={16} />, metric: "~20%", label: "Faster obstacle response" },
      { icon: <Users size={16} />, metric: "4-person", label: "Cross-functional team" },
      { icon: <Clock size={16} />, metric: "On time", label: "Delivered as planned" },
    ],
    learnings:
      "Defining track ownership at the start eliminates most coordination bottlenecks. When everyone knows who owns what, blockers surface faster and get resolved faster.",
    tags: ["Team Leadership", "Agile", "Hardware+AI", "Sprint Planning"],
  },
  {
    number: "02",
    project: "Job Portal Platform",
    challenge:
      "A development team with no shared workflow, unclear responsibilities, and a fixed deadline. Without coordination structure, the risk of missed features and scope drift was real.",
    approach: [
      "Defined requirements and translated them into actionable development tasks",
      "Established a clear workflow with task ownership per team member",
      "Introduced milestone checkpoints to track progress and catch delays early",
      "Maintained consistent team communication to prevent siloed work",
      "Kept scope controlled by aligning all additions against the original goals",
    ],
    results: [
      { icon: <CheckCircle size={16} />, metric: "100%", label: "Features delivered" },
      { icon: <TrendingUp size={16} />, metric: "On track", label: "Milestone completion" },
      { icon: <Users size={16} />, metric: "Aligned", label: "Team coordination" },
      { icon: <Clock size={16} />, metric: "On time", label: "Final delivery" },
    ],
    learnings:
      "Structure is the PM's most valuable contribution. Giving the team a clear workflow — not just task lists — is what keeps a project from unraveling under pressure.",
    tags: ["Project Coordination", "Requirements", "Workflow Design", "Delivery"],
  },
  {
    number: "03",
    project: "Bilingual Word Guessing Game",
    challenge:
      "A tight timeline, a bilingual content requirement, and the need to keep the user experience engaging — while leading frontend development with a small team.",
    approach: [
      "Led frontend development in React with a focus on UX quality",
      "Used AI prompt engineering to generate bilingual game content efficiently",
      "Prioritized features ruthlessly to protect the core user experience",
      "Ran iterative testing cycles to refine gameplay before launch",
      "Kept the team focused on engagement metrics, not just feature count",
    ],
    results: [
      { icon: <TrendingUp size={16} />, metric: "30%", label: "Increase in user engagement" },
      { icon: <CheckCircle size={16} />, metric: "Shipped", label: "On schedule" },
      { icon: <Users size={16} />, metric: "Bilingual", label: "Content coverage" },
      { icon: <Clock size={16} />, metric: "Fast", label: "AI-assisted content pipeline" },
    ],
    learnings:
      "AI tools aren't a shortcut — they're a force multiplier when used intentionally. Prompt engineering for content generation freed the team to focus on what mattered: the experience.",
    tags: ["Project Lead", "Frontend", "AI Prompting", "User Engagement"],
  },
];

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding relative bg-card/20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 font-display">Deep Dives</p>
          <div className="glow-line w-12 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Case{" "}
            <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            The challenges I faced, the decisions I made, and the results that followed.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.project}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-bold text-muted-foreground/20 leading-none">{cs.number}</span>
                  <div>
                    <h3 className="font-display font-bold text-xl">{cs.project}</h3>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/20 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 grid lg:grid-cols-3 gap-8">
                {/* Challenge + Approach */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-foreground/80 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">My Approach</h4>
                    <ul className="space-y-2">
                      {cs.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
                    <h4 className="font-display font-semibold text-xs text-accent uppercase tracking-wider mb-2">Key Learning</h4>
                    <p className="text-muted-foreground text-sm italic leading-relaxed">{cs.learnings}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">Results & Metrics</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.map((result) => (
                      <div
                        key={result.label}
                        className="p-4 rounded-xl border border-border bg-secondary/50 text-center"
                      >
                        <div className="flex justify-center mb-2 text-primary">{result.icon}</div>
                        <div className="font-display font-bold text-xl text-gradient">{result.metric}</div>
                        <div className="text-muted-foreground text-xs mt-1">{result.label}</div>
                      </div>
                    ))}
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
