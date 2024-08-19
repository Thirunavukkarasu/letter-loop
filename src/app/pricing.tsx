import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p className="mb-4">Get started with essential features.</p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Start Free
            </a>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$29/year</p>
            <p className="mb-4">Advanced features for growing businesses.</p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Get Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
