"use client";

import Navbar from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <Card className="w-full max-w-4xl shadow-lg border border-border">
          <CardHeader className="text-center space-y-3">
            <CardTitle className="text-3xl font-semibold">About Me</CardTitle>
            <CardDescription>Get to know more about who I am and what I do</CardDescription>
          </CardHeader>

          <Separator className="mb-6" />

          <CardContent className="grid md:grid-cols-2 gap-10 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Image
                src="/profile.jpg"
                alt="My profile picture"
                width={250}
                height={250}
                className="rounded-2xl shadow-md object-cover"
              />
            </div>

            {/* About Text */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hi 👋 I'm <span className="font-semibold text-foreground">[Your Name]</span>, a passionate
                web developer and designer who loves building visually appealing and functional
                digital experiences. I specialize in modern web technologies such as{" "}
                <span className="font-medium">Next.js, React, TailwindCSS, and Node.js</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving complex problems, creating interactive UIs, and learning new tools that
                improve productivity and performance. My goal is to continuously grow as a developer
                while contributing to meaningful projects.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default">View My Projects</Button>
                <Button variant="outline">Download Resume</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

    </div>
  );
}
