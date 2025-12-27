"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PotteryPiece } from "@/lib/pottery";

export default function PotteryPiecePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [piece, setPiece] = useState<PotteryPiece | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`/api/pottery/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setPiece(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load pottery piece:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!piece) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Pottery Piece Not Found
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            The pottery piece you're looking for doesn't exist.
          </p>
          <Link
            href="/pottery"
            className="text-zinc-900 dark:text-zinc-100 font-medium hover:underline"
          >
            ← Back to Pottery
          </Link>
        </div>
      </div>
    );
  }

  const currentImage = piece.images[currentImageIndex] || piece.thumbnail;

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/pottery"
          className="inline-block mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          ← Back to Pottery
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              {currentImage ? (
                <Image
                  src={currentImage}
                  alt={piece.title}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                  No image
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {piece.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {piece.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index
                        ? "border-zinc-900 dark:border-zinc-100"
                        : "border-transparent hover:border-zinc-400 dark:hover:border-zinc-600"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${piece.title} - view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              {piece.title}
            </h1>
            {piece.date && (
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {new Date(piece.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            {piece.description && (
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                  {piece.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



