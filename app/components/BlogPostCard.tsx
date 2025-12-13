import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/lib/posts";

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = post.date
    ? format(new Date(post.date), "MM/dd/yyyy")
    : "";

  return (
    <Link
      href={`/writing/${post.slug}`}
      className="block border-b border-zinc-200 dark:border-zinc-800 py-6 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
        {formattedDate && (
          <div className="text-sm text-zinc-500 dark:text-zinc-500 whitespace-nowrap">
            {formattedDate}
          </div>
        )}
      </div>
    </Link>
  );
}
