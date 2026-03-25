import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  ArrowRight, Phone, CheckCircle2, TrendingUp, Users, 
  Target, Zap, BarChart3, MessageSquare, Star
} from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO 
        title="DekheTrends - Digital Marketing Agency That Actually Delivers Results"
        description="Stop wasting money on agencies that promise the moon. We're a results-driven digital marketing agency in India that focuses on one thing: growing your business. Real strategies, real results."
        canonical="https://dekhetrends.com"
      />
      
      <StickyCallButton />

      <div className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-background">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm">
                ⚡ Trusted by 500+ Growing Businesses
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
                Your Business Deserves More Than <span className="gradient-text">Empty Promises</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                We're not here to sell you "brand awareness" or "engagement." We're here to get you customers, sales, and revenue. That's it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a href="tel:8077583921">
                  <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 8077583921
                  </Button>
                </a>
                <Link href="/audit">
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                    Get Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>No Long-Term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Results in 30 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Transparent Reporting</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRUST SIGNALS - REAL STATS */}
        <section className="py-16 border-y border-white/5 bg-card/30">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Active Clients", icon: Users },
                { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
                { number: "4.9/5", label: "Client Rating", icon: Star },
                { number: "3X", label: "Avg ROI", icon: Target }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-background/50 border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                What We Actually Do
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                No fluff. No jargon. Just proven strategies that bring customers to your door.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "SEO That Ranks",
                  description: "We don't just optimize for search engines. We optimize for customers who are ready to buy. Our clients see an average 300% increase in organic traffic within 6 months.",
                  result: "Avg 300% traffic increase"
                },
                {
                  icon: Target,
                  title: "Ads That Convert",
                  description: "Stop burning money on ads that don't work. We run Google Ads, Facebook Ads, and Instagram campaigns that actually generate sales—not just clicks.",
                  result: "4.5X average ROAS"
                },
                {
                  icon: MessageSquare,
                  title: "Social Media That Sells",
                  description: "Your Instagram shouldn't just look pretty. It should bring in customers. We build social media strategies that turn followers into paying clients.",
                  result: "6X increase in leads"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="text-sm font-semibold text-green-500">{service.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  View All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-card/30 border-y border-white/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">
                  Why Businesses Choose Us Over "Big Name" Agencies
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "We Actually Answer Our Phones",
                      description: "Try calling a big agency at 8 PM. Now try calling us. We're a team that cares about your success, not just your retainer."
                    },
                    {
                      title: "No BS Reporting",
                      description: "We don't hide behind vanity metrics. You'll see exactly how many leads, sales, and revenue we're generating. Every single month."
                    },
                    {
                      title: "You're Not Just a Number",
                      description: "Big agencies juggle 100+ clients. We work with a select group so we can actually focus on growing YOUR business."
                    },
                    {
                      title: "Results or We Don't Get Paid",
                      description: "We're so confident in our work that if we don't hit agreed targets in 90 days, you don't pay. Simple as that."
                    }
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                        <p className="text-muted-foreground">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02]" />
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    <Zap className="w-20 h-20 text-primary mb-6" />
                    <h3 className="text-4xl font-bold mb-4">Ready to Grow?</h3>
                    <p className="text-muted-foreground mb-8">Let's talk about your business goals</p>
                    <a href="tel:8077583921">
                      <Button size="lg" className="rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                        <Phone className="w-5 h-5 mr-2" />
                        Call: 8077583921
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE RESULTS */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Real Businesses. Real Results.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These aren't made-up case studies. These are actual clients who trusted us with their marketing budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  industry: "E-commerce Fashion",
                  challenge: "Spending ₹2L/month on ads with barely any sales",
                  result: "Now doing ₹15L/month revenue with same ad budget",
                  metric: "7.5X ROI",
                  color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
                },
                {
                  industry: "Local Restaurant Chain",
                  challenge: "Empty tables despite great food and location",
                  result: "Fully booked weekends, 300+ online orders daily",
                  metric: "400% revenue growth",
                  color: "from-green-500/10 to-emerald-500/10 border-green-500/20"
                },
                {
                  industry: "B2B SaaS Startup",
                  challenge: "Zero inbound leads, cold outreach wasn't working",
                  result: "50+ qualified leads per month, closed 12 enterprise deals",
                  metric: "₹1.2Cr ARR added",
                  color: "from-purple-500/10 to-pink-500/10 border-purple-500/20"
                }
              ].map((caseStudy, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl bg-gradient-to-br ${caseStudy.color} border`}
                >
                  <div className="text-sm font-semibold text-primary mb-4">{caseStudy.industry}</div>
                  <h4 className="font-bold text-lg mb-3 text-red-400">The Problem:</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{caseStudy.challenge}</p>
                  <h4 className="font-bold text-lg mb-3 text-green-400">The Result:</h4>
                  <p className="text-muted-foreground mb-6 text-sm">{caseStudy.result}</p>
                  <div className="text-3xl font-bold text-primary">{caseStudy.metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-card/30 border-y border-white/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't take our word for it. Here's what real business owners have to say.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "I was skeptical at first, but these guys delivered. My website traffic tripled in 3 months, and I'm getting 10-15 quality leads every week now.",
                  author: "Rajesh Kumar",
                  role: "Founder, TechSolutions India",
                  rating: 5
                },
                {
                  quote: "Finally, an agency that doesn't waste time with fancy presentations. They just get to work and show results. Our sales are up 250% since we started working with them.",
                  author: "Priya Sharma",
                  role: "Owner, Bella Fashion Boutique",
                  rating: 5
                },
                {
                  quote: "Best decision we made for our business. They're responsive, transparent, and most importantly—they actually care about our success. Highly recommend!",
                  author: "Amit Patel",
                  role: "CEO, GrowthHub Consulting",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-background/50 border border-accent/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
          
          <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
              Stop Guessing. Start Growing.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Get a free, no-BS audit of your current marketing. We'll tell you exactly what's working, what's not, and how to fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-2xl">
                  <Phone className="w-6 h-6 mr-2" />
                  Call Now: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              No credit card required. No long-term contracts. Just honest advice.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
