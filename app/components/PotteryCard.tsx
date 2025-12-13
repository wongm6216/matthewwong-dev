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
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-zinc-100 dark:bg-zinc-900">
        {piece.thumbnail ? (
          <Image
            src={piece.thumbnail}
            alt={piece.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No image
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
        {piece.title}
      </h3>
      {piece.description && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {piece.description}
        </p>
      )}
    </Link>
  );
}
