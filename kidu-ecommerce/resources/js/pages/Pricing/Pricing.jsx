import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: 'Beginner',
      price: '$ 15.00',
      period: '/ month',
      description: 'Ideal for newcomers. Essential features to kickstart your electronics sales and marketing. Perfect for small teams.',
      buttonText: 'Start Now',
      buttonVariant: 'outline-primary',
      features: [
        { text: 'Sales & marketing for 2', included: true },
        { text: 'Account management', included: true },
        { text: 'No customization', included: false },
        { text: 'No support', included: false }
      ]
    },
    {
      id: 2,
      title: 'Reliable and Affordable',
      price: '$ 25.00',
      period: '/ month',
      description: 'Comprehensive solutions for retailers. Streamline your inventory and sales processes with our premium accessories.',
      buttonText: 'Start Now',
      buttonVariant: 'primary',
      features: [
        { text: 'Complete solutions for any retailer', included: true },
        { text: 'Access all modules', included: true },
        { text: 'Limited customization', included: true },
        { text: 'Email support', included: true }
      ]
    },
    {
      id: 3,
      title: 'Expert',
      price: '$ 45.00',
      period: '/ month',
      description: 'Advanced solutions for retailers. Innovative features and top-tier support for maximum sales performance.',
      buttonText: 'Contact Us',
      buttonVariant: 'outline-primary',
      features: [
        { text: 'Unlimited product support', included: true },
        { text: 'All modules & features', included: true },
        { text: 'Unlimited customization options', included: true },
        { text: '24/7 toll-free support', included: true }
      ]
    }
  ];

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Pricing</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Pricing Cards Section */}
        <section className="s_comparisons o_cc o_cc2 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_comparisons">
          <div className="container">
            <div className="mb-4">
              <h3>Competitive pricing</h3>
              <p className="lead">Listing your product pricing helps potential customers quickly determine if it fits their budget and needs in electronics accessories.</p>
            </div>
            <div className="row gap-4 gap-lg-0">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="col-lg-4" data-name="Plan">
                  <div className="s_card card o_cc o_cc1 h-100 my-0" data-vxml="001" data-snippet="s_card" data-name="Card">
                    <div className="card-body">
                      <h5 className="card-title">{plan.title}</h5>
                      <div className="my-2">
                        <strong className="h2-fs">{plan.price}</strong> <small className="text-muted">{plan.period}</small>
                      </div>
                      <p className="card-text small">{plan.description}</p>
                      <Link to="/contact" className={`btn btn-${plan.buttonVariant} w-100 mb-3`}>
                        {plan.buttonText}
                      </Link>
                      <ul className="list-group list-group-flush text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="list-group-item px-0 bg-transparent text-reset">
                            <i className={`fa fa-${feature.included ? 'check text-success' : 'times text-danger'}`} role="img"></i> {feature.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <small className="text-center">Easy and Quick Setup with Money-Back Guarantee</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing; 