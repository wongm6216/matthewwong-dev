import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Contact</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          You can reach me at:
        </p>
        <p className="text-zinc-900 dark:text-zinc-100 text-lg mb-8">
          wongm6216 [at] gmail [dot] com
        </p>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Socials
        </p>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://www.linkedin.com/in/matthew-wong-b56180277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 dark:text-zinc-100 text-lg hover:underline"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}



