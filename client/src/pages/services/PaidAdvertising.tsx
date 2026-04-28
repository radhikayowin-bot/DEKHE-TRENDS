import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { 
  Phone, ArrowRight, Target, DollarSign, TrendingUp,
  CheckCircle2, AlertCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

export default function PaidAdvertising() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Paid Ads That Actually Profit | Stop Burning Money"
        description="Tired of ads that drain your budget? We run campaigns that make more than they cost."
        canonical="https://dekhetrends.com/services/paid-advertising"
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
              Ads That <span className="gradient-text">Make Money</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Stop burning cash on ads that don't convert
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We run Google Ads, Facebook Ads, and LinkedIn Ads that bring profit, not just clicks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Ad Audit
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Run</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Google Search Ads (when people are ready to buy)",
                "Facebook & Instagram Ads (for awareness and retargeting)",
                "LinkedIn Ads (for B2B and high-ticket)",
                "Landing pages that convert",
                "A/B testing everything",
                "ROI tracking that's actually accurate"
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
                { step: "01", title: "Audit", desc: "See what's wasting your money" },
                { step: "02", title: "Setup", desc: "Build campaigns that convert" },
                { step: "03", title: "Test", desc: "Find what works best" },
                { step: "04", title: "Scale", desc: "Spend more on winners" }
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
                "Spending thousands with no return",
                "Getting clicks but no sales",
                "Don't know which platform to use",
                "Previous agency wasted your budget",
                "Can't track actual ROI",
                "Ads stopped working suddenly"
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
                  title: "Positive ROI",
                  desc: "Make more than you spend"
                },
                {
                  title: "Qualified Leads",
                  desc: "People ready to buy"
                },
                {
                  title: "Clear Reporting",
                  desc: "Know exactly what's working"
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
                    <DollarSign className="w-8 h-8 text-primary" />
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
                  <li>• Focus on profit, not clicks</li>
                  <li>• Test everything</li>
                  <li>• Kill what doesn't work</li>
                  <li>• Scale what does</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  What We Don't Do
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Set and forget campaigns</li>
                  <li>• Waste budget on bad keywords</li>
                  <li>• Hide poor performance</li>
                  <li>• Charge % of ad spend</li>
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
                  q: "How much should I spend on ads?",
                  a: "Start with ₹30,000-50,000/month minimum. Less than that and you won't get enough data to optimize. We'll tell you if your budget is too small to work."
                },
                {
                  q: "How long before I see results?",
                  a: "Google Ads: 2-4 weeks. Facebook Ads: 4-6 weeks. We need time to test and optimize. Anyone promising instant results is lying."
                },
                {
                  q: "Which platform is best for my business?",
                  a: "Depends on what you sell and who buys it. We audit your business first, then recommend the right platform. No cookie-cutter solutions."
                },
                {
                  q: "Do you charge a percentage of ad spend?",
                  a: "No. We charge a flat monthly fee. This way we're incentivized to get you results, not to increase your spend."
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
              Ready to Stop Wasting Ad Money?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free audit and see where your budget is going wrong
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
