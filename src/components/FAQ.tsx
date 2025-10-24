import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Are devices original and IMEI-clean?',
    answer: 'Yes, absolutely. Every device we sell is 100% authentic Apple hardware, sourced from vetted U.S. suppliers. We check IMEI status against major databases to ensure no device is blacklisted, reported lost, or stolen. You receive full documentation of verification.'
  },
  {
    question: 'Do you ship worldwide?',
    answer: 'Yes! We ship throughout the United States and internationally. Shipping times vary by destination, but we provide full tracking information for every order. International customers should be aware of potential customs duties and import regulations in their country.'
  },
  {
    question: 'What grades do you offer?',
    answer: 'We offer Grade A (excellent condition with minimal wear), Grade B (good condition with light cosmetic wear), and Grade C (functional with visible wear). All grades are fully tested and functional. We provide detailed grading criteria so you know exactly what to expect.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We stand behind our products with a fair return policy. If your device doesn\'t match the description or has undisclosed issues, we\'ll work with you to make it right through return, exchange, or refund. Contact us within 7 days of receipt to initiate a return.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-yellow-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
