import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div id="section-faq" className="faq-section">
      <div className="faq-contents">
        <div className="faq-left">
        <h2>Frequently Asked <span class="underline-purple">Questions</span></h2>
        </div>
        <div className="faq-right">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              <div role="listitem" className="faq-wrapper w-dyn-item">
                <div className="faq-dropdown w-dropdown">
                  <div className="faq-toggle w-dropdown-toggle">
                    <div>What are the different types of gemstones you offer?</div>
                  </div>
                  <p>We offer a wide variety of gemstones, including but not limited to diamonds, rubies, sapphires, emeralds, and more. You can explore our complete gemstone catalog for more details.</p>
                </div>
              </div>
              <div role="listitem" className="faq-wrapper w-dyn-item">
                <div className="faq-dropdown w-dropdown">
                  <div className="faq-toggle w-dropdown-toggle">
                    <div>Do you offer custom jewelry designs with gemstones?</div>
                  </div>
                  <p>Yes, we provide custom jewelry design services. You can work with our designers to create unique jewelry pieces with your chosen gemstones.</p>
                </div>
              </div>

              <div role="listitem" className="faq-wrapper w-dyn-item">
                <div className="faq-dropdown w-dropdown">
                  <div className="faq-toggle w-dropdown-toggle">
                    <div>What is the return policy for gemstone purchases?</div>
                  </div>
                  <p>Our return policy allows you to return gemstone purchases within 30 days of receipt. Please review our detailed return policy for more information.</p>
                </div>
              </div>

              <div role="listitem" className="faq-wrapper w-dyn-item">
                <div className="faq-dropdown w-dropdown">
                  <div className="faq-toggle w-dropdown-toggle">
                    <div>Are your gemstones certified for authenticity?</div>
                  </div>
                  <p>Yes, all our gemstones are certified for authenticity. We provide gemstone certificates to ensure the quality and authenticity of our products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
