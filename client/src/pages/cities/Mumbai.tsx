import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, TrendingUp, AlertCircle, CheckCircle2, MapPin,
  Star, Target, Search, MessageSquare, BarChart3, Globe, Building2, Users, Zap
} from "lucide-react";
import { useState } from "react";

export default function Mumbai() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Mumbai | Stop Losing to Your Competition"
        description="Mumbai moves fast. Your marketing needs to move faster. We help Mumbai businesses dominate their market with SEO, ads, and social media that actually works."
        canonical="https://dekhetrends.com/digital-marketing-agency-mumbai"
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
              <span className="text-primary font-semibold">Mumbai's Fastest Growing Agency</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              Your Competitor in Andheri Just Hired a Marketing Agency. <span className="gradient-text">What Are You Doing?</span>
            </h1>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                <strong className="text-white">Let's be real: Mumbai doesn't wait for anyone.</strong> While you're "thinking about" digital marketing, three competitors are already stealing your customers.
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
                  Get Free Audit
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                <div className="text-5xl font-bold text-primary mb-3">500+</div>
                <div className="text-lg text-muted-foreground">Mumbai Clients</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                <div className="text-5xl font-bold text-green-400 mb-3">₹50Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                <div className="text-5xl font-bold text-blue-400 mb-3">4.9/5</div>
                <div className="text-lg text-muted-foreground">Client Rating</div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                <div className="text-5xl font-bold text-purple-400 mb-3">30</div>
                <div className="text-lg text-muted-foreground">Days Avg. Results</div>
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
                "In Mumbai, being invisible is the same as <span className="gradient-text">being dead.</span>"
              </p>
            </div>
          </motion.div>

          {/* How Mumbai Businesses Think */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                How Mumbai Businesses <span className="gradient-text">Actually Operate</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding Mumbai's fast-paced business culture is key to effective marketing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* South Mumbai */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">South Mumbai Premium</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">High-end customers expect premium digital presence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Instagram and LinkedIn are crucial for brand image</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Word-of-mouth spreads fast in elite circles</span>
                  </div>
                </div>
              </div>

              {/* Suburban Mumbai */}
              <div className="p-10 rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400">Suburban Volume</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Andheri, Bandra, Powai businesses need local SEO</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Google My Business is critical for foot traffic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-muted-foreground">Price-conscious customers research online first</span>
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
                Common Mistakes <span className="gradient-text">Mumbai Businesses Make</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mistake 1 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <h3 className="text-xl font-bold text-red-400">Thinking Speed = Quality</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We need results yesterday. Just do something fast."
                </p>
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">Fast execution without strategy wastes money faster than slow planning.</p>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold text-yellow-400">Copying Competitors Blindly</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "That restaurant is doing well on Instagram. Let's copy them."
                </p>
                <div className="p-4 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">What works for them might not work for your audience or budget.</p>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Ignoring Local Competition</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  "We're the best in our area. People will find us."
                </p>
                <div className="p-4 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <p className="text-sm text-white font-semibold">Reality Check:</p>
                  <p className="text-sm text-muted-foreground">In Mumbai, there are 50 businesses like yours within 2km.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <a href="tel:8077583921">
                  <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now: 8077583921
                  </Button>
                </a>
                <Link href="/audit">
                  <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold shadow-xl">
                    Get Free Audit
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-lg text-muted-foreground">Mumbai Businesses Trust Us</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">30-60</div>
                  <div className="text-lg text-muted-foreground">Days to Results</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
                  <div className="text-lg text-muted-foreground">Client Rating</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">₹50Cr+</div>
                  <div className="text-lg text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Mumbai Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
                The Mumbai Business Problem <span className="gradient-text">Nobody Talks About</span>
              </h2>

              <div className="space-y-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                  <p className="text-xl md:text-2xl font-bold text-center text-white mb-6">
                    A restaurant owner in Bandra told me something last month that stuck with me.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-xl text-muted-foreground mb-4">
                        "I have the <strong className="text-white">best biryani in Mumbai.</strong> Everyone who eats here says so."
                      </p>
                      <p className="text-xl text-muted-foreground mb-4">
                        "But the restaurant across the street—which honestly isn't even that good—is <strong className="text-red-400">always packed.</strong> I don't get it."
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-red-500/20 border border-red-500/30">
                      <h4 className="text-lg font-bold text-red-400 mb-4">I checked. Here's what I found:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">Other restaurant: 847 Google reviews. His place: 23 reviews</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">Other restaurant: Running Instagram ads. His Instagram: 4 months old posts</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">Other restaurant: #1 on Google. His restaurant: Page 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-2xl font-bold text-yellow-400 mb-4">Here's the brutal truth about Mumbai:</p>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        Having the best product doesn't matter if nobody knows you exist. In a city of <strong className="text-white">20 million people,</strong> being invisible is the same as being dead.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    This Isn't Just About Restaurants
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8 leading-relaxed">
                    I see this everywhere in Mumbai:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-blue-400 mb-2">Boutiques in Colaba</h4>
                          <p className="text-muted-foreground">Amazing designs but zero online presence while Myntra and Ajio eat their lunch</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-2">Gyms in Powai</h4>
                          <p className="text-muted-foreground">Struggling to fill slots while Cult Fit dominates because they actually know how to market</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-purple-400 mb-2">CA Firms in Churchgate</h4>
                          <p className="text-muted-foreground">Relying on referrals while younger firms with better digital presence steal their clients</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-orange-400 mb-2">Real Estate Agents in Thane</h4>
                          <p className="text-muted-foreground">Watching leads go to aggregators because they don't show up on Google</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      The common thread? They're all <strong className="text-white">good at what they do.</strong> They're just <strong className="text-red-400">terrible at letting people know about it.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why Digital Matters in Mumbai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
                Why Digital Marketing Matters More in Mumbai <span className="gradient-text">Than Anywhere Else</span>
              </h2>

              <div className="space-y-12">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                    Mumbai is different from every other Indian city. The competition is <strong className="text-white">insane.</strong> The pace is <strong className="text-white">relentless.</strong> And customers here have <strong className="text-red-400">zero patience.</strong>
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Think about it: When someone in Mumbai wants something, they Google it on their commute, make a decision by the time they reach office, and expect it delivered by evening. <strong className="text-white">If you're not showing up in that Google search, you don't exist.</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
                    <h3 className="text-2xl font-bold mb-6 text-primary">The Numbers Don't Lie</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-lg text-muted-foreground"><strong className="text-white">89%</strong> of Mumbai consumers search online before buying</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-lg text-muted-foreground"><strong className="text-white">76%</strong> won't scroll past the first page of Google</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-lg text-muted-foreground"><strong className="text-white">67%</strong> check Instagram before visiting a restaurant/store</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-lg text-muted-foreground"><strong className="text-white">54%</strong> will choose a competitor if you don't have reviews</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                    <h3 className="text-2xl font-bold mb-6 text-accent">What This Means for You</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      If you're not ranking on Google, not active on social media, and don't have a steady stream of positive reviews, you're losing <strong className="text-red-400">8 out of 10 potential customers</strong> to competitors who are doing these things.
                    </p>
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-lg font-bold text-yellow-400">The Kicker:</p>
                      <p className="text-muted-foreground mt-2">Your competitors aren't necessarily better than you. They're just more visible. That's it. That's the whole game.</p>
                    </div>
                  </div>
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
                What Actually Works <span className="gradient-text">in Mumbai</span>
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
                      <h3 className="text-3xl font-bold">Local SEO for Mumbai</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      When someone in Andheri searches for your service, YOU should show up first. Not your competitor. You.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Dominate local searches in your Mumbai area</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize for Mumbai-specific keywords</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Build powerful Google My Business presence</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <div className="text-center mb-6">
                      <Star className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-green-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A salon in Juhu was getting 2-3 walk-ins daily.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">After 3 months: Fully booked 2 weeks in advance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Same salon, same services—just better visibility</span>
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
                      An e-commerce store was spending ₹1.5L/month with 1.8X return.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Now spends ₹2L/month but gets 5.5X return</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">More profit, less stress, better targeting</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold">Google & Facebook Ads</h3>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      Mumbai is expensive. Your ad budget needs to work harder here than anywhere else. We don't waste a single rupee.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Hyperlocal targeting (Bandra, Andheri, Powai, etc.)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Mumbai-specific ad copy that converts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Daily optimization to reduce cost per lead</span>
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
                      Mumbai's Instagram game is different. People scroll fast, decide fast, buy fast. Your content needs to stop them mid-scroll.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Instagram Reels that go viral in Mumbai</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Stories and posts that drive foot traffic</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Community management and engagement</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30">
                    <div className="text-center mb-6">
                      <MessageSquare className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-purple-400">Real Result</h4>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      A boutique in Linking Road had 5K followers but barely any sales from Instagram.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Now doing ₹3-4L monthly sales from Instagram DMs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Changed content strategy to focus on conversion</span>
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
                <p className="text-muted-foreground">We analyze your current marketing and identify what's bleeding money</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-muted-foreground">We create a Mumbai-specific plan that actually works for your market</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Execution</h3>
                <p className="text-muted-foreground">We implement fast and aggressively—Mumbai pace, Mumbai results</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">Scale</h3>
                <p className="text-muted-foreground">We double down on what works and kill what doesn't</p>
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
                Your Competitor Just Got Another Customer
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                While you're reading this, someone in Mumbai is choosing your competitor because they found them first on Google.
              </p>
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                  <Phone className="w-6 h-6 mr-3" />
                  Stop This Now: 8077583921
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
                Digital Trends <span className="gradient-text">Shaping Mumbai Right Now</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-10 h-10 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">Hyperlocal Targeting is Everything</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Someone in Borivali doesn't care about your Colaba store. Mumbai is massive. Smart businesses run separate campaigns for different areas. A gym in Malad targeting only Malad, Goregaon, and Kandivali sees 3X better results.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="w-10 h-10 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">Instagram Reels &gt; Everything</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mumbai's young, mobile-first audience lives on Instagram Reels. Restaurants, fashion brands, and service businesses using Reels see 10X more reach than static posts. If you're not on Reels, you're invisible to 70% of Mumbai.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <Star className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold text-purple-400">Google Reviews = Trust Currency</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mumbai consumers are skeptical. They've been burned before. A business with 200+ positive Google reviews will get chosen over a competitor with better prices but only 20 reviews. Every. Single. Time.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="w-10 h-10 text-orange-400" />
                  <h3 className="text-2xl font-bold text-orange-400">WhatsApp Business is Underrated</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Mumbai businesses using WhatsApp Business for customer communication see 40% higher conversion rates. People here prefer WhatsApp over email or phone calls. Meet them where they are.
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
              Questions from <span className="gradient-text">Mumbai Business Owners</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much should I spend on digital marketing in Mumbai?",
                  a: "Depends on your industry and goals, but here's a rough guide: If you're doing ₹10L/month in revenue, invest at least ₹50K-1L in marketing. If you're doing ₹50L+, you should be spending ₹2-3L minimum. Mumbai is expensive, and your competitors are spending. You can't cheap out and expect to win."
                },
                {
                  q: "Can you guarantee first page rankings on Google?",
                  a: "Anyone who guarantees specific rankings is lying. What we CAN guarantee: We'll get you more visibility, more traffic, and more customers than you're getting now. That's what actually matters. Rankings are just a means to an end."
                },
                {
                  q: "How long before I see results?",
                  a: "Google Ads: 2-4 weeks. Social media: 4-8 weeks. SEO: 3-6 months. Anyone promising faster results is either using black-hat tactics or lying. Good marketing takes time, but it compounds."
                },
                {
                  q: "Do I need to be on every social media platform?",
                  a: "No. In Mumbai, Instagram and WhatsApp are king for B2C. LinkedIn for B2B. Facebook is dying for younger audiences but still works for 35+ demographics. Focus on where your customers actually are, not where you think you should be."
                },
                {
                  q: "What if my competitor is already dominating online?",
                  a: "Good. That means there's money to be made in your industry. We've helped dozens of Mumbai businesses outrank established competitors. It takes strategy, consistency, and budget—but it's absolutely doable."
                },
                {
                  q: "Can you work with businesses outside Mumbai?",
                  a: "Yes, but we specialize in Mumbai because we understand the market. The pace, the competition, the customer psychology—it's all different here. That local knowledge is our edge."
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
              Stop Losing to Your Competition
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your competitors are stealing your customers. Let's fix that.
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
