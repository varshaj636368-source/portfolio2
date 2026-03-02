/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Github, 
  BarChart3, 
  BrainCircuit, 
  Target, 
  Award, 
  Briefcase,
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Customer Experience Optimization",
    location: "Shopping Malls, Dharwad",
    problem: "Shopping malls lacked data-backed insights into customer satisfaction and store layout efficiency, leading to missed engagement opportunities.",
    approach: "Conducted primary research with 100+ customers using structured surveys to map the buyer journey and identify friction points.",
    tools: ["MS Excel", "Market Research", "Data Visualization"],
    impact: "Identified 3 critical friction points; proposed strategies projected to drive a 15% increase in footfall through layout adjustments.",
    metrics: "100+ Surveys Analyzed | 15% Projected Growth"
  },
  {
    title: "AI-Driven Rural Insights",
    location: "Krishi Mela 2024",
    problem: "Rural markets are underserved by traditional digital outreach due to a lack of segmented consumer data and purchasing pattern analysis.",
    approach: "Leveraged Prompt Engineering on OpenAI tools to synthesize survey data into actionable marketing trends for 4 distinct rural buyer personas.",
    tools: ["OpenAI", "Prompt Engineering", "Consumer Segmentation"],
    impact: "Developed a segmentation strategy that recommended digital outreach improvements projected to boost engagement by 20%.",
    metrics: "4 Buyer Personas Defined | 20% Engagement Boost"
  },
  {
    title: "HR Performance System Review",
    location: "Beluru Factory Industry",
    problem: "Operational gaps in employee tracking and reporting were hindering productivity and workflow transparency.",
    approach: "Evaluated existing workflow efficiency and identified reporting bottlenecks through operational gap analysis.",
    tools: ["Workflow Analysis", "Structured Reporting", "Efficiency Mapping"],
    impact: "Recommended structured reporting improvements aimed at a 10-15% efficiency gain across factory operations.",
    metrics: "10-15% Efficiency Gain | Operational Gap Mapping"
  }
];

const skills = [
  { category: "Digital Strategy", items: ["Social Media Strategy", "Market Research", "Consumer Insights", "Content Planning"] },
  { category: "Technical & AI", items: ["Prompt Engineering", "OpenAI Tools", "Data Analysis (Excel)", "Canva Design"] },
  { category: "Marketing Execution", items: ["Campaign Planning", "Audience Targeting", "Segmentation", "Performance Tracking"] }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-zinc-200/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono font-bold text-sm tracking-tighter">VARSHA.JADHAV</span>
          <div className="flex gap-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="mailto:varshaj636368@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-bold">Hire Me</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider mb-6">
              <Sparkles size={12} /> Available for Internships
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[0.9]">
              Turning Consumer Data into <span className="text-zinc-400 italic">Measurable Growth.</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed">
              Digital Marketing Strategist & BBA Student specializing in bridging the gap between 
              <span className="text-zinc-900 font-medium"> consumer psychology</span> and 
              <span className="text-zinc-900 font-medium"> AI-driven analytics.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium flex items-center gap-2 hover:bg-zinc-800 transition-all group"
              >
                View Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/varshajadhav" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-zinc-200 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-50 transition-all"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="grid md:grid-template-columns-[1fr_1.5fr] gap-16 mb-32">
          <div>
            <span className="section-label">01 / About</span>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Strategic Positioning</h2>
            <div className="space-y-4 text-zinc-500 leading-relaxed">
              <p>
                As a BBA student at KLE College, I focus on the intersection of traditional marketing principles and modern AI tools. My approach is rooted in primary research—I don't just guess what consumers want; I ask them.
              </p>
              <p>
                I specialize in using <span className="text-zinc-900">Prompt Engineering</span> to extract deep insights from raw data, allowing for hyper-segmented marketing strategies that resonate with specific buyer personas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 glass-card rounded-2xl">
              <BrainCircuit className="text-emerald-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">AI-First Mindset</h3>
              <p className="text-sm text-zinc-500">Leveraging LLMs for market trend extraction and content optimization.</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <BarChart3 className="text-emerald-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">Data Integrity</h3>
              <p className="text-sm text-zinc-500">Maintaining 100% accuracy in financial and consumer documentation.</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <Target className="text-emerald-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">Impact Driven</h3>
              <p className="text-sm text-zinc-500">Focusing on metrics that matter: footfall, engagement, and efficiency.</p>
            </div>
            <div className="p-6 glass-card rounded-2xl">
              <Briefcase className="text-emerald-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">Agile Learning</h3>
              <p className="text-sm text-zinc-500">Quickly adapting to new tools and industry shifts in real-time.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <span className="section-label">02 / Featured Projects</span>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-8 border border-zinc-200 rounded-3xl hover:border-zinc-400 transition-all bg-white"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 mb-2 block">{project.location}</span>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map(tool => (
                        <span key={tool} className="px-2 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold rounded uppercase tracking-wider">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block mb-1">Key Metrics</span>
                    <p className="text-sm font-bold text-emerald-900">{project.metrics}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">The Problem</h4>
                    <p className="text-zinc-600 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">The Approach</h4>
                    <p className="text-zinc-600 leading-relaxed">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">The Solution & Impact</h4>
                    <p className="text-zinc-600 leading-relaxed">{project.impact}</p>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button className="text-sm font-bold flex items-center gap-1 text-zinc-400 cursor-not-allowed">
                      <ExternalLink size={14} /> Case Study PDF
                    </button>
                    <button className="text-sm font-bold flex items-center gap-1 text-zinc-400 cursor-not-allowed">
                      <Github size={14} /> Documentation
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Skills */}
        <section className="grid md:grid-cols-2 gap-16 mb-32">
          <div id="experience">
            <span className="section-label">03 / Experience</span>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-zinc-200">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-900" />
                <span className="text-xs font-mono text-zinc-400">2024 / 1 Month</span>
                <h3 className="font-bold text-lg mt-1">Belagavi DCC Bank</h3>
                <p className="text-sm text-zinc-500 mb-4 italic">Intern</p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 text-emerald-600 shrink-0" />
                    <span>Maintained 100% data accuracy in financial documentation and banking operations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 text-emerald-600 shrink-0" />
                    <span>Identified 2 key opportunities for process automation in digital banking services.</span>
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 border-l border-zinc-200">
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-zinc-300" />
                <span className="text-xs font-mono text-zinc-400">Ongoing</span>
                <h3 className="font-bold text-lg mt-1">College Event Committee</h3>
                <p className="text-sm text-zinc-500 mb-4 italic">Leadership & Marketing</p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 text-emerald-600 shrink-0" />
                    <span>Coordinated 5+ large-scale events, managing end-to-end promotions and student participation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 text-emerald-600 shrink-0" />
                    <span>Increased student engagement by 25% through targeted event marketing activities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="skills">
            <span className="section-label">04 / Skills</span>
            <div className="space-y-8">
              {skills.map((skillGroup, i) => (
                <div key={i}>
                  <h3 className="font-bold text-sm mb-4 text-zinc-900">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-xs font-medium text-zinc-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <h3 className="font-bold text-sm mb-4 text-zinc-900">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 glass-card rounded-xl">
                    <Award className="text-emerald-600" size={18} />
                    <span className="text-xs font-medium">Digital Marketing Certification</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-card rounded-xl">
                    <Award className="text-emerald-600" size={18} />
                    <span className="text-xs font-medium">Canva Design Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="p-12 md:p-24 bg-zinc-900 rounded-[3rem] text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to drive <span className="text-emerald-400 italic">real results?</span>
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12 text-lg">
              I'm currently seeking a Digital Marketing Intern role where I can apply my data-driven strategies to your brand's growth.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:varshaj636368@gmail.com" 
                className="px-10 py-5 bg-emerald-500 text-zinc-900 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-400 transition-all"
              >
                <Mail size={20} /> varshaj636368@gmail.com
              </a>
              <a 
                href="/resume.pdf" 
                className="px-10 py-5 border border-zinc-700 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all"
              >
                <FileText size={20} /> Download Resume
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-zinc-400 font-mono">© 2024 VARSHA JADHAV. BUILT WITH PRECISION.</p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/varshajadhav" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:varshaj636368@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail size={18} /></a>
        </div>
      </footer>

      {/* SEO Bio (Hidden for accessibility/indexing) */}
      <div className="sr-only">
        Varsha Jadhav is a data-driven Digital Marketing professional and BBA student specializing in consumer research and AI-powered insights. With a strong foundation in prompt engineering and market analysis, Varsha has successfully led customer experience optimization projects for shopping malls and rural marketing initiatives at Krishi Mela 2024. Her expertise lies in bridging the gap between raw consumer data and actionable marketing strategies that drive measurable growth. Currently pursuing a BBA at KLE College, Varsha is skilled in leveraging tools like MS Excel, Canva, and OpenAI to enhance brand engagement and operational efficiency. She is actively seeking a Digital Marketing Intern role to apply her strategic mindset and technical skills to high-impact marketing challenges.
      </div>
    </div>
  );
}
