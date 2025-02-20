"use client";

import { MagicCard } from "./magicui/magic-card";
import { SparklesText } from "./magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cv from "@/assets/cv.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-gradient-to-b from-background to-background/50">
      <div className="absolute inset-0  " />
      <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center gap-8 text-center"
        >
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Create your{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                Dream
              </span>{" "}
              <span className="inline-block">
                <SparklesText text="CV" />
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Your one-stop solution for building a professional resume that
              stands out and gets you noticed
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/cv_template">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-2 font-semibold text-white transition-all hover:scale-105"
              >
                Get Started
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              View Templates
            </Button>
          </div>
        </motion.div>

        {/* CV Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -z-10 right-0 top-1/2 md:right-1/2 lg:right-64 transform -translate-y-1/2 md:translate-x-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 opacity-30 blur-lg" />
            <MagicCard className="w-4/5 sm:w-3/5 md:w-[500px] lg:w-[600px]">
              <Image
                src={cv || "/placeholder.svg"}
                width={600}
                height={600}
                alt="CV preview example"
                className="rounded-lg object-cover shadow-2xl"
                priority
              />
            </MagicCard>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </section>
  );
};
