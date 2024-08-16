import { Button } from "@/components/ui/button";
import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Produly{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mt-1 inline-flex">
            Open Source
          </span>
        </h2>
        <p className="text-lg mb-8">
          LetterLoop is an open-source project. You can contribute to the
          project on GitHub. We welcome your contributions.
        </p>
        <Button asChild variant={"outline"}>
          <a href="https://github.com/thirunavukkarasu/letter-loop">
            Start on Github
          </a>
        </Button>
      </div>
    </section>
  );
}
