"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is LetterLoop?",
    answer:
      "LetterLoop is a platform to manage, send, and track newsletters with ease.",
  },
  {
    question: "Can I try it for free?",
    answer: "Yes, we offer a free plan with essential features.",
  },
  {
    question: "What platforms does it integrate with?",
    answer: "LetterLoop integrates with all popular email platforms.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {" "}
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg"
            >
              <motion.div
                className="p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
              </motion.div>
              {expanded === index && (
                <motion.div
                  className="p-4 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
