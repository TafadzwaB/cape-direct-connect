"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      area: formData.get("area") as string,
      details: formData.get("details") as string,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="text-xl font-bold text-green-800 mb-2">
          Thank you for your request!
        </p>
        <p className="text-green-700 mb-4">
          We&apos;ll get back to you within 30 minutes during business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-green-700 hover:text-green-900 underline transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4"
    >
      <p className="text-xl font-bold text-gray-900 mb-2">
        Get a Free Quote
      </p>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="quote-name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            name="name"
            placeholder="e.g. John Smith"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            placeholder="e.g. 021 200 1537"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
          />
        </div>
      </div>
      <div>
        <label htmlFor="quote-service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Required <span className="text-red-500">*</span>
        </label>
        <select
          id="quote-service"
          name="service"
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
      </div>
      <div>
        <label htmlFor="quote-area" className="block text-sm font-medium text-gray-700 mb-1">
          Your Area
        </label>
        <input
          id="quote-area"
          type="text"
          name="area"
          placeholder="e.g. Claremont"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
        />
      </div>
      <div>
        <label htmlFor="quote-details" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="quote-details"
          name="details"
          placeholder="Tell us more about what you need..."
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none text-gray-900"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {loading ? "Sending..." : "Request Free Quote"}
      </button>
    </form>
  );
}
