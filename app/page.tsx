import { getRecentPosts, getPostsByCategory } from "@/lib/posts";
import BlogPostCard from "./components/BlogPostCard";
import Link from "next/link";

export default function Home() {
  const recentPosts = getRecentPosts(7);
  const essays = getPostsByCategory("essay").slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Matthew Wong
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Psychology, Economics, Programming, or anything interesting.
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
            Hello, I'm Matthew.
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            My goal is to build technology that addresses social challenges. My past projects have
            addressed issues like loneliness, air pollution, and legacy climate model infrastructure.
            Most recently, I led a product team developing innovative solutions. Informed by these
            experiences, I aim to study how technological progress can be harnessed for the public good.
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
          >
            My CV
          </Link>
        </section>

        {/* Recent Blog Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
            Recent Blog Posts
          </h2>
          <div className="space-y-0">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-zinc-600 dark:text-zinc-400">No blog posts yet.</p>
            )}
          </div>
          {recentPosts.length > 0 && (
            <div className="mt-6">
              <Link
                href="/writing"
                className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
              >
                View all posts →
              </Link>
            </div>
          )}
        </section>

        {/* Recent Essays */}
        {essays.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
              Recent Essays
            </h2>
            <div className="space-y-0">
              {essays.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/writing"
                className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
              >
                For more academic writing, visit the scratchpad.
              </Link>
            </div>
          </section>
        )}

        {/* Quotes and Links Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
            Quotes and Links
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4">
              <p className="text-zinc-700 dark:text-zinc-300 italic mb-2">
                "The best way to predict the future is to invent it."
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                — Alan Kay
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}