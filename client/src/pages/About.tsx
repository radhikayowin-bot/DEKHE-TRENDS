import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, Heart, Users, Target, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About DekheTrends - The Story Behind India's Most Honest Digital Marketing Agency"
        description="We started DekheTrends because we were tired of seeing businesses get ripped off by agencies that overpromise and underdeliver. Here's our story."
        canonical="https://dekhetrends.com/about"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm">
              Our Story
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              We Started This Because We Were <span className="gradient-text">Pissed Off</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Pissed off at agencies that charge lakhs and deliver nothing. Pissed off at "marketing experts" who've never actually run a business. Pissed off at the whole industry, honestly.
            </p>
          </motion.div>

          {/* The Real Story */}
          <div className="prose prose-lg prose-invert max-w-none mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-muted-foreground leading-relaxed"
            >
              <p className="text-xl">
                <strong className="text-white">Here's the truth:</strong> DekheTrends wasn't born in some fancy boardroom with a "vision statement" and a PowerPoint deck.
              </p>

              <p>
                It started in 2019 when I (Rahul, founder) was running a small e-commerce business selling handmade leather goods. Business was okay, but I knew we could do better. So I hired a "top-rated" digital marketing agency.
              </p>

              <p>
                They charged me ₹50,000 a month. Promised me the moon. "We'll 10X your revenue in 3 months," they said. "We're experts in e-commerce," they said.
              </p>

              <p className="text-xl font-semibold text-white">
                Six months later, I had spent ₹3 lakhs and gotten exactly 12 sales from their campaigns.
              </p>

              <p>
                When I asked for explanations, I got jargon. "Your CTR is improving." "Brand awareness takes time." "The algorithm needs to learn." Basically, a bunch of excuses wrapped in marketing speak.
              </p>

              <p>
                That's when I realized: <strong className="text-white">most agencies don't actually care if you succeed.</strong> They care about keeping you on retainer long enough to hit their quarterly targets.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 my-12">
                <p className="text-xl font-bold text-white mb-4">So I fired them and learned to do it myself.</p>
                <p>
                  I spent 6 months learning Google Ads, Facebook Ads, SEO, email marketing—everything. I made mistakes. Lots of them. Burned through another ₹2 lakhs in ad spend figuring out what actually works.
                </p>
                <p className="mt-4">
                  But eventually, I cracked it. Within a year, my business was doing ₹15 lakhs a month in revenue. All from digital marketing that I was running myself.
                </p>
              </div>

              <p>
                Word got around. Other business owners started asking me for help. "Can you run my ads?" "Can you fix my website?" "Can you teach me SEO?"
              </p>

              <p>
                I started helping a few friends. Then friends of friends. Then strangers who found me through referrals. Before I knew it, I was running marketing for 20+ businesses and my leather goods business was taking a backseat.
              </p>

              <p className="text-xl font-semibold text-white">
                That's when DekheTrends was born. Not as a "marketing agency," but as a promise:
              </p>

              <div className="p-8 rounded-2xl bg-card border border-accent/20 my-12">
                <p className="text-2xl font-bold text-primary mb-6">
                  "We'll treat your business like it's our own. We'll be honest about what works and what doesn't. And if we can't help you, we'll tell you upfront."
                </p>
              </div>
            </motion.div>
          </div>

          {/* What We Believe */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
              What We Actually Believe
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Honesty Over Everything",
                  description: "If your product sucks, no amount of marketing will save you. We'll tell you the truth, even if it means losing a client. Your success matters more than our retainer."
                },
                {
                  icon: Target,
                  title: "Results Are All That Matter",
                  description: "We don't care about 'brand awareness' or 'engagement rates.' We care about one thing: Are you making more money than you're spending? If not, we're failing."
                },
                {
                  icon: Users,
                  title: "Small Teams, Big Impact",
                  description: "We're not a 100-person agency. We're a tight-knit team of 12 people who actually give a damn. You'll never be 'just another client' to us."
                },
                {
                  icon: Lightbulb,
                  title: "No BS, No Jargon",
                  description: "We explain things in plain English. If you don't understand something, that's on us, not you. Marketing isn't rocket science—it's just been made complicated by people trying to sound smart."
                }
              ].map((belief, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <belief.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{belief.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Team Reality */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              Meet the Team (The Real Version)
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              No corporate headshots. No fake bios. Just real people who are really good at what they do.
            </p>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="p-8 rounded-2xl bg-card border border-accent/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">Rahul Sharma - Founder</h3>
                <p className="text-muted-foreground">
                  Started as an e-commerce seller who got burned by bad agencies. Now helps other businesses avoid the same mistakes. Still drinks too much coffee and replies to client messages at 11 PM because he can't help himself.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">Priya Mehta - Head of SEO</h3>
                <p className="text-muted-foreground">
                  Former journalist who got tired of writing fluff pieces. Now writes content that actually ranks and converts. Has an unhealthy obsession with Google algorithm updates and can spot keyword stuffing from a mile away.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20 mb-8">
                <h3 className="text-2xl font-bold mb-4">Arjun Patel - Ads Specialist</h3>
                <p className="text-muted-foreground">
                  Spent 5 years at a big agency before realizing he hated the corporate BS. Joined us because he wanted to actually help businesses grow instead of just hitting arbitrary KPIs. Has a weird talent for writing ad copy that converts.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">The Rest of the Crew</h3>
                <p className="text-muted-foreground">
                  We've got designers, developers, social media managers, and content writers. All of them are freelancers or small business owners themselves, so they understand what you're going through. No corporate drones here.
                </p>
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Why Should You Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Because we've been where you are. We know what it's like to invest in marketing and pray it works. We know the stress of watching your ad budget disappear with nothing to show for it.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                We're not perfect. We make mistakes. But when we do, we own up to it, fix it, and make sure it doesn't happen again. That's the difference.
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
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground italic">
              P.S. - If you've read this far, you're probably the kind of business owner we love working with. Someone who actually cares about their business and isn't just looking for a quick fix. Let's talk.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
