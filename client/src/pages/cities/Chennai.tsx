import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, MapPin, TrendingUp, AlertCircle, CheckCircle2, 
  Star, Target, Search, MessageSquare, Building2, Users
} from "lucide-react";
import { useState } from "react";

export default function Chennai() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Chennai | Grow Your Tamil Nadu Business Online"
        description="Chennai's leading digital marketing agency. We help Tamil Nadu businesses dominate their market with proven SEO, Google Ads, and social media strategies tailored for South Indian market."
        canonical="https://dekhetrends.com/digital-marketing-agency-chennai"
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
              <span className="text-lg font-semibold">Digital Marketing in Chennai</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-10 leading-tight">
              Chennai's Digital Revolution Is Here. <span className="gradient-text">Don't Get Left Behind.</span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-white">From IT capital to digital marketing hub.</strong>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Chennai businesses are discovering that <strong className="text-primary">technical excellence</strong> needs to be paired with <strong className="text-primary">digital visibility</strong> to truly succeed.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The manufacturing company that started selling online. The software firm with a strong LinkedIn presence. The restaurant chain that dominates food delivery apps. <strong className="text-white">They understood the shift early.</strong>
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
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-lg text-muted-foreground">Chennai Clients</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-4xl font-bold text-green-400 mb-2">60-120</div>
                <div className="text-lg text-muted-foreground">Days to Results</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">4.7/5</div>
                <div className="text-lg text-muted-foreground">Client Rating</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">₹25Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </motion.div>

          {/* The Chennai Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
                Why Chennai Businesses Have a <span className="gradient-text">Digital Advantage</span>
              </h2>

              <div className="space-y-12">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                    Chennai has always been ahead of the curve. From being India's <strong className="text-white">IT capital</strong> to becoming the <strong className="text-white">Detroit of India,</strong> this city adapts fast.
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    But here's what many Chennai businesses don't realize: <strong className="text-primary">Having technical talent in your city doesn't automatically make your business digitally visible.</strong>
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <p className="text-xl md:text-2xl font-bold text-center text-white mb-6">
                    A software company CEO in OMR told me something interesting:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-xl text-muted-foreground mb-4">
                        "We build <strong className="text-white">world-class software</strong> for Fortune 500 companies. Our technical team is brilliant."
                      </p>
                      <p className="text-xl text-muted-foreground mb-4">
                        "But when potential clients search for 'software development companies in Chennai,' we're nowhere to be found. <strong className="text-red-400">How does that make sense?</strong>"
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-blue-500/20 border border-blue-500/30">
                      <h4 className="text-lg font-bold text-blue-400 mb-4">The irony:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-muted-foreground">They could build complex software but couldn't rank on Google</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-muted-foreground">Smaller companies with basic websites were getting more inquiries</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                          <span className="text-muted-foreground">Their LinkedIn company page had 50 followers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    The Chennai Business Landscape
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
                      <Building2 className="w-12 h-12 text-primary mb-6" />
                      <h4 className="text-2xl font-bold mb-4 text-primary">IT & Manufacturing Hub</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Chennai has the technical expertise but many companies focus only on product development. They forget that even B2B buyers now research online before making decisions.
                      </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                      <Users className="w-12 h-12 text-accent mb-6" />
                      <h4 className="text-2xl font-bold mb-4 text-accent">Cultural Advantage</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Chennai businesses value long-term relationships and quality. This translates perfectly to digital marketing - consistent, quality content builds trust and authority online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services for Chennai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                Digital Marketing Solutions for <span className="gradient-text">Chennai Businesses</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Strategies that work for both B2B tech companies and traditional Tamil Nadu businesses
              </p>
            </div>

            <div className="space-y-12">
              {/* B2B Digital Marketing */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      B2B Digital Marketing
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      For IT companies, manufacturers, and professional services
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Success Story:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      An automotive parts manufacturer in Ambattur was struggling to find new clients. After 6 months of B2B digital marketing:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">50+ qualified B2B inquiries monthly</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Expanded to 3 new international markets</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">₹8Cr additional annual revenue</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">Our B2B Approach:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">LinkedIn marketing for decision-makers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Industry-specific content marketing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Google Ads for B2B keywords</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Email nurture sequences</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Discuss B2B Strategy: 8077583921
                    </Button>
                  </a>
                </div>
              </div>

              {/* Local SEO */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Search className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      Local SEO for Chennai
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      Dominate local searches across Chennai and Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Success Story:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      A chain of diagnostic centers was losing patients to online aggregators. After implementing local SEO:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">300% increase in direct bookings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Ranking #1 for "diagnostic center near me"</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Reduced dependency on aggregators by 70%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">Chennai-Specific SEO:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize for Tamil and English searches</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Target area-specific keywords (T.Nagar, Anna Nagar, etc.)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Google My Business optimization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Local directory listings</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Get Local SEO Strategy: 8077583921
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
              Questions from <span className="gradient-text">Chennai Business Owners</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Do you understand the Chennai IT and manufacturing ecosystem?",
                  a: "Yes, we've worked with 200+ Chennai businesses across IT, automotive, healthcare, and manufacturing. We understand both B2B and B2C marketing needs specific to Chennai's diverse economy."
                },
                {
                  q: "Can you create content in Tamil?",
                  a: "Absolutely. We have native Tamil speakers who create content for local businesses. For B2C businesses targeting local customers, Tamil content often performs better than English-only content."
                },
                {
                  q: "How is Chennai different from other metros for digital marketing?",
                  a: "Chennai has a unique mix of traditional businesses and tech companies. B2B marketing here requires more technical depth, while B2C marketing needs to respect local culture and language preferences."
                },
                {
                  q: "What's the typical investment for a Chennai business?",
                  a: "IT companies typically invest ₹1-3L monthly. Manufacturing businesses start with ₹50K-1L monthly. Local service businesses can start with ₹25-50K monthly. It depends on your industry and goals."
                },
                {
                  q: "Do you work with both startups and established companies?",
                  a: "Yes. We help OMR startups build their digital presence from scratch, and we help established companies in Ambattur and other industrial areas modernize their marketing approach."
                },
                {
                  q: "How do you handle B2B marketing for technical products?",
                  a: "We create technical content that showcases expertise, use LinkedIn for decision-maker targeting, and focus on industry-specific keywords. Many Chennai B2B companies need to explain complex products simply."
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
              Ready to Lead Chennai's Digital Revolution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's combine Chennai's technical excellence with digital marketing expertise to grow your business.
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