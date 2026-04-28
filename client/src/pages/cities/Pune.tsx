import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, MapPin, TrendingUp, AlertCircle, CheckCircle2, 
  Star, Target, Search, MessageSquare, Zap, Users
} from "lucide-react";
import { useState } from "react";

export default function Pune() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Pune | Grow Your Maharashtra Business Online"
        description="Pune's fastest-growing digital marketing agency. We help Maharashtra businesses dominate their market with innovative SEO, Google Ads, and social media strategies."
        canonical="https://dekhetrends.com/digital-marketing-agency-pune"
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
            <div className="flex items-center justify-center gap-2 text-primary mb-8">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-semibold">Digital Marketing in Pune</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-10 leading-tight">
              Pune's Young Energy Meets <span className="gradient-text">Smart Digital Marketing</span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-white">The Oxford of the East is now the startup capital of Maharashtra.</strong>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Young entrepreneurs, established IT companies, and traditional Marathi businesses are all discovering the same thing: <strong className="text-primary">digital marketing is the great equalizer.</strong>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The college student who built a food delivery app. The IT professional who started a consulting firm. The family business that went online during COVID. <strong className="text-white">They all understood one thing: visibility equals opportunity.</strong>
              </p>
            </div>

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
                <div className="text-4xl font-bold text-primary mb-2">180+</div>
                <div className="text-lg text-muted-foreground">Pune Clients</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-4xl font-bold text-green-400 mb-2">30-90</div>
                <div className="text-lg text-muted-foreground">Days to Results</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
                <div className="text-lg text-muted-foreground">Client Rating</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">₹18Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </motion.div>

          {/* The Pune Opportunity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
                Why Pune Is Perfect for <span className="gradient-text">Digital Marketing Success</span>
              </h2>

              <div className="space-y-12">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                    Pune has something special: a perfect mix of <strong className="text-white">young energy, technical talent, and business ambition.</strong>
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    But here's what makes Pune businesses different: they're <strong className="text-primary">willing to experiment, quick to adapt, and smart about investments.</strong>
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <p className="text-xl md:text-2xl font-bold text-center text-white mb-6">
                    A startup founder in Koregaon Park shared this insight:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-xl text-muted-foreground mb-4">
                        "In Pune, you can't rely on just being good at what you do. <strong className="text-white">The competition is too smart.</strong>"
                      </p>
                      <p className="text-xl text-muted-foreground mb-4">
                        "Every week, there's a new startup, a new service, a new restaurant. <strong className="text-green-400">The ones that survive are the ones that get noticed.</strong>"
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-green-500/20 border border-green-500/30">
                      <h4 className="text-lg font-bold text-green-400 mb-4">The Pune advantage:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                          <span className="text-muted-foreground">Young, tech-savvy audience that discovers businesses online</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                          <span className="text-muted-foreground">High smartphone and internet penetration</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                          <span className="text-muted-foreground">Businesses that understand ROI and data-driven decisions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    The Pune Business Ecosystem
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <Zap className="w-10 h-10 text-blue-400 mb-4" />
                      <h4 className="text-xl font-bold text-blue-400 mb-3">Tech Startups</h4>
                      <p className="text-muted-foreground">
                        From Hinjewadi to Magarpatta, Pune's startup ecosystem is booming. These companies need digital marketing to compete with Bangalore and Mumbai startups.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <Users className="w-10 h-10 text-green-400 mb-4" />
                      <h4 className="text-xl font-bold text-green-400 mb-3">Student Market</h4>
                      <p className="text-muted-foreground">
                        With lakhs of students, Pune has a massive young consumer base. Businesses targeting this demographic need strong social media presence.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                      <h4 className="text-xl font-bold text-purple-400 mb-3">Traditional Businesses</h4>
                      <p className="text-muted-foreground">
                        Family businesses in Pune are modernizing fast. They're adopting digital marketing to reach younger customers and expand beyond local markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services for Pune */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                Digital Marketing That Works in <span className="gradient-text">Pune's Dynamic Market</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Fast, data-driven strategies for Pune's fast-moving business environment
              </p>
            </div>

            <div className="space-y-12">
              {/* Startup Marketing */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      Startup Growth Marketing
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      Rapid growth strategies for Pune's ambitious startups
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Success Story:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      A fintech startup in Hinjewadi needed to acquire 10,000 users in 6 months. Our growth marketing approach delivered:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">15,000 users in 4 months</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">₹50 cost per acquisition (target was ₹100)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Secured Series A funding</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">Growth Marketing Tactics:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Viral social media campaigns</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Influencer partnerships with Pune colleges</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Performance marketing and A/B testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Content marketing for thought leadership</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Discuss Growth Strategy: 8077583921
                    </Button>
                  </a>
                </div>
              </div>

              {/* Local Business Marketing */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      Local Business Marketing
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      Connect with Pune's diverse neighborhoods and communities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Success Story:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      A chain of fitness centers wanted to compete with national brands. After implementing local digital marketing:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">400% increase in membership inquiries</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Opened 3 new locations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Became #1 local fitness brand</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">Local Marketing Approach:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Area-specific Google Ads (Koregaon Park, Baner, etc.)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Instagram marketing for young Pune audience</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Google My Business optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Community engagement and events</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Get Local Marketing Plan: 8077583921
                    </Button>
                  </a>
                </div>
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
              Questions from <span className="gradient-text">Pune Entrepreneurs</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How is Pune different from Mumbai or Bangalore for digital marketing?",
                  a: "Pune has a younger, more experimental audience. They're quick to try new apps, services, and brands. This means faster adoption but also higher competition. You need to be creative and data-driven to stand out."
                },
                {
                  q: "What's the typical budget for a Pune startup?",
                  a: "Early-stage startups typically invest ₹50K-1.5L monthly. Growth-stage companies invest ₹2-5L monthly. The key is starting lean, measuring everything, and scaling what works."
                },
                {
                  q: "Do you understand the student market in Pune?",
                  a: "Absolutely. We've helped dozens of businesses target Pune's student population. The key is Instagram and YouTube marketing, influencer partnerships, and understanding their spending patterns and preferences."
                },
                {
                  q: "Can you help with both B2B and B2C marketing?",
                  a: "Yes. Pune has a diverse business ecosystem. We help IT companies with LinkedIn and content marketing, and we help restaurants and retail with Instagram and local SEO. Different audiences, different strategies."
                },
                {
                  q: "How quickly can we see results in Pune's competitive market?",
                  a: "Social media and Google Ads: 2-4 weeks. Local SEO: 6-12 weeks. Content marketing: 3-6 months. Pune's audience is quick to respond, so you can test and iterate faster than in other cities."
                },
                {
                  q: "Do you work with traditional Marathi businesses too?",
                  a: "Yes, we help traditional businesses modernize their marketing. This often involves creating content in Marathi, targeting local keywords, and building trust with established communities while attracting younger customers."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-accent/20 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                  >
                    <h3 className="font-bold text-lg pr-4">{faq.q}</h3>
                    <ArrowRight className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
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
              Ready to Accelerate Your Pune Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's harness Pune's energy and innovation to build a digital marketing strategy that drives real growth.
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