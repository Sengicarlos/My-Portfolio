"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Shadcn button import
import Link from "next/link";

export default function HomePage() {
  const [hoveredImage, setHoveredImage] = useState<null | number>(null);
  const [activeImage, setActiveImage] = useState<null | number>(null);

  const images = [
    { id: 1, src: "/images/image1.jpg", defaultClip: "clip-left" },
    { id: 2, src: "/images/image2.jpg", defaultClip: "clip-middle" },
    { id: 3, src: "/images/image3.jpg", defaultClip: "clip-right" },
  ];

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of project one.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of project two.",
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80&auto=format&fit=crop",
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of project three.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
      link: "#",
    },
  ];

  useEffect(() => {
    if (hoveredImage !== null) {
      setActiveImage(hoveredImage);
    } else {
      const timer = setTimeout(() => setActiveImage(null), 700);
      return () => clearTimeout(timer);
    }
  }, [hoveredImage]);

  return (
    <>
      {/* Hero Section */}
  <div className="w-full h-screen bg-background relative overflow-hidden flex justify-center items-center">
        {images.map((img) => (
          <div
            key={img.id}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out overflow-hidden ${
              hoveredImage === img.id
                ? "clip-full z-20"
                : activeImage === img.id
                ? `${img.defaultClip}-active z-20`
                : `${img.defaultClip} z-10`
            }`}
            onMouseEnter={() => setHoveredImage(img.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img.src}
              alt={`Hero ${img.id}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out"
              style={{ willChange: "transform" }}
            />
          </div>
        ))}

        {/* Overlay text */}
  <div className="relative z-30 text-center text-foreground space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl">Explore my projects and skills</p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about">
              <Button variant="default">About Me</Button>
            </Link>
            <Link href="/contact">
              <Button variant="default">Hire Me</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="w-full bg-background py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I have worked on recently.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/1200x560?text=Project+Image')}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button asChild>
                  <Link href={project.link} target="_blank">
                    View Project
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
