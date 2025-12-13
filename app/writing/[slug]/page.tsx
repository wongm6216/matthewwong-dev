import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.date ? format(new Date(post.date), "MMMM dd, yyyy") : "";

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/writing"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Back to Writing
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              {post.title}
            </h1>
            {formattedDate && (
              <p className="text-zinc-600 dark:text-zinc-400">{formattedDate}</p>
            )}
          </header>

          <div
            className="prose prose-zinc dark:prose-invert max-w-none prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100 prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-a:text-zinc-900 dark:prose-a:text-zinc-100 prose-code:text-zinc-900 dark:prose-code:text-zinc-100"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}
