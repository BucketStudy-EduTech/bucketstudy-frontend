import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We aim to respond to all inquiries within 24-48 hours during business days.',
    },
    {
      question: 'Do you offer technical support for interns?',
      answer: 'Yes, we provide technical support through our platform. Interns can ask questions and get help from mentors.',
    },
    {
      question: 'Can I visit your office in person?',
      answer: 'Yes, but please schedule an appointment in advance by contacting us via email or phone.',
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;