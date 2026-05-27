"use client";

import { useState } from "react";
import { testimonials } from "@/data/siteData";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="text-yellow-400 text-2xl mb-4">
          {"★".repeat(t.rating)}
        </div>
        <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-4">
          &ldquo;{t.text}&rdquo;
        </blockquote>
        <p className="font-semibold text-gray-900">{t.name}</p>
        <p className="text-sm text-gray-500">{t.location}</p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === current ? "bg-blue-700" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition flex items-center justify-center"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </div>
  );
}
