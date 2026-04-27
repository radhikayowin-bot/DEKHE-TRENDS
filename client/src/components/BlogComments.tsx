import { useEffect } from "react";
import { MessageSquare } from "lucide-react";

interface BlogCommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export function BlogComments({ url, identifier, title }: BlogCommentsProps) {
  useEffect(() => {
    // Disqus configuration
    const disqusConfig = function (this: any) {
      this.page.url = `https://dekhetrends.com${url}`;
      this.page.identifier = identifier;
      this.page.title = title;
    };

    // Load Disqus script
    const script = document.createElement("script");
    script.src = "https://dekhetrends.disqus.com/embed.js";
    script.setAttribute("data-timestamp", String(+new Date()));
    (document.head || document.body).appendChild(script);

    // Set config
    (window as any).disqus_config = disqusConfig;

    return () => {
      // Cleanup
      const disqusThread = document.getElementById("disqus_thread");
      if (disqusThread) {
        disqusThread.innerHTML = "";
      }
    };
  }, [url, identifier, title]);

  return (
    <div className="mt-16 pt-12 border-t border-white/10">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold">Comments & Discussion</h3>
      </div>
      <div id="disqus_thread" className="min-h-[200px]">
        <noscript>
          Please enable JavaScript to view the{" "}
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
      </div>
    </div>
  );
}
