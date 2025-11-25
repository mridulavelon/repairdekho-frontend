"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faShieldAlt, faStar, faTruck, faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does mobile servicing take?",
      a: "Most services take between 30 minutes to 2 hours depending on your mobile model and issue.",
      tag: "Service Time",
    },
    {
      q: "Do you offer doorstep service?",
      a: "Yes! We provide doorstep mobile repair in selected areas.",
      tag: "Doorstep Service",
    },
    {
      q: "Is there a warranty on repairs?",
      a: "Yes, we provide up to 6 months warranty on most repairs based on the replaced part.",
      tag: "Warranty",
    },
    {
      q: "What issues do you fix?",
      a: "Screen damage, battery issues, camera faults, charging problems, software issues, water damage & more.",
      tag: "Common Issues",
    },
    {
      q: "Are the parts original?",
      a: "We use premium-quality parts with warranty. Original parts are available on request.",
      tag: "Parts Quality",
    },
  ];

  const features = [
    { icon: faWrench, label: "Fast Service" },
    { icon: faShieldAlt, label: "Quality Parts" },
    { icon: faStar, label: "Warranty Support" },
    { icon: faTruck, label: "Doorstep Repair" },
  ];

  return (
   <div className="bg-white min-h-screen text-gray-900">

  {/* HERO SECTION */}
  <section className="w-full bg-gray-50 border-b">
    <div className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
        Frequently Asked Questions
      </h1>

      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Find answers to the most common questions about our mobile repair services.
        If you still need help, feel free to contact our support team.
      </p>

      {/* Small Stats / Info */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 text-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📱</span>
          <p className="text-sm">Trusted by 10,000+ Customers</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <p className="text-sm">Fast 30–60 Min Repair Time</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🧰</span>
          <p className="text-sm">Certified Technicians</p>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ SECTION */}
  <section id="faq" className="max-w-4xl mx-auto px-6 py-16">

    <h2 className="text-2xl font-semibold mb-6 text-gray-900">
      Common Questions
    </h2>

    {/* FAQ ITEM */}
    <details className="group border-b py-5 cursor-pointer">
      <summary className="flex justify-between items-center text-lg font-medium">
        What devices do you repair?
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">
        We repair mobiles, tablets, iPads, laptops, and smartwatches of all major brands.
      </p>
    </details>

    <details className="group border-b py-5 cursor-pointer">
      <summary className="flex justify-between items-center text-lg font-medium">
        How long does a repair take?
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">
        Most repairs are completed within 30–60 minutes based on device & issue.
      </p>
    </details>

    <details className="group border-b py-5 cursor-pointer">
      <summary className="flex justify-between items-center text-lg font-medium">
        Do you offer home repair service?
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">
        Yes! We provide doorstep repair service in selected service areas.
      </p>
    </details>

    <details className="group border-b py-5 cursor-pointer">
      <summary className="flex justify-between items-center text-lg font-medium">
        Is there any warranty on repairs?
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">
        All repairs come with 3–6 months warranty depending on the replacement part.
      </p>
    </details>

    <details className="group border-b py-5 cursor-pointer">
      <summary className="flex justify-between items-center text-lg font-medium">
        Do you use original parts?
        <span className="transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-3 text-gray-600">
        We use high-quality OEM parts that go through strict quality checks.
      </p>
    </details>
  </section>

  {/* CONTACT CTA */}
  <section className="max-w-4xl mx-auto text-center px-6 pb-20">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Still Have Questions?
    </h3>
    <p className="text-gray-600 mb-6">
      Our support team is here to help you 7 days a week.
    </p>

    <a
      href="/contact"
      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
    >
      Contact Support
    </a>
  </section>
</div>



  );
}