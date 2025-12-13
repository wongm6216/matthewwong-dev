import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Post Not Found
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/writing"
          className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
        >
          ← Back to Writing
        </Link>
      </div>
    </div>
  );
}
