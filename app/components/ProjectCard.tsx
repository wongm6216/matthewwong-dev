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
    <div className="h-full flex flex-col border-2 border-zinc-400 rounded-lg overflow-hidden bg-[#FAF9F6] hover:border-zinc-500 transition-colors shadow-sm">
      <div className="relative w-full h-48 overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-zinc-900">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-zinc-200 text-zinc-700 rounded"
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



