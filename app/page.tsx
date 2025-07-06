"use client";

import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
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
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Quote Generator</h1>
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
  );
}
