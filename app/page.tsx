import { getPostsByCategory } from "@/lib/posts";
import BlogPostCard from "./components/BlogPostCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const essays = getPostsByCategory("essay").slice(0, 7);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Matthew Wong
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            Still figuring it out.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-stretch">
            <div className="relative w-full h-[350px] sm:w-[300px] sm:h-auto shrink-0 bg-zinc-200">
              <Image
                src="/profile-photo-v2.png"
                alt="Matthew Wong"
                fill
                className="object-cover rounded-lg"
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex flex-col flex-1 py-4">
                <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
                  Hey, I'm Matt! I'm currently building{" "}
                  <Link
                    href="https://pothai.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:opacity-80"
                  >
                    Poth (YC S26)
                  </Link>
                  .
                </h2>
                <h3 className="text-zinc-800 dark:text-zinc-100 mb-4">
                  Math & CS @ Stanford | Los Angeles, CA 
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  My goal is to create as much impact as possible. I've previously worked in{" "}
                  <Link
                    href="https://data.caltech.edu/records/6qgd6-9ec23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:opacity-80"
                  >
                    seismology
                  </Link>
                  ,{" "}
                  <Link
                    href="https://rosemeadca.gov/services/community_development/new_page.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:opacity-80"
                  >
                    building and safety
                  </Link>
                  , and{" "}
                  <Link
                    href="https://ui.adsabs.harvard.edu/abs/2024AGUFMED41C2449W/abstract"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 dark:text-zinc-100 underline hover:opacity-80"
                  >
                    geochemistry
                  </Link>
                  . Most recently I was at Palantir as a forward-deployed engineer turned deployment strategist working on the U.S. commercial sector as part of the Meritocracy Fellows Program. Through these experiences, I aim to understand how best to create social change.
                </p>
                <Link
                  href="/wong_matthew_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:opacity-90 transition-opacity w-fit"
                >
                  My CV
                </Link>
            </div>
          </div>
        </section>

        {/* Recent Essays */}
        {essays.length > 0 ? (
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
                View all essays →
              </Link>
            </div>
          </section>
        ) : (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-900 dark:text-zinc-100">
              Recent Essays
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">No essays yet.</p>
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