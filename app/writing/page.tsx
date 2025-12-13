import { getAllPosts } from "@/lib/posts";
import BlogPostCard from "../components/BlogPostCard";

export default function WritingPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Writing</h1>
        <div className="space-y-0">
          {allPosts.length > 0 ? (
            allPosts.map((post) => <BlogPostCard key={post.slug} post={post} />)
          ) : (
            <p className="text-zinc-600 dark:text-zinc-400">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
