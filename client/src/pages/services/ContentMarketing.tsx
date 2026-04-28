import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, ArrowRight, FileText, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function ContentMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Content Marketing That Ranks and Converts | Dekhe Trends"
        description="Content that brings traffic and turns readers into customers. No fluff, no filler — just content that works."
        canonical="https://dekhetrends.com/services/content-marketing"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Content That <span className="gradient-text">Converts</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Stop publishing content nobody reads
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We create content that ranks on Google and turns visitors into buyers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" /> Get Content Strategy
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Samples <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Create</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Blog posts that rank on Google",
                "Landing pages that convert visitors",
                "Case studies that build trust",
                "Email sequences that sell",
                "Social media content that engages",
                "Video scripts that explain clearly"
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* How We Work */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Research", desc: "Find what your audience searches for" },
                { step: "02", title: "Plan", desc: "Build a content calendar that makes sense" },
                { step: "03", title: "Create", desc: "Write content that ranks and converts" },
                { step: "04", title: "Optimize", desc: "Update based on performance data" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center relative overflow-hidden group hover:scale-105 transition-transform">
                  <div className="absolute top-0 right-0 text-8xl font-bold text-white/[0.02]">{item.step}</div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Problems */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Publishing content but getting no traffic",
                "Content doesn't rank on Google",
                "Visitors read but don't buy",
                "No time to create consistent content",
                "Content looks generic and AI-written",
                "No clear content strategy"
              ].map((problem, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 rounded-xl flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-lg">{problem}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What You Get</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Organic Traffic", desc: "People finding you through Google" },
                { title: "Authority", desc: "Be the expert in your industry" },
                { title: "Leads on Autopilot", desc: "Content that works 24/7" }
              ].map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{result.title}</h3>
                  <p className="text-muted-foreground text-lg">{result.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Us */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-green-400" />What We Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Research before writing</li>
                  <li>• Write for humans, optimize for Google</li>
                  <li>• Track what content drives revenue</li>
                  <li>• Update old content regularly</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-6 h-6 text-red-400" />What We Don't Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Publish generic AI content</li>
                  <li>• Write for word count</li>
                  <li>• Ignore performance data</li>
                  <li>• Copy competitors</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long before content starts ranking?", a: "New content typically takes 3-6 months to rank. But we also optimize existing content which can show results faster." },
                { q: "Do you use AI to write content?", a: "We use AI as a research tool, not a writer. All content is written and reviewed by humans. AI content is easy to spot and Google penalizes it." },
                { q: "How many pieces of content per month?", a: "Depends on your goals and budget. We recommend starting with 4-8 quality pieces per month rather than 20 mediocre ones." },
                { q: "Can you write about technical topics?", a: "Yes. We research deeply before writing. We've written for SaaS, manufacturing, healthcare, and finance businesses." }
              ].map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
                    <span className="text-lg font-semibold pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                  </button>
                  {openFaq === i && <div className="px-6 pb-6"><p className="text-muted-foreground leading-relaxed">{faq.a}</p></div>}
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 rounded-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Content That Works?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let's build a content strategy that brings real traffic and real customers</p>
            <a href="tel:8077583921">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent">
                <Phone className="w-6 h-6 mr-2" /> Call: 8077583921
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
