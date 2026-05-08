import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Mail, Linkedin, Github, Globe, CheckCircle2, ChevronRight, BarChart3, Users, Zap } from 'lucide-react';
import { 
  ResponsiveContainer, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis 
} from 'recharts';
import { cn } from '../lib/utils';

// --- Data ---

const PROJECT_EXPERIENCE = [
  {
    role: "Senior IT Project Manager",
    company: "Enterprise Solutions Group",
    period: "2021 - Present",
    desc: "Directing complex digital transformation initiatives for global clients, orchestrating full-lifecycle delivery of mission-critical systems and managing cross-functional technical teams.",
    achievements: [
      "Optimized Agile delivery frameworks, resulting in a 30% increase in sprint velocity across 4 development squads.",
      "Successfully launched a distributed cloud architecture project, improving system uptime from 98.5% to 99.99%.",
      "Managed project budgets exceeding $5M with a consistent variance of less than 2%."
    ]
  },
  {
    role: "IT Project Manager",
    company: "FinTech Innovation Labs",
    period: "2018 - 2021",
    desc: "Led the software development lifecycle for secure financial platforms, focusing on regulatory compliance and high-performance scalability.",
    achievements: [
      "Pioneered the transition from monolithic architecture to microservices for a core banking application.",
      "Reduced operational risk by 40% through the implementation of automated QA and risk mitigation protocols.",
      "Coordinated with C-suite stakeholders to align technical roadmaps with business expansion goals."
    ]
  },
  {
    role: "Project Coordinator & Systems Analyst",
    company: "TechNexus Startup",
    period: "2016 - 2018",
    desc: "Managed early-stage product development and served as a bridge between technical engineering teams and client requirements.",
    achievements: [
      "Secured 95% client satisfaction ratings through transparent reporting and meticulous requirement gathering.",
      "Streamlined internal communication by centralizing project documentation in Jira/Confluence."
    ]
  }
];

const SKILLS_DATA = [
  { subject: 'Agile/Scrum', A: 98, fullMark: 100 },
  { subject: 'Risk Assessment', A: 90, fullMark: 100 },
  { subject: 'Cloud Strategy', A: 85, fullMark: 100 },
  { subject: 'Stakeholder Mgmt', A: 95, fullMark: 100 },
  { subject: 'Budget Control', A: 88, fullMark: 100 },
  { subject: 'Product Roadmap', A: 92, fullMark: 100 },
];

// --- Components ---

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <div className="flex items-center gap-3 mb-12">
    <div className="p-2 bg-brand-500/10 rounded-lg text-brand-400">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-display font-semibold text-white tracking-tight">{children}</h2>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-brand-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex justify-between items-center sm:px-12 lg:px-24">
        <div className="text-white font-display font-bold text-xl tracking-tighter">
          MG<span className="text-brand-500">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="mailto:itpmmg@gmail.com" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white hover:bg-white/10 transition-all uppercase tracking-widest">
          Available for hire
        </a>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-48 pb-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-1/4 -left-24 w-[300px] h-[300px] bg-brand-500/5 blur-[100px] -z-10 rounded-full" />
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-brand-500" />
              <span className="text-brand-400 font-medium tracking-widest text-xs uppercase">
                IT Project Manager | Strategic Leader
              </span>
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter leading-[0.85] mb-12">
              Mihran <br />
              <span className="text-gradient">Grigoryan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-12 font-light">
              Bridging the gap between ambitious business vision and flawless technical execution. Specializing in high-stakes IT infrastructure and high-velocity product delivery.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#contact" className="px-10 py-5 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold transition-all shadow-xl shadow-brand-600/30 text-lg">
                Let's Collaborate
              </a>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${i}P`} alt="avatar" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-brand-500/10 text-brand-400 flex items-center justify-center text-[10px] font-bold backdrop-blur-sm">
                  +12
                </div>
              </div>
              <span className="text-xs text-gray-500 font-medium">Trusted by global engineering teams</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Pillars */}
      <section className="px-6 sm:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, label: "Efficiency", value: "+25%", sub: "Delivery Speed" },
            { icon: Users, label: "Leadership", value: "30+", sub: "Cross-functional Teams" },
            { icon: BarChart3, label: "Results", value: "99%", sub: "Project Success Rate" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl group hover:border-brand-500/50 transition-colors"
            >
              <stat.icon className="text-brand-400 mb-4 group-hover:scale-110 transition-transform" size={28} />
              <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-400">{stat.label}</div>
              <div className="text-xs text-gray-600 mt-2">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 sm:px-12 lg:px-24 py-32 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading icon={Briefcase}>Professional Lifecycle</SectionHeading>
          <div className="space-y-12">
            {PROJECT_EXPERIENCE.map((exp, i) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 border-b border-white/5 pb-12 last:border-0"
              >
                <div>
                  <div className="text-brand-400 font-medium mb-1">{exp.period}</div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-1">{exp.role}</h3>
                  <div className="text-gray-500 flex items-center gap-2">
                    <Globe size={14} />
                    {exp.company}
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                    {exp.desc}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-brand-500 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 sm:px-12 lg:px-24 py-32">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <SectionHeading icon={BarChart3}>Core Competencies</SectionHeading>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              My management philosophy is rooted in continuous improvement and empirical process control. I leverage deep technical understanding alongside EQ-driven leadership to navigate complex project landscapes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['PMP Principles', 'JIRA Expert', 'Cloud Migration', 'Vendor Management', 'Technical Architecture', 'Conflict Resolution'].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] w-full glass-card rounded-3xl p-8">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS_DATA}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#999', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 sm:px-12 lg:px-24 py-32 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeading icon={GraduationCap}>Academic Foundation</SectionHeading>
          <div className="glass-card p-8 rounded-3xl inline-block max-w-xl">
             <h3 className="text-2xl font-display font-semibold text-white mb-2">Master of Science in Information Systems</h3>
             <p className="text-brand-400 font-medium mb-4">American University of Armenia (AUA)</p>
             <p className="text-gray-400 leading-relaxed">
               Focused on Enterprise Systems, Project Management, and Business Intelligence. Graduated with honors, specializing in the intersection of business strategy and IT infrastructure.
             </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-12 lg:px-24 py-48 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[150px] -z-10 rounded-full" />
        <motion.div
           initial={{ scale: 0.95, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 rounded-full text-brand-400 text-xs font-bold uppercase tracking-widest mb-8 border border-brand-500/20">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Empowering Growth
          </div>
          <h2 className="text-5xl sm:text-7xl font-display font-bold text-white mb-8 tracking-tighter">Ready to scale <br /><span className="text-gradient">your operations?</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Currently vetting strategic leadership roles and high-impact IT consultancies for early 2026.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:itpmmg@gmail.com" className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-2xl shadow-white/10 group">
              <Mail size={20} className="group-hover:-rotate-12 transition-transform" />
              itpmmg@gmail.com
            </a>
            <div className="flex gap-4 items-center">
              <a href="#" className="p-5 glass-card hover:text-brand-400 rounded-full transition-all hover:-translate-y-1">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-5 glass-card hover:text-white rounded-full transition-all hover:-translate-y-1">
                <Github size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-12 lg:px-24 py-12 border-t border-white/5 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mihran Grigoryan. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
