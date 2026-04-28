import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, ArrowRight, Users, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function InfluencerMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Influencer Marketing That Drives Real Sales | Dekhe Trends"
        description="Stop paying influencers for likes. We connect you with creators whose audience actually buys."
        canonical="https://dekhetrends.com/services/influencer-marketing"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Influencer Marketing <span className="gradient-text">That Sells</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Big followers don't mean big sales
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We find creators whose audience trusts them — and actually buys what they recommend
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" /> Find Right Influencers
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Handle</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Find influencers whose audience matches yours",
                "Vet engagement quality (not just follower count)",
                "Negotiate deals and contracts",
                "Brief creators for authentic content",
                "Track actual sales and conversions",
                "Manage the entire campaign end-to-end"
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
                { step: "01", title: "Match", desc: "Find creators whose audience is your customer" },
                { step: "02", title: "Vet", desc: "Check real engagement and audience quality" },
                { step: "03", title: "Brief", desc: "Give clear direction for authentic content" },
                { step: "04", title: "Track", desc: "Measure sales, not just impressions" }
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
                "Paid influencers but got zero sales",
                "Can't find the right creators for your niche",
                "Influencers with fake followers wasted your budget",
                "No way to track actual ROI from campaigns",
                "Influencer content felt forced and inauthentic",
                "Don't know how much to pay influencers"
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
                { title: "Targeted Reach", desc: "Your product in front of people who want it" },
                { title: "Social Proof", desc: "Real people recommending your brand" },
                { title: "Measurable ROI", desc: "Track every rupee spent to sales generated" }
              ].map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
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
                  <li>• Prioritize engagement over follower count</li>
                  <li>• Verify audience authenticity</li>
                  <li>• Track sales, not just reach</li>
                  <li>• Build long-term creator relationships</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-6 h-6 text-red-400" />What We Don't Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Chase mega-influencers blindly</li>
                  <li>• Ignore fake follower red flags</li>
                  <li>• Report only impressions</li>
                  <li>• Force scripted content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Mega influencer or micro influencer?", a: "Micro influencers (10k-100k followers) almost always outperform mega influencers for conversions. Their audience trusts them more. We recommend micro first." },
                { q: "How do you check for fake followers?", a: "We use engagement rate analysis, audience quality tools, and manual review. A 1M follower account with 0.5% engagement is a red flag we catch before you pay." },
                { q: "How much should I budget?", a: "Micro influencer campaigns can start from ₹50,000. We'll tell you what's realistic for your goals and category before you commit." },
                { q: "Can you track actual sales from influencers?", a: "Yes. We use unique discount codes, UTM links, and landing pages to track exactly which influencer drove which sale." }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Run Influencer Campaigns That Convert?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let's find the right creators for your brand and track real results</p>
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
