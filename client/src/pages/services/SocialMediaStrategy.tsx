import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { 
  Phone, ArrowRight, MessageSquare, Users, Heart,
  CheckCircle2, AlertCircle, ChevronDown, ChevronUp, TrendingUp
} from "lucide-react";
import { useState } from "react";

export default function SocialMediaStrategy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Social Media Marketing That Sells | Not Just Likes"
        description="Stop posting for likes. Start posting for sales. Social media strategy that actually drives revenue."
        canonical="https://dekhetrends.com/services/social-media-strategy"
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
              Social Media That <span className="gradient-text">Sells</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Likes don't pay bills. Customers do.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We build social media strategies that turn followers into paying customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Strategy Call
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                  See Examples
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* What We Do */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center">What We Handle</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Content that stops the scroll",
                "Posting schedule that works",
                "Community management and replies",
                "Ads that actually convert",
                "Influencer partnerships",
                "Analytics that matter"
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
            <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Research", desc: "Study your audience and competitors" },
                { step: "02", title: "Strategy", desc: "Plan content that converts" },
                { step: "03", title: "Create", desc: "Make scroll-stopping content" },
                { step: "04", title: "Optimize", desc: "Double down on what works" }
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
                "Posting regularly but getting no engagement",
                "Followers don't convert to customers",
                "Don't know what content to post",
                "Wasting time on social media with no ROI",
                "Competitors getting more attention",
                "Negative comments hurting your brand"
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
                  title: "Engaged Community",
                  desc: "Followers who actually care about your brand"
                },
                {
                  title: "Consistent Sales",
                  desc: "Social media that drives revenue"
                },
                {
                  title: "Brand Authority",
                  desc: "Be the go-to in your industry"
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
                    <Users className="w-8 h-8 text-primary" />
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
                  <li>• Create content that converts</li>
                  <li>• Respond to your community</li>
                  <li>• Track actual business results</li>
                  <li>• Adapt based on performance</li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  What We Don't Do
                </h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>• Post random content</li>
                  <li>• Buy fake followers</li>
                  <li>• Ignore your comments</li>
                  <li>• Focus only on vanity metrics</li>
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
                  q: "Which platforms should I focus on?",
                  a: "Depends on where your customers are. B2B? LinkedIn. E-commerce? Instagram. Local business? Facebook. We help you choose based on your business, not trends."
                },
                {
                  q: "How often should I post?",
                  a: "Quality over quantity. 3-5 good posts per week beat 20 mediocre ones. We create a schedule that works for your audience and your capacity."
                },
                {
                  q: "Do I need to be on every platform?",
                  a: "No. Being great on 2 platforms beats being mediocre on 5. We focus your efforts where they'll actually pay off."
                },
                {
                  q: "Can you handle negative comments?",
                  a: "Yes. We monitor and respond professionally. Negative feedback handled well can actually build trust."
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
              Ready to Build a Real Following?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create social media that actually grows your business
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
