"use client";

import { useState, useEffect } from "react";
import { getAllPottery, PotteryPiece } from "@/lib/pottery";
import PotteryCard from "../components/PotteryCard";
import Link from "next/link";
import Image from "next/image";

export default function PotteryPage() {
  const [pottery, setPottery] = useState<PotteryPiece[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pottery data from API
    fetch("/api/pottery")
      .then((res) => res.json())
      .then((data) => {
        setPottery(data);
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
        {pottery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
