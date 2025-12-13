"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface SearchablePost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

export default function Navigation() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchablePost[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [allPosts, setAllPosts] = useState<SearchablePost[]>([]);

  useEffect(() => {
    // Load all posts for search from API
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
    );
    setSearchResults(results.slice(0, 5)); // Limit to 5 results
  }, [searchQuery, allPosts]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/writing", label: "Writing" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/projects", label: "Projects" },
    { href: "/bookshelf", label: "Bookshelf" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            MW
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              className="px-3 py-1.5 text-sm border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 w-32 sm:w-40"
            />
            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
                {searchResults.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/writing/${post.slug}`}
                    className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800 last:border-b-0"
                  >
                    <div className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
                      {post.title}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                      {post.excerpt}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
