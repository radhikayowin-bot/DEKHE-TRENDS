import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, MapPin, TrendingUp, AlertCircle, CheckCircle2, 
  Star, Target, Search, MessageSquare, BarChart3
} from "lucide-react";
import { useState } from "react";

export default function Ahmedabad() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Ahmedabad | Grow Your Gujarat Business Online"
        description="Ahmedabad's trusted digital marketing agency. We help Gujarat businesses dominate their market with proven SEO, Google Ads, and social media strategies that actually work."
        canonical="https://dekhetrends.com/digital-marketing-agency-ahmedabad"
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
              <span className="text-lg font-semibold">Digital Marketing in Ahmedabad</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display mb-10 leading-tight">
              Ahmedabad Businesses Are Going Digital. <span className="gradient-text">Are You Being Left Behind?</span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-white">Gujarat's business capital is changing fast.</strong>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Traditional businesses that dominated for decades are losing customers to <strong className="text-red-400">digitally-savvy competitors.</strong>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The textile trader who started selling online. The diamond merchant with a strong Instagram presence. The restaurant that shows up first on Google. <strong className="text-white">They're winning because they adapted.</strong>
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
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-lg text-muted-foreground">Ahmedabad Clients</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-4xl font-bold text-green-400 mb-2">45-90</div>
                <div className="text-lg text-muted-foreground">Days to Results</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">4.8/5</div>
                <div className="text-lg text-muted-foreground">Client Rating</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">₹15Cr+</div>
                <div className="text-lg text-muted-foreground">Revenue Generated</div>
              </div>
            </div>
          </motion.div>

          {/* The Ahmedabad Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center leading-tight">
                The Challenge Facing <span className="gradient-text">Ahmedabad Businesses</span>
              </h2>

              <div className="space-y-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                  <p className="text-xl md:text-2xl font-bold text-center text-white mb-6">
                    A textile manufacturer in Narol called me last month. His family has been in business for 40 years.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-xl text-muted-foreground mb-4">
                        "We have the <strong className="text-white">best quality fabrics</strong> and the most competitive prices in Gujarat."
                      </p>
                      <p className="text-xl text-muted-foreground mb-4">
                        "But younger companies with <strong className="text-red-400">flashy websites and social media</strong> are getting all the new orders. How is this possible?"
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-red-500/20 border border-red-500/30">
                      <h4 className="text-lg font-bold text-red-400 mb-4">The reality:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">Buyers now search "textile manufacturers Gujarat" on Google first</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">His company wasn't even on the first 3 pages of results</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                          <span className="text-muted-foreground">Competitors with inferior products were ranking higher</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    This Is Happening Across Ahmedabad
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-blue-400 mb-2">Diamond & Jewelry Businesses</h4>
                          <p className="text-muted-foreground">Traditional jewelers losing customers to online platforms and digitally-active competitors</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-green-400 mb-2">Chemical & Pharma Companies</h4>
                          <p className="text-muted-foreground">B2B buyers finding suppliers through Google instead of traditional referrals</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-purple-400 mb-2">Restaurants & Food Businesses</h4>
                          <p className="text-muted-foreground">Customers checking Zomato, Google reviews, and Instagram before visiting</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                      <div className="flex items-start gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-bold text-orange-400 mb-2">Real Estate & Construction</h4>
                          <p className="text-muted-foreground">Property buyers researching online before contacting agents or builders</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
                How We Help Ahmedabad Businesses <span className="gradient-text">Dominate Online</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We understand Gujarat's business culture and know what works for Ahmedabad companies
              </p>
            </div>

            <div className="space-y-12">
              {/* SEO Service */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Search className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      Local SEO for Ahmedabad
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      When people search for your services in Ahmedabad, you show up first
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Real Example:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      A CA firm in Satellite was getting 2-3 inquiries monthly. After 4 months of local SEO work:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">35-40 inquiries per month</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Ranking #1 for "CA in Ahmedabad"</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Hired 2 additional staff members</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">What We Do:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Optimize for Ahmedabad-specific searches</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Create Gujarati and English content</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Build local business citations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Manage Google My Business</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Get SEO Strategy: 8077583921
                    </Button>
                  </a>
                </div>
              </div>

              {/* Google Ads Service */}
              <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card to-card/50 border-2 border-accent/30 shadow-2xl">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold font-display mb-4 leading-tight">
                      Google Ads for Gujarat Market
                    </h3>
                    <p className="text-2xl md:text-3xl text-primary font-semibold">
                      Get customers immediately while SEO builds long-term presence
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30">
                    <h4 className="text-2xl font-bold text-green-400 mb-4">Real Example:</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      A diamond jewelry manufacturer was spending ₹80K monthly on ads with poor results. We restructured everything:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">6X return on ad spend</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">₹12L monthly revenue from ads</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-white font-semibold">Expanded to 3 new product lines</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30">
                    <h4 className="text-2xl font-bold text-blue-400 mb-4">Our Approach:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Target Ahmedabad and Gujarat specifically</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Create ads in Gujarati when needed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Focus on business-to-business keywords</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">Track ROI and optimize daily</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <a href="tel:8077583921">
                    <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Get Ads Strategy: 8077583921
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
              Questions from <span className="gradient-text">Ahmedabad Business Owners</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Do you understand the Gujarat business culture?",
                  a: "Absolutely. We've worked with 150+ Gujarat businesses and understand the importance of relationships, trust, and long-term partnerships. We know that Gujarati businesses prefer direct communication and measurable results over fancy presentations."
                },
                {
                  q: "Can you create content in Gujarati?",
                  a: "Yes, we have native Gujarati speakers on our team. We create content in both Gujarati and English based on your target audience. For local businesses, Gujarati content often performs better."
                },
                {
                  q: "How much should an Ahmedabad business spend on digital marketing?",
                  a: "It depends on your industry and goals. Generally, invest 5-8% of your revenue in marketing. If you're doing ₹50L annually, that's ₹2.5-4L for the year. Start with ₹25-40K monthly and scale based on results."
                },
                {
                  q: "Do you work with traditional businesses like textiles and chemicals?",
                  a: "Yes, these are our specialty. We understand B2B marketing for traditional Gujarat industries. Many of our clients are in textiles, chemicals, diamonds, and manufacturing."
                },
                {
                  q: "How long before we see results?",
                  a: "Google Ads: 2-4 weeks. Social media: 6-8 weeks. SEO: 3-6 months. Gujarat businesses appreciate honesty - we don't promise overnight miracles, but we deliver consistent, measurable growth."
                },
                {
                  q: "Can you help with both B2B and B2C marketing?",
                  a: "Yes. B2B marketing (for manufacturers, traders) focuses on LinkedIn, Google Ads, and industry-specific content. B2C marketing (for restaurants, retail) uses Instagram, Facebook, and local SEO. Different strategies for different goals."
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
              Ready to Grow Your Ahmedabad Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a digital marketing strategy that works for Gujarat's business culture.
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