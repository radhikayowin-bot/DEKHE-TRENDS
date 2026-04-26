import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <>
      <SEO 
        title="Blog | Dekhe Trends"
        description="Stay informed with our latest articles, insights, and updates on market trends and digital marketing strategies."
        canonical="https://dekhetrends.com/blog"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Our <span className="text-primary">Blog</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay informed with our latest articles and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card 1 */}
            <Link href="/blog/ai-build-website-10-minutes" className="group block h-full">
              <div className="bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 rounded-2xl overflow-hidden transition-all h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/30 to-accent/30 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop" 
                    alt="Can AI Build a Website in 10 Minutes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>April 26, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    Can AI Build a Full Website in 10 Minutes? Real Test & Results
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                    We tested if AI can actually build a full website in 10 minutes. Real experiment with Claude, Cursor, Copilot, and Windsurf. Here are the honest results.
                  </p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Blog Post Card 2 */}
            <Link href="/blog/best-vibe-coding-tools-2026" className="group block h-full">
              <div className="bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 rounded-2xl overflow-hidden transition-all h-full flex flex-col">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/30 to-accent/30 relative overflow-hidden">
                  <img 
                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*nOd4xby-JPQsQy-_" 
                    alt="Best Vibe Coding Tools 2026" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>April 26, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                    Best Vibe Coding Tools 2026: Claude, Cursor, Copilot, Windsurf, Cline & RooCode Compared
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                    AI coding tools are changing the way developers build software. Compare Claude, Cursor, GitHub Copilot, Windsurf, Cline & RooCode to find the best vibe coding tool for your needs.
                  </p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
