"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      slug: "library-management-system",
      title: "Library Management System",
      description: "A digital university library system with admin dashboard, borrowing, and analytics.",
      image: "/projects/library-dashboard.png",
    },
    {
      slug: "portfolio-website",
      title: "Personal Portfolio Website",
      description: "A modern responsive portfolio built with Next.js, Tailwind, and Shadcn UI.",
      image: "/projects/portfolio-preview.png",
    },
    {
      slug: "trading-bot",
      title: "MT5 Trading Bot",
      description: "An automated trading bot with ATR-based stop loss and news filter.",
      image: "/projects/trading-bot.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      <section className="max-w-6xl mx-auto py-20 px-6 space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          <p className="text-muted-foreground text-lg">
            A collection of some of my best works built using modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover w-full h-52"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={`/project/${project.slug}`}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
