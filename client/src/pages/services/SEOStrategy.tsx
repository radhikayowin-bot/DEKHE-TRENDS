import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { 
  Phone, ArrowRight, Search, TrendingUp, Target, 
  CheckCircle2, AlertCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function SEOStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="SEO Services That Actually Rank | Stop Wasting Money on SEO"
        description="Tired of SEO agencies that promise rankings but deliver nothing? We focus on traffic that converts, not vanity metrics."
        canonical="https://dekhetrends.com/services/seo-strategy"
      />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              SEO That <span className="gradient-text">Actually Works</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Stop paying for rankings that don't convert
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We focus on traffic that brings customers, not just numbers in a report
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free SEO Audit
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Our Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Actually Do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Find keywords your customers actually search for",
                "Fix technical issues killing your rankings",
                "Build content that answers real questions",
                "Get quality backlinks (not spam)",
                "Track what brings revenue, not just traffic",
                "Optimize for conversions, not just clicks"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-3"
                >
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
                { step: "01", title: "Audit", desc: "Find what's broken and what's working" },
                { step: "02", title: "Strategy", desc: "Plan based on your business goals" },
                { step: "03", title: "Execute", desc: "Fix, optimize, and create content" },
                { step: "04", title: "Track", desc: "Monitor rankings and revenue impact" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center relative overflow-hidden group hover:scale-105 transition-transform"
                >
                  <div className="absolute top-0 right-0 text-8xl font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Problems We Solve */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Your website doesn't show up on Google",
                "Traffic is coming but nobody's buying",
                "Previous SEO agency wasted your money",
                "Rankings dropped after Google update",
                "Competitors outrank you for important keywords",
                "Technical issues you don't understand"
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-xl flex items-start gap-4"
                >
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
                {
                  title: "More Qualified Traffic",
                  desc: "People who actually want what you sell"
                },
                {
                  title: "Better Conversion Rate",
                  desc: "Traffic that turns into customers"
                },
                {
                  title: "Long-term Growth",
                  desc: "Rankings that last, not temporary spikes"
                }
              ].map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{result.title}</h3>
                  <p className="text-muted-foreground text-lg">{result.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Why We're Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  What We Do
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Focus on revenue, not rankings</li>
                  <li>• Transparent reporting</li>
                  <li>• No long-term contracts</li>
                  <li>• Real strategy, not templates</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  What We Don't Do
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Promise #1 rankings</li>
                  <li>• Use black-hat tactics</li>
                  <li>• Lock you into contracts</li>
                  <li>• Send useless reports</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "How long does SEO take to work?",
                  a: "Honest answer: 3-6 months to see real results. Anyone promising faster is lying. SEO is a long-term investment, not a quick fix."
                },
                {
                  q: "Why is your pricing different from other agencies?",
                  a: "We charge based on the work needed, not a fixed package. Every business is different. We audit first, then give you a real price."
                },
                {
                  q: "Do you guarantee rankings?",
                  a: "No. Anyone who guarantees #1 rankings is lying. Google's algorithm changes constantly. We focus on sustainable growth, not promises we can't keep."
                },
                {
                  q: "What if I already tried SEO and it didn't work?",
                  a: "Most agencies focus on vanity metrics. We focus on what actually matters: traffic that converts. Let us audit what went wrong."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Fix Your SEO?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free audit and see exactly what's holding you back
            </p>
            <a href="tel:8077583921">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent">
                <Phone className="w-6 h-6 mr-2" />
                Call: 8077583921
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}
