"use client";

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { motion } from "framer-motion";
import { TemplateCard } from "@/components/cv-template-card";

// Template data
const templates = [
  {
    id: "modern-1",
    title: "Modern Professional",
    image: "/placeholder.svg?height=400&width=300",
    category: "Professional",
    rating: 4.8,
    isPro: true,
  },
  {
    id: "creative-1",
    title: "Creative Portfolio",
    image: "/placeholder.svg?height=400&width=300",
    category: "Creative",
    rating: 4.6,
  },
  {
    id: "minimal-1",
    title: "Minimal Clean",
    image: "/placeholder.svg?height=400&width=300",
    category: "Minimal",
    rating: 4.9,
    isPro: true,
  },
  {
    id: "academic-1",
    title: "Academic Resume",
    image: "/placeholder.svg?height=400&width=300",
    category: "Academic",
    rating: 4.7,
  },
  {
    id: "executive-1",
    title: "Executive Suite",
    image: "/placeholder.svg?height=400&width=300",
    category: "Professional",
    rating: 4.9,
    isPro: true,
  },
  {
    id: "tech-1",
    title: "Tech Innovator",
    image: "/placeholder.svg?height=400&width=300",
    category: "Technical",
    rating: 4.8,
  },
];

enum categories {
  Professional = "Professional",
  Creative = "Creative",
  Minimal = "Minimal",
  Academic = "Academic",
  Technical = "Technical",
}
const categoryValues = Object.values(categories);

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredTemplates = templates
    .filter(
      (template) =>
        selectedCategory === "All" || template.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "popular") return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-start">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/cv_template">Templates</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Header */}
        <div className="my-8 text-center lg:my-12">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Professional CV Templates
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose from our collection of professional templates to create your
            perfect CV
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categoryValues.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Templates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TemplateCard {...template} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              No templates found for the selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
