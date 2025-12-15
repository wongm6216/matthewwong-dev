import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tech: string[];
  slug?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  tech,
  slug,
}: ProjectCardProps) {
  const content = (
    <div className="h-full flex flex-col border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <div className="relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <Link
        href={`/projects/${slug}`}
        className="block group"
      >
        {content}
      </Link>
    );
  }

  return content;
}
