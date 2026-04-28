import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Phone, ArrowRight, Zap, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function BrandStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Brand Strategy That Makes You Memorable | Dekhe Trends"
        description="Build a brand people remember and trust. Not just a logo — a complete identity that drives business."
        canonical="https://dekhetrends.com/services/brand-strategy"
      />
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Build a Brand <span className="gradient-text">People Trust</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              A logo is not a brand. A feeling is.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We build brand strategies that make you the obvious choice in your market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" /> Start Brand Strategy
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Build</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Brand positioning (why you over competitors)",
                "Messaging that resonates with your audience",
                "Visual identity that stands out",
                "Brand voice and tone guidelines",
                "Competitive differentiation strategy",
                "Brand story that connects emotionally"
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
                { step: "01", title: "Discover", desc: "Understand your business and audience" },
                { step: "02", title: "Position", desc: "Find your unique place in the market" },
                { step: "03", title: "Build", desc: "Create identity and messaging" },
                { step: "04", title: "Apply", desc: "Roll out across all touchpoints" }
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
                "Nobody knows what makes you different",
                "Customers choose competitors on price alone",
                "Inconsistent messaging across platforms",
                "Brand looks unprofessional or outdated",
                "Can't explain your value clearly",
                "Marketing doesn't feel like 'you'"
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
                { title: "Clear Identity", desc: "Everyone knows who you are and what you stand for" },
                { title: "Premium Perception", desc: "Charge more because you're worth more" },
                { title: "Customer Loyalty", desc: "People come back and refer others" }
              ].map((result, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-primary" />
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
                  <li>• Strategy before design</li>
                  <li>• Research your competitors deeply</li>
                  <li>• Build for your specific audience</li>
                  <li>• Practical, usable guidelines</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><AlertCircle className="w-6 h-6 text-red-400" />What We Don't Do</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Just make a pretty logo</li>
                  <li>• Copy what's trending</li>
                  <li>• Ignore your business goals</li>
                  <li>• Deliver and disappear</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: "Is brand strategy only for big companies?", a: "No. Small businesses need it more. A clear brand helps you compete against bigger players without a bigger budget." },
                { q: "How long does brand strategy take?", a: "Typically 4-8 weeks for a complete brand strategy. Rushing it leads to generic results. We take time to get it right." },
                { q: "Do you also do logo and design?", a: "Yes. We handle strategy, messaging, and visual identity. Everything is connected — strategy drives design, not the other way around." },
                { q: "What if I already have a brand?", a: "We can audit and refresh it. Sometimes small changes in positioning and messaging make a huge difference." }
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build a Brand That Stands Out?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Let's create a brand identity that makes you the obvious choice</p>
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
