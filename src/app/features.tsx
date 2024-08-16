import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Seamless Integration
            </h3>
            <p>Sync with popular email platforms effortlessly.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Custom Schedules</h3>
            <p>Automate your newsletter delivery with ease.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Personalized Content
            </h3>
            <p>Tailor your messages for each subscriber.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Analytics</h3>
            <p>Track performance with detailed insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
