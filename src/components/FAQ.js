import React from 'react';
import '../styles/FAQ.css';
import FAQItem from './FAQItem'; 

const FAQ = () => {
  const faqData = [
    {
      question: 'What are the different types of gemstones you offer?',
      answer: 'We offer a wide variety of gemstones, including but not limited to diamonds, rubies, sapphires, emeralds, and more. You can explore our complete gemstone catalog for more details.',
    },
    {
      question: 'Do you offer custom jewelry designs with gemstones?',
      answer: 'Yes, we provide custom jewelry design services. You can work with our designers to create unique jewelry pieces with your chosen gemstones.',
    },
    {
      question: 'What is the return policy for gemstone purchases?',
      answer: 'Our return policy allows you to return gemstone purchases within 30 days of receipt. Please review our detailed return policy for more information.',
    },
    {
      question: 'Are your gemstones certified for authenticity?',
      answer: 'Yes, all our gemstones are certified for authenticity. We provide gemstone certificates to ensure the quality and authenticity of our products.',
    },
  ];

  return (
    <div id="section-faq" className="faq-section">
      <div className="faq-contents">
        <div className="faq-left">
          <h2>Frequently Asked <span className="underline-purple">Questions</span></h2>
        </div>
        <div className="faq-right">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
