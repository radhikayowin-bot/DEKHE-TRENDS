import { useState } from "react";
import { Search, X } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
}

const allPosts: BlogPost[] = [
  {
    slug: "ai-build-website-10-minutes",
    title: "Can AI Build a Full Website in 10 Minutes? Real Test & Results",
    excerpt: "We tested if AI can actually build a full website in 10 minutes. Real experiment with Claude, Cursor, Copilot, and Windsurf.",
    category: "AI Tools",
    tags: ["AI", "Web Development", "Coding Tools", "Claude", "Cursor"],
  },
  {
    slug: "best-vibe-coding-tools-2026",
    title: "Best Vibe Coding Tools 2026: Claude, Cursor, Copilot, Windsurf, Cline & RooCode Compared",
    excerpt: "AI coding tools are changing the way developers build software. Compare the best vibe coding tools.",
    category: "AI Tools",
    tags: ["AI", "Coding", "Developer Tools", "Comparison", "Review"],
  },
];

export function BlogSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredPosts = query.length > 0
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-12 py-4 rounded-full bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white placeholder:text-muted-foreground"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && query && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full mt-2 w-full glass-card rounded-2xl p-4 z-50 max-h-96 overflow-y-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-2">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    onClick={() => {
                      setQuery("");
                      setIsOpen(false);
                    }}
                  >
                    <div className="p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 line-clamp-1">
                            {post.title}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex gap-2 mt-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No articles found for "{query}"</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
