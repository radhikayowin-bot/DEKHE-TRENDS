import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, Building2, Users, Target, Zap, MapPin, 
  CheckCircle2, AlertTriangle, TrendingUp, Search, MessageSquare,
  BarChart3, Globe, Star, Clock, Shield, Award, Code, Rocket, Lightbulb
} from "lucide-react";
import { useState } from "react";

export default function Bangalore() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing for Bangalore Startups & Tech Companies | Growth Focused"
        description="Bangalore's go-to digital marketing agency for startups, SaaS companies, and tech businesses. Data-driven strategies that scale with your growth."
        canonical="https://dekhetrends.com/digital-marketing-agency-bangalore"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Bangalore's Tech-Focused Agency</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              Digital Marketing for Bangalore's <span className="gradient-text">Tech Ecosystem</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                You're building something innovative. Your product is solid. Your team is talented. <strong className="text-white">But growth has plateaued.</strong> Sound familiar?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                  <Phone className="w-6 h-6 mr-3" />
                  Call: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold shadow-xl">
                  Free Growth Audit
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">150+</div>
                <div className="text-lg text-muted-foreground">Tech Companies</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                <div className="text-5xl font-bold text-green-400 mb-3">₹25Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Impact</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                <div className="text-5xl font-bold text-blue-400 mb-3">4.8/5</div>
                <div className="text-lg text-muted-foreground">Founder Rating</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                <div className="text-5xl font-bold text-purple-400 mb-3">3.2X</div>
                <div className="text-lg text-muted-foreground">Avg. Growth Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30 text-center">
              <p className="text-3xl md:text-5xl font-bold leading-tight">
                "In Bangalore, having a great product isn't enough. <span className="gradient-text">You need great marketing.</span>"
              </p>
            </div>
          </motion.div>
          {/* How Bangalore Businesses Think */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                How Bangalore Tech Companies <span className="gradient-text">Actually Operate</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding Bangalore's startup culture is key to effective marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Startups */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">Startup Mindset</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Data-driven decisions, everything needs to be measured</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Growth hacking mentality—find what works, scale fast</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Product-led growth is preferred over sales-led</span>
                  </div>
                </div>
              </div>

              {/* Enterprise */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Enterprise Tech</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Longer sales cycles, need content marketing and thought leadership</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">LinkedIn is crucial for B2B lead generation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Case studies and ROI proof are essential</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Common Mistakes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Common Mistakes <span className="gradient-text">Bangalore Startups Make</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mistake 1 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-red-400">Copying Silicon Valley</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Let's do what Slack/Zoom/Dropbox did in their early days."
                </p>
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">Indian market is different. What works in SF might not work in Bangalore.</p>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-400">Building in Stealth Mode</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We'll launch with a big bang once the product is perfect."
                </p>
                <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">Start marketing before you launch. Build audience while building product.</p>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Focusing Only on Product</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "If we build it well, customers will come automatically."
                </p>
                <div className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">Great products fail without great marketing. Both are equally important.</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* What Actually Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                What Actually Works <span className="gradient-text">for Bangalore Tech Companies</span>
              </h2>
            </div>

            <div className="space-y-12">
              {/* Growth Marketing */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Rocket className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Growth Marketing for SaaS</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      Traditional marketing doesn't work for SaaS. You need growth marketing—a systematic approach to acquiring, activating, and retaining users.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Build and optimize your entire funnel</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Set up proper analytics and attribution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Run experiments to improve conversion</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <div className="text-center mb-6">
                      <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-green-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A B2B SaaS in Whitefield: 50 trials/month, 8% conversion.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Now: 280 trials/month, 18% conversion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">MRR: ₹4L → ₹18L in 8 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Marketing */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <div className="text-center mb-6">
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-blue-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A fintech startup: 20 posts, 500 visits/month.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">After 6 months: 12K visits/month</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">15-20% of signups from organic search</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Content That Converts</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      Most tech companies publish generic blog posts that nobody reads. We create content that ranks on Google and drives signups.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Research high-intent keywords</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Create in-depth guides that rank</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize for conversion, not just traffic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Performance Marketing */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Performance Marketing</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      Paid ads can be incredibly effective or a complete waste of money. We run data-driven campaigns that focus on ROI.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Proper tracking setup and attribution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Target based on intent, not demographics</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize for CAC and LTV</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                    <div className="text-center mb-6">
                      <BarChart3 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-purple-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      An edtech company: ₹2.5L/month, CAC ₹4,200.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Now: ₹4L/month, CAC ₹1,800</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">3X volume, better efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Our <span className="gradient-text">Growth Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Audit</h3>
                <p className="text-muted-foreground">Deep dive into your current funnel and identify bottlenecks</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-muted-foreground">Create data-driven growth plan tailored to your product</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Execute</h3>
                <p className="text-muted-foreground">Implement with startup speed and enterprise precision</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Scale</h3>
                <p className="text-muted-foreground">Optimize and scale what works, kill what doesn't</p>
              </div>
            </div>
          </motion.div>
          {/* CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Growth Engine?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free strategy call. We'll audit your current marketing and show you exactly how to grow.
              </p>
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now: 8077583921
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Digital Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                What's Working in <span className="gradient-text">Bangalore's Tech Scene</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Rocket className="w-10 h-10 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Product-Led Growth is King</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Bangalore startups are moving to product-led growth. Let users try your product with minimal friction, then convert based on value delivered. Companies like Freshworks proved this works.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">Community Building Drives Growth</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The most successful Bangalore tech companies build communities. Slack groups, Discord servers, meetups, webinars. Community members become your best marketers and provide feedback.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-400">LinkedIn is Essential for B2B</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  If you're selling to businesses, LinkedIn is where your buyers are. Bangalore's B2B decision-makers are active on LinkedIn. Founder-led content and LinkedIn ads drive serious results.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="w-10 h-10 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-400">Video Content is Exploding</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Product demos, founder stories, customer testimonials, educational content—video is dominating. Tech companies using video see 5-8X better engagement than text-only content.
                </p>
              </div>
            </div>
          </motion.div>
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">
              Questions from <span className="gradient-text">Bangalore Founders</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What should our marketing budget be as an early-stage startup?",
                  a: "Rule of thumb: 10-20% of revenue for growth-stage startups. If you're pre-revenue, allocate 30-40% of your runway to marketing. Start with ₹50K-1L/month minimum to see meaningful results. Less than that and you're spreading too thin."
                },
                {
                  q: "Should we hire in-house or work with an agency?",
                  a: "Early stage (pre-Series A): Agency makes sense. You get experienced team without full-time salaries. Post-Series A: Hybrid model works best—in-house for strategy and brand, agency for execution and specialized skills. We work with both models."
                },
                {
                  q: "How do we measure marketing ROI for a SaaS product?",
                  a: "Track CAC (Customer Acquisition Cost), LTV (Lifetime Value), payback period, and LTV:CAC ratio. Aim for LTV:CAC of 3:1 or better. Also track leading indicators: trial signups, activation rate, time to value. We set up proper attribution so you know exactly what's working."
                },
                {
                  q: "What's more important: SEO or paid ads?",
                  a: "Both, but timing matters. Paid ads give immediate results while you build SEO. SEO takes 4-6 months but has better long-term ROI. Smart strategy: Start with ads for quick wins, invest in SEO for sustainable growth. We typically recommend 60% paid, 40% organic initially, then flip that ratio over time."
                },
                {
                  q: "How do we compete with well-funded competitors?",
                  a: "You can't out-spend them, but you can out-position them. Find a niche they're ignoring. Create better content. Build a stronger community. Be more responsive. Many well-funded startups have bloated teams and slow execution. Your advantage is speed and focus."
                },
                {
                  q: "Do you work with non-tech businesses in Bangalore?",
                  a: "Yes, but our sweet spot is tech companies, SaaS products, and startups. That's where our expertise and network are strongest. If you're in a different industry, we can still help, but we're most effective with tech businesses."
                }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/30 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h3 className="font-bold text-lg pr-4">{faq.q}</h3>
                    <ArrowRight className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="mt-4 pt-4 border-t border-accent/20">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Let's Build Your Growth Engine
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free strategy call. We'll audit your current marketing, identify gaps, and show you exactly how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}