import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How can I rent a car from Take Your Car?",
        answer:
            "Browse our car listings, choose your preferred vehicle, select the rental duration, and proceed to checkout. You’ll receive instant confirmation once your booking is complete.",
    },
    {
        question: "What documents are required to rent a car?",
        answer:
            "You need a valid driving license, a national ID or passport, and a valid payment method (debit or credit card) for verification and security purposes.",
    },
    {
        question: "Is there a refundable security deposit?",
        answer:
            "Yes, a small refundable security deposit is required for most vehicles. The amount depends on the car type and rental duration and is returned after inspection upon return.",
    },
    {
        question: "Can I cancel or modify my booking?",
        answer:
            "Yes, bookings can be canceled or modified before the rental period starts. However, cancellation policies may vary depending on the vehicle type and rental duration.",
    },
    {
        question: "Do you offer driver services?",
        answer:
            "Yes! We offer professional driver services upon request. You can select the 'With Driver' option during booking or contact us directly for special arrangements.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 contain">
            <div className="mb-10">
                <h2 className="titles">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm pt-2">
                    Get quick answers to common questions about car rentals, payments, and our services.
                </p>
            </div>

            <div className=" mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-5 text-left"
                        >
                            <span className="font-semibold text-gray-800">{faq.question}</span>
                            <ChevronDown
                                className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="px-5 pb-5 text-gray-600 border-t border-gray-100">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
