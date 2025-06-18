// src/pages/FAQPage.tsx

import React from "react";

const faqs = [
  {
    question: "What is Veggie Buddy?",
    answer: "Veggie Buddy is your virtual garden guide — helping you grow plants, find tips, and design your garden easily."
  },
  {
    question: "How often should I water my plants?",
    answer: "Watering needs vary by plant, but typically once a day or every other day is a good start."
  },
  {
    question: "Can I use Veggie Buddy without an account?",
    answer: "Yes, but signing up gives you access to more personalized features and saved gardens."
  }
];

const FAQPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-3">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
