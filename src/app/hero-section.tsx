import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-primary font-black max-w-2xl text-center mx-auto tracking-tight py-4 pb-2">
          Manage Your
          <br />
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-1 inline-flex">
            Newsletters with Ease.
          </span>
        </h1>
        <p className="text-lg mb-8">
          LetterLoop simplifies the way you create, send, and track newsletters.
          Start today and enhance your email campaigns.
        </p>
        <div className="space-x-4">
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
          <Button asChild variant={"outline"}>
            <a href="https://github.com/thirunavukkarasu/letter-loop">
              {/* <GithubIcon size={12} /> */}
              Start on Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
