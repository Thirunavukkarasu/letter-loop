import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Manage Your Newsletters with Ease
        </h1>
        <p className="text-lg mb-8">
          LetterLoop simplifies the way you create, send, and track newsletters.
          Start today and enhance your email campaigns.
        </p>
        <div className="space-x-4">
          <Button>Get Started</Button>
          <Button asChild variant={"outline"}>
            <a href="https://github.com/thirunavukkarasu/letter-loop">
              Start on Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
