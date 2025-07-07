"use client";

import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import Link from "next/link";
import { quotes } from "@/lib/quotes";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.quote);
    setFilteredQuotes(selected);
  };

  return (
      <div className="flex flex-col min-h-screen">
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900">
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">🧠 QuotGen</Link>
        </div>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 dark:text-gray-100 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </nav>

    <main className="flex-grow max-w-xl mx-auto p-7">
      <h1 className="text-3xl font-bold mb-4">Quote Generator</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <Input
          placeholder="Enter a topic (e.g., life, success, love)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button type="submit">Get Quotes</Button>
      </form>

      {filteredQuotes.length > 0 ? (
        filteredQuotes.map((quote, idx) => (
          <Card key={idx} className="mb-4">
            <CardContent className="p-4">{quote}</CardContent>
          </Card>
        ))
      ) : (
        <p className="text-muted-foreground">No quotes yet. Try searching for: <strong>life</strong>, <strong>love</strong>, <strong>success</strong>.</p>
      )}
    </main>
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 border-t">
        © 2025 QuotGen. Built with using Next.js
      </footer>
    </div>
  );
}
