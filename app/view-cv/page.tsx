"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ViewCVPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted">

      <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
        <Card className="w-full max-w-4xl shadow-lg border border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold">View CV (Empty Page)</CardTitle>
          </CardHeader>

          <CardContent className="mt-4 flex flex-col items-center justify-center text-muted-foreground">
            {/* Empty content, ready for your PDF reader */}
            <p className="text-center">This page is empty and ready for your PDF reader implementation.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
