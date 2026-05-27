"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Thank you for your request!
        </h3>
        <p className="text-green-700">
          We&apos;ll get back to you within 30 minutes during business hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Get a Free Quote
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
        />
      </div>
      <select
        required
        defaultValue=""
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
      >
        <option value="" disabled>
          Select a Service
        </option>
        <option>DStv Installation</option>
        <option>DStv Repairs</option>
        <option>Signal Repairs</option>
        <option>ExtraView Setup</option>
        <option>TV Wall Mounting</option>
        <option>OVHD Installation</option>
      </select>
      <input
        type="text"
        placeholder="Your Area (e.g. Claremont)"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
      />
      <textarea
        placeholder="Any additional details..."
        rows={3}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900"
      />
      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
      >
        Request Free Quote
      </button>
    </form>
  );
}
