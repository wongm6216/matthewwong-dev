import Link from "next/link";
import Image from "next/image";
import { PotteryPiece } from "@/lib/pottery";

interface PotteryCardProps {
  piece: PotteryPiece;
}

export default function PotteryCard({ piece }: PotteryCardProps) {
  return (
    <Link
      href={`/pottery/${piece.slug}`}
      className="block group"
    >
      <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 w-full mb-4">
        {piece.thumbnail ? (
          <Image
            src={piece.thumbnail}
            alt={piece.title}
            width={1200}
            height={1200}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No image
          </div>
        )}
      </div>
    </Link>
  );
}
