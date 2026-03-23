import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Zap, Award } from "lucide-react";

const values = [
  {
    icon: <Target size={20} />,
    title: "Structured Thinker",
    description: "I break ambiguous goals into clear sprint tasks, keeping teams aligned on what matters most.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Leader",
    description: "I've led cross-functional teams in real projects — coordinating engineers, designers, and stakeholders.",
  },
  {
    icon: <Zap size={20} />,
    title: "Agile Practitioner",
    description: "I've applied Scrum on hardware, web, and mobile projects — not just studied it in theory.",
  },
  {
    icon: <Award size={20} />,
    title: "Results-Driven",
    description: "Every project I managed shipped on time, with measurable outcomes and zero scope surprises.",
  },
];

const stats = [
  { value: "3", label: "Projects Delivered" },
  { value: "Agile", label: "Primary Framework" },
  { value: "4+", label: "Teams Led" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3 font-display">About Me</p>
            <div className="glow-line w-12 mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight">
              Turning ideas into{" "}
              <span className="text-gradient">structured delivery</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              I'm Mostafa — an IT student and aspiring Technical Project Manager who has led real teams, shipped real products, and learned what it takes to keep technical work on track.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: text content */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My path into project management came naturally from leading technical teams. I noticed that talented engineers often stall — not from lack of skill, but from unclear priorities and poor coordination. I stepped in to fix that: defining scope, structuring sprints, and keeping communication tight so the team could focus on building.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I've since led teams across hardware, web, and game development — applying Agile principles to deliver an AI-powered assistive cane, a full-stack job portal, and a bilingual word game. Along the way, I've trained as an AI & ML practitioner at NTI, contributed as a frontend developer in GDG, and served as a Public Relations Officer and community ambassador — building the communication and leadership skills that make me effective as a PM.
              </p>

              {/* Values grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    className="p-4 rounded-xl border border-border bg-card card-glow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary">{v.icon}</div>
                      <h3 className="font-display font-semibold text-sm text-foreground">{v.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: stats + philosophy */}
            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.4 }}
                    className="p-6 rounded-xl border border-border bg-card text-center card-glow"
                  >
                    <div className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-xs font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* PM Philosophy card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-xl border border-primary/20 bg-primary/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="font-display font-bold text-lg mb-3 text-foreground">My PM Philosophy</h3>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic border-l-2 border-primary/60 pl-4">
                  "A project manager's job isn't to manage tasks — it's to remove the friction that stops great people from doing great work. Clarity, communication, and trust are the real deliverables."
                </blockquote>
                <p className="text-primary text-xs font-medium mt-3">— Mostafa Abdalmajeed</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
