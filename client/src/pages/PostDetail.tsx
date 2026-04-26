import { usePost } from "@/hooks/use-posts";
import { useRoute, Link } from "wouter";
import { format } from "date-fns";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading } = usePost(slug);

  if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" /></div>;
  
  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link href="/blog"><Button variant="outline">Back to Blog</Button></Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="flex gap-3">
            <Badge variant="outline" className="text-primary border-primary/20">{post.category}</Badge>
            <span className="text-sm text-muted-foreground flex items-center">
              {post.publishedAt && format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground font-medium leading-relaxed border-l-4 border-primary/50 pl-6">
            {post.excerpt}
          </p>
        </div>

        {post.imageUrl && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 aspect-video">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content Render */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary hover:prose-a:text-accent">
          {/* In a real app, use a markdown renderer here. For now, whitespace-pre-wrap */}
          <div className="whitespace-pre-wrap font-sans text-muted-foreground">
            {post.content}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <h3 className="text-2xl font-bold font-display mb-4">Want insights like this tailored to your brand?</h3>
          <Link href="/audit">
            <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
              Get a Custom Audit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
