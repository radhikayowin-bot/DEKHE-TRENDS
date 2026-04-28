import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, ArrowRight, Eye, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CompetitorIntelligence() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Competitor Intelligence — Know What Your Competitors Are Doing | Dekhe Trends"
        description="See exactly what your competitors are doing — their ads, SEO, pricing, and strategy. Then do it better."
        canonical="https://dekhetrends.com/services/competitor-intelligence"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Know What <span className="gradient-text">Competitors Do</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Stop guessing. Start watching.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We track your competitors' ads, SEO, content, and pricing — so you can stay one step ahead
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" /> Get Competitor Report
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Sample <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Track</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Which keywords competitors rank for",
                "Their ad creatives and messaging",
                "Estimated ad spend and budgets",
                "Content strategy and top-performing posts",
                "Pricing changes and promotions",
                "New products and market moves"
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
                { step: "01", title: "Identify", desc: "Map your real competitors (not just obvious ones)" },
                { step: "02", title: "Monitor", desc: "Track their moves across all channels" },
                { step: "03", title: "Analyze", desc: "Find gaps and opportunities" },
                { step: "04", title: "Report", desc: "Clear actions you can take immediately" }
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
                "Competitors are growing faster and you don't know why",
                "Their ads are everywhere and yours aren't",
                "They rank for keywords you should own",
                "You're always reacting, never anticipating",
                "Don't know their pricing strategy",
                "They launched something new and caught you off guard"
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
                { title: "Strategic Advantage", desc: "Know their next move before they make it" },
                { title: "Better Positioning", desc: "Find gaps they're missing" },
                { title: "Smarter Spending", desc: "Invest where competitors are weak" }
              ].map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-primary" />
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
                  <li>• Ongoing monitoring, not one-time reports</li>
                  <li>• Actionable insights, not raw data</li>
                  <li>• Cover all channels (SEO, ads, social)</li>
                  <li>• Alert you to major competitor moves</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-6 h-6 text-red-400" />What We Don't Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Deliver outdated reports</li>
                  <li>• Focus on irrelevant competitors</li>
                  <li>• Give data without recommendations</li>
                  <li>• Copy competitor strategy blindly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "How many competitors do you track?", a: "We recommend tracking 3-5 direct competitors deeply rather than 20 superficially. Quality over quantity." },
                { q: "How often do you update the reports?", a: "Monthly reports with weekly alerts for major changes like new ad campaigns, pricing changes, or product launches." },
                { q: "Is this ethical?", a: "100% yes. We use publicly available data — ads, websites, social media, SEO tools. No hacking or illegal methods." },
                { q: "Can you track competitors in any industry?", a: "Yes. We've done competitor intelligence for e-commerce, SaaS, local services, healthcare, and more." }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Know Your Competition Inside Out?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Get a competitor intelligence report and find your edge</p>
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
