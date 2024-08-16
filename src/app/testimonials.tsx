import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <p className="mb-4">
              LetterLoop has transformed our email marketing strategy.
              It&rsquo;s so easy to use!
            </p>
            <h3 className="text-xl font-semibold">Jane Doe</h3>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <p className="mb-4">
              The analytics feature is a game-changer. We can now track
              everything in one place.
            </p>
            <h3 className="text-xl font-semibold">John Smith</h3>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <p className="mb-4">
              Scheduling newsletters has never been this easy. Highly recommend!
            </p>
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
