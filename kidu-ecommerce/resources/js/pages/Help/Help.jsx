import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Help.css';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General', icon: 'fa-question-circle' },
    { id: 'account', name: 'Account', icon: 'fa-user' },
    { id: 'orders', name: 'Orders', icon: 'fa-shopping-cart' },
    { id: 'shipping', name: 'Shipping', icon: 'fa-truck' },
    { id: 'payments', name: 'Payments', icon: 'fa-credit-card' },
    { id: 'technical', name: 'Technical', icon: 'fa-cog' }
  ];

  const faqs = {
    general: [
      {
        question: 'What is Kidu?',
        answer: 'Kidu is a cross-border e-commerce platform connecting Dubai-based merchants with customers in Rwanda, specializing in electronics and accessories.'
      },
      {
        question: 'How do I create an account?',
        answer: 'You can create an account by clicking the "Register" button in the top navigation and filling out the registration form with your details.'
      },
      {
        question: 'What products do you offer?',
        answer: 'We offer a wide range of electronics and accessories including smartphones, laptops, headphones, chargers, and other tech accessories.'
      },
      {
        question: 'Do you ship to Rwanda?',
        answer: 'Yes, we specialize in shipping to Rwanda and have established logistics partnerships to ensure reliable delivery.'
      }
    ],
    account: [
      {
        question: 'How do I reset my password?',
        answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email address.'
      },
      {
        question: 'Can I change my account information?',
        answer: 'Yes, you can update your account information by going to your profile settings after logging in.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Contact our support team to request account deletion. We will process your request within 30 days.'
      }
    ],
    orders: [
      {
        question: 'How do I track my order?',
        answer: 'You can track your order by logging into your account and visiting the "My Orders" section, or using the tracking number provided in your order confirmation email.'
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Orders can be cancelled within 24 hours of placement. Contact our support team for assistance with order cancellation.'
      },
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most products. Items must be in original condition with all packaging intact.'
      }
    ],
    shipping: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping to Rwanda takes 7-14 business days. Express shipping is available for faster delivery.'
      },
      {
        question: 'What are the shipping costs?',
        answer: 'Shipping costs vary based on package weight and delivery speed. Costs are calculated at checkout.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we focus on shipping from Dubai to Rwanda, with plans to expand to other regions.'
      }
    ],
    payments: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit cards, debit cards, mobile money, and bank transfers. All payments are processed securely.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Yes, we use industry-standard SSL encryption to protect your payment information and never store sensitive data.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'We offer installment payment options for select products. Check the product page for available payment plans.'
      }
    ],
    technical: [
      {
        question: 'The website is not loading properly',
        answer: 'Try clearing your browser cache and cookies, or try accessing the site from a different browser. If the issue persists, contact our technical support.'
      },
      {
        question: 'I cannot complete my purchase',
        answer: 'Ensure your payment information is correct and your card is not expired. If issues persist, contact our support team.'
      },
      {
        question: 'How do I contact technical support?',
        answer: 'You can contact our technical support team through the contact form, email, or phone number provided on our contact page.'
      }
    ]
  };

  const filteredFaqs = faqs[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Help & Support</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Search Section */}
        <section className="s_help_search o_cc o_cc1 pt32 pb32" data-vxml="001" data-vcss="001" data-snippet="s_help_search">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h3>How can we help you?</h3>
                <p className="lead">Search our knowledge base or browse categories to find answers to your questions.</p>
                <form onSubmit={handleSearch} className="mt-4">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Search for help articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="s_help_categories o_cc o_cc2 pt32 pb32" data-vxml="001" data-vcss="001" data-snippet="s_help_categories">
          <div className="container">
            <div className="row">
              {categories.map((category) => (
                <div key={category.id} className="col-lg-2 col-md-4 col-6 pt16 pb16">
                  <div 
                    className={`s_help_category text-center ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="s_help_category_icon">
                      <i className={`fa ${category.icon} fa-2x`}></i>
                    </div>
                    <h6>{category.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="s_help_faq o_cc o_cc1 pt32 pb64" data-vxml="001" data-vcss="001" data-snippet="s_help_faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h3 className="text-center mb-5">Frequently Asked Questions</h3>
                
                <div className="accordion" id="faqAccordion">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="accordion-item">
                      <h2 className="accordion-header">
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#faq-${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`faq-${index}`} 
                        className="accordion-collapse collapse" 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-5">
                    <h4>No results found</h4>
                    <p className="text-muted">Try adjusting your search terms or browse all categories.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="s_help_contact o_cc o_cc2 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_help_contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h3>Still need help?</h3>
                <p className="lead">Our support team is here to help you with any questions or issues.</p>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <div className="s_help_contact_method">
                      <i className="fa fa-envelope fa-2x text-primary mb-3"></i>
                      <h5>Email Support</h5>
                      <p>support@kidu.com</p>
                      <p className="small text-muted">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="s_help_contact_method">
                      <i className="fa fa-phone fa-2x text-primary mb-3"></i>
                      <h5>Phone Support</h5>
                      <p>+971 4 123 4567</p>
                      <p className="small text-muted">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="s_help_contact_method">
                      <i className="fa fa-comments fa-2x text-primary mb-3"></i>
                      <h5>Live Chat</h5>
                      <p>Available 24/7</p>
                      <p className="small text-muted">Instant support</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <Link to="/contact" className="btn btn-primary btn-lg">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Help; 