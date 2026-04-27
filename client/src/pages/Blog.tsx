import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Calendar, ArrowRight, TrendingUp, Code, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "All", icon: Sparkles, active: true },
  { name: "AI Tools", icon: Code, active: false },
  { name: "Marketing", icon: Target, active: false },
  { name: "Tech Trends", icon: TrendingUp, active: false },
];

const blogPosts = [
  {
    slug: "ai-build-website-10-minutes",
    title: "Can AI Build a Full Website in 10 Minutes? Real Test & Results",
    excerpt: "We tested if AI can actually build a full website in 10 minutes. Real experiment with Claude, Cursor, Copilot, and Windsurf. Here are the honest results.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
    date: "April 26, 2026",
    category: "AI Tools",
    readTime: "8 min read",
    featured: true
  },
  {
    slug: "best-vibe-coding-tools-2026",
    title: "Best Vibe Coding Tools 2026: Claude, Cursor, Copilot, Windsurf, Cline & RooCode Compared",
    excerpt: "AI coding tools are changing the way developers build software. Compare Claude, Cursor, GitHub Copilot, Windsurf, Cline & RooCode to find the best vibe coding tool for your needs.",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nOd4xby-JPQsQy-_",
    date: "April 26, 2026",
    category: "AI Tools",
    readTime: "12 min read",
    featured: true
  }
];

export default function Blog() {
  return (
    <>
      <SEO 
        title="Tech Blog - AI Tools, Marketing & Digital Trends | Dekhe Trends"
        description="Expert insights on AI coding tools, digital marketing strategies, and tech trends. In-depth reviews, comparisons, and real-world tests."
        canonical="https://dekhetrends.com/blog"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Real-world tests, honest reviews, and actionable insights on AI tools, marketing, and tech trends.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  cat.active 
                    ? 'bg-gradient-to-r from-primary to-accent text-white' 
                    : 'bg-white/5 hover:bg-white/10 text-muted-foreground'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="glass-card rounded-2xl overflow-hidden transition-all h-full flex flex-col hover:scale-[1.02] card-glow">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <span className="text-sm font-semibold text-primary inline-flex items-center">
                          Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with <span className="gradient-text">Latest Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI tools, marketing strategies, and tech trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-primary focus:outline-none"
              />
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* All Posts Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div className="glass-card rounded-2xl overflow-hidden transition-all h-full flex flex-col hover:scale-[1.02]">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        <span className="text-sm font-semibold text-primary inline-flex items-center">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
