"use client";

import { useState, useEffect } from "react";
import { PotteryPiece } from "@/lib/pottery";
import PotteryCard from "../components/PotteryCard";

export default function PotteryPage() {
  const [pottery, setPottery] = useState<PotteryPiece[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pottery data from API
    fetch("/api/pottery")
      .then((res) => res.json())
      .then((data) => {
        // Shuffle the pottery array
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setPottery(shuffled);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load pottery:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Pottery</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">(I do it as a hobby)</p>
        {pottery.length > 0 ? (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
            {pottery.map((piece) => (
              <PotteryCard key={piece.slug} piece={piece} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">No pottery pieces yet.</p>
        )}
      </div>
    </div>
  );
}
