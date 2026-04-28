import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, ArrowRight, BarChart3, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function MarketResearch() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Market Research That Drives Real Business Decisions | Dekhe Trends"
        description="Stop guessing what your market wants. We give you data that helps you make decisions that actually grow your business."
        canonical="https://dekhetrends.com/services/market-research"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Stop Guessing. <span className="gradient-text">Start Knowing.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Most businesses make decisions based on gut feeling
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We give you real market data so every decision is backed by evidence, not assumptions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" /> Get Market Research
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Sample Report <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Competitor analysis (what they're doing right)",
                "Customer pain points and buying triggers",
                "Market size and opportunity mapping",
                "Trend identification before they peak",
                "Pricing research and positioning",
                "Customer surveys and interviews"
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
                { step: "01", title: "Define", desc: "Clarify what decisions you need to make" },
                { step: "02", title: "Collect", desc: "Gather data from the right sources" },
                { step: "03", title: "Analyze", desc: "Find patterns and actionable insights" },
                { step: "04", title: "Report", desc: "Clear recommendations, not just data" }
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
                "Launching products without knowing if there's demand",
                "Don't know why customers choose competitors",
                "Marketing messages that don't resonate",
                "Pricing that's too high or leaving money on the table",
                "Entering markets without understanding them",
                "Making expensive decisions based on assumptions"
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
                { title: "Confident Decisions", desc: "Know before you spend, not after" },
                { title: "Competitive Edge", desc: "Understand your market better than competitors" },
                { title: "Reduced Risk", desc: "Avoid costly mistakes with data backing" }
              ].map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-primary" />
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
                  <li>• Deliver actionable recommendations</li>
                  <li>• Use primary and secondary research</li>
                  <li>• Focus on your specific questions</li>
                  <li>• Present findings in plain language</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-6 h-6 text-red-400" />What We Don't Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Dump raw data without context</li>
                  <li>• Use outdated industry reports</li>
                  <li>• Give generic market overviews</li>
                  <li>• Ignore your specific business context</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How long does market research take?", a: "Depends on scope. A competitor analysis takes 1-2 weeks. A full market study takes 4-6 weeks. We'll give you a clear timeline upfront." },
                { q: "Is this useful for small businesses?", a: "Especially for small businesses. You can't afford to make expensive mistakes. Research costs a fraction of what a bad decision costs." },
                { q: "What format do you deliver research in?", a: "A clear report with executive summary, key findings, and specific recommendations. Not a 100-page document nobody reads." },
                { q: "Can you research a specific competitor?", a: "Yes. Competitor deep-dives are one of our most popular research types. We look at their strategy, messaging, pricing, and weaknesses." }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make Smarter Business Decisions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Get the market intelligence you need to outpace your competition</p>
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
