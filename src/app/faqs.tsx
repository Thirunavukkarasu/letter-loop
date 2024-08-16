import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    title: "What is LetterLoop?",
    content:
      "LetterLoop is a platform to manage, send, and track newsletters with ease.",
  },
  {
    title: "Can I try it for free?",
    content: "Yes, we offer a free plan with essential features.",
  },
  {
    title: "What platforms does it integrate with?",
    content: "LetterLoop integrates with all popular email platforms.",
  },
  {
    title: "Is there a money-back guarantee?",
    content: "Yes, we offer a 30-day money-back guarantee on all paid plans.",
  },
];

export default function Faqs() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem value={faq.title} key={index}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent className="text-left">
                <p>{faq.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
