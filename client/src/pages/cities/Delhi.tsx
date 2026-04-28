import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, Building2, Users, Target, Zap, MapPin, 
  CheckCircle2, AlertTriangle, TrendingUp, Search, MessageSquare,
  BarChart3, Globe, Star, Clock, Shield, Award
} from "lucide-react";
import { useState } from "react";

export default function Delhi() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Delhi NCR | Grow Your Business Online"
        description="Delhi's most trusted digital marketing agency. We help businesses in Delhi, Noida, Gurgaon, and Faridabad dominate their market with proven SEO, ads, and social strategies."
        canonical="https://dekhetrends.com/digital-marketing-agency-delhi"
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
              <span className="text-primary font-semibold">Serving Delhi NCR Since 2019</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              Digital Marketing Agency That Understands <span className="gradient-text">Delhi's Business Culture</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Delhi businesses operate differently. The decision-making is different. The sales cycles are different. The competition is different. <strong className="text-white">We've spent years understanding what works here.</strong>
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
                  Request Free Audit
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">300+</div>
                <div className="text-lg text-muted-foreground">Delhi Clients</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                <div className="text-5xl font-bold text-green-400 mb-3">₹12Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                <div className="text-5xl font-bold text-blue-400 mb-3">4.8/5</div>
                <div className="text-lg text-muted-foreground">Client Rating</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                <div className="text-5xl font-bold text-purple-400 mb-3">60</div>
                <div className="text-lg text-muted-foreground">Days Avg. Result Time</div>
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
                "Most businesses don't fail because of competition — <span className="gradient-text">they fail because of confusion.</span>"
              </p>
            </div>
          </motion.div>

          {/* How Delhi Businesses Think */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                How Delhi Businesses <span className="gradient-text">Actually Think</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the Delhi mindset is the first step to effective marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Corporate Belt */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">The Corporate Belt</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Gurgaon and Noida decision-makers research extensively before buying</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">They check LinkedIn, read case studies, and want data-backed results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Your marketing needs to speak their professional language</span>
                  </div>
                </div>
              </div>

              {/* Traditional Markets */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Traditional Markets</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Chandni Chowk, Karol Bagh businesses have been running for generations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">They're skeptical of digital marketing but their customers are all online</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">The gap between old methods and new customers is the opportunity</span>
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
                Common Mistakes <span className="gradient-text">Delhi Businesses Make</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mistake 1 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-red-400">Relying Only on Connections</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We have good relationships, we don't need digital marketing."
                </p>
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">What happens when those connections retire or change jobs?</p>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-400">Thinking Digital = Website</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We have a website, so we're doing digital marketing."
                </p>
                <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">A website without traffic is like a shop in an empty mall.</p>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Expecting Instant Results</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We tried digital marketing for 2 months. It doesn't work."
                </p>
                <div className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">Good marketing compounds over time, like good relationships.</p>
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
                What Actually Works <span className="gradient-text">in Delhi</span>
              </h2>
            </div>

            <div className="space-y-12">
              {/* SEO Service */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Search Engine Optimization</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      When someone in Dwarka searches for your service, you should show up. When someone in Rohini looks for your product, you should be visible.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Fix your website so Google can understand what you offer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Create content targeting Delhi-specific searches</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Build your presence on Google My Business</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <div className="text-center mb-6">
                      <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-green-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A law firm in Dwarka was getting 3-4 inquiries per month.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">After 5 months: 25-30 qualified leads monthly</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Same firm, same lawyers—just better visibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Ads Service */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <div className="text-center mb-6">
                      <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-blue-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      An interior designer in Gurgaon was spending ₹80K/month on ads with minimal returns.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Now spends ₹1.2L/month but generates ₹8-10L in projects</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Better targeting + better ads = better results</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Google Ads & Facebook Ads</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      SEO takes time. Ads give you results immediately. You can start getting calls and inquiries within 48 hours.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Target specific areas (Gurgaon, Noida, South Delhi, etc.)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Write ads that speak to Delhi customers specifically</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize daily to reduce cost per lead</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Service */}
              <div className="p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <MessageSquare className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Social Media Marketing</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      Delhi's social media landscape is interesting. Instagram works great for B2C. LinkedIn is essential for B2B. Facebook still has reach for certain demographics.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Content creation (posts, reels, stories)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Community management and engagement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Social media advertising</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                    <div className="text-center mb-6">
                      <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-purple-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A restaurant in Connaught Place had 8K Instagram followers but barely any foot traffic from social media.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Within 4 months: 30-40% of daily customers from Instagram</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Changed content strategy to focus on reels and stories</span>
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
                Our <span className="gradient-text">4-Step Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Audit</h3>
                <p className="text-muted-foreground">We analyze your current marketing and identify gaps</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-muted-foreground">We create a custom plan based on your goals and budget</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Execution</h3>
                <p className="text-muted-foreground">We implement the strategy with precision and consistency</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Growth</h3>
                <p className="text-muted-foreground">We optimize and scale what works, eliminate what doesn't</p>
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
                Still Unsure What's Not Working?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's have an honest conversation about your business and what will actually work for you.
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
                Digital Trends <span className="gradient-text">Shaping Delhi Right Now</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-10 h-10 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Voice Search Growing Fast</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  More Delhi residents are using voice search on their phones. "Ok Google, best CA near me" or "Alexa, find interior designers in Gurgaon." If your business isn't optimized for voice search, you're missing out.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Building2 className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">LinkedIn Crucial for B2B</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  If you're selling to businesses in Gurgaon or Noida, LinkedIn is non-negotiable. Decision-makers check LinkedIn profiles before meetings. Companies with active LinkedIn presence get 3-5X more B2B inquiries.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-400">Video Content Dominates</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  YouTube Shorts, Instagram Reels, Facebook Videos—video content gets 10X more engagement than text or images. Delhi businesses using video marketing are seeing significantly better results.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-10 h-10 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-400">Google My Business is Make or Break</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  For local businesses in Delhi, your Google My Business listing is often the first thing customers see. Businesses with complete, optimized GMB profiles get 70% more location visits.
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
              Questions from <span className="gradient-text">Delhi Business Owners</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much should a Delhi business invest in digital marketing?",
                  a: "It varies by industry and goals, but a general rule: invest 7-10% of your revenue in marketing. If you're doing ₹50L annually, that's ₹3.5-5L for the year. Start with ₹30-50K monthly and scale based on results. Delhi is competitive—underspending means losing to competitors who are investing properly."
                },
                {
                  q: "Do you work with businesses in Noida and Gurgaon too?",
                  a: "Absolutely. We consider the entire NCR as our primary market. Whether you're in Delhi, Noida, Gurgaon, Faridabad, or Ghaziabad, we understand the local dynamics and can help you grow."
                },
                {
                  q: "What's the difference between SEO and Google Ads?",
                  a: "SEO is long-term and organic. You don't pay for clicks, but it takes 3-6 months to see results. Google Ads is immediate—you can start getting calls within days, but you pay for every click. Smart businesses do both: ads for immediate results while SEO builds long-term presence."
                },
                {
                  q: "Can you help with both B2B and B2C marketing?",
                  a: "Yes. B2B and B2C require different strategies. B2B in Delhi often means LinkedIn, email marketing, and content marketing. B2C means Instagram, Facebook, and Google Ads. We handle both, but the approach is completely different."
                },
                {
                  q: "How do I know if digital marketing is working?",
                  a: "We track everything: website traffic, leads generated, cost per lead, conversion rates, and ROI. You'll get monthly reports showing exactly what's working and what's not. If something isn't performing, we adjust immediately."
                },
                {
                  q: "What if I've tried digital marketing before and it didn't work?",
                  a: "That's common. Usually, it's because of poor targeting, weak messaging, or inconsistent execution. We've helped many Delhi businesses who had bad experiences with other agencies. The key is having a clear strategy and sticking with it long enough to see results."
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
              Ready to Grow Your Delhi Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a digital marketing strategy that actually works for your business.
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
