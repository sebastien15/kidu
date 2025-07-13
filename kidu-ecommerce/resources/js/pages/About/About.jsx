import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jane DOE',
      position: 'CEO of Electronics Wholesale',
      image: '/src/assets/images/website.s_company_team_image_1.jpg',
      description: 'Leading our company with over 10 years of experience in the electronics industry.'
    },
    {
      id: 2,
      name: 'John DOE',
      position: 'CCO of Electronics Wholesale',
      image: '/src/assets/images/website.s_company_team_image_2.jpg',
      description: 'Overseeing our customer operations and ensuring exceptional service delivery.'
    },
    {
      id: 3,
      name: 'Iris DOE',
      position: 'Manager of Electronics Wholesale',
      image: '/src/assets/images/website.s_company_team_image_3.jpg',
      description: 'Managing our day-to-day operations and team coordination.'
    }
  ];

  const statistics = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products Sold' },
    { number: '50+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>About Us</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Company Description Section */}
        <section className="s_text_image o_cc o_cc1 pt32 pb32" data-vxml="001" data-vcss="001" data-snippet="s_text_image">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 pt16 pb16">
                <div className="s_text_image_text">
                  <h2>Welcome to Kidu</h2>
                  <p className="lead">We are a leading electronics wholesale company dedicated to providing high-quality products and exceptional service to our customers.</p>
                  <p>Our mission is to connect Dubai-based merchants with customers in Rwanda, creating a seamless cross-border e-commerce experience. We specialize in electronics accessories and have built a reputation for reliability, quality, and customer satisfaction.</p>
                  <p>With years of experience in the industry, we understand the unique challenges of international trade and have developed solutions that make cross-border commerce simple and efficient.</p>
                  <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                </div>
              </div>
              <div className="col-lg-6 pt16 pb16">
                <div className="s_text_image_img">
                  <img src="/src/assets/images/website.s_three_columns_default_image_1.jpg" className="img img-fluid" alt="About Kidu" loading="lazy"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="s_numbers o_cc o_cc2 pt64 pb64 o_colored_level" data-vxml="001" data-vcss="001" data-snippet="s_numbers">
          <div className="container">
            <div className="row">
              {statistics.map((stat, index) => (
                <div key={index} className="col-lg-3 col-md-6 pt16 pb16" data-name="Number">
                  <div className="s_number text-center">
                    <div className="s_number_value h1-fs">{stat.number}</div>
                    <div className="s_number_label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="s_company_team o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_company_team">
          <div className="container">
            <div className="mb-4 text-center">
              <h2>Our Team</h2>
              <p className="lead">Meet the dedicated professionals behind our success</p>
            </div>
            <div className="row">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-lg-4 pt16 pb16" data-name="Team Member">
                  <div className="s_company_team_member text-center">
                    <div className="s_company_team_member_img">
                      <img src={member.image} className="img img-fluid rounded-circle" alt={member.name} loading="lazy"/>
                    </div>
                    <div className="s_company_team_member_info">
                      <h5>{member.name}</h5>
                      <p className="text-muted">{member.position}</p>
                      <p className="small">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="s_features o_cc o_cc2 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_features">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 pt16 pb16" data-name="Feature">
                <div className="s_features_item text-center">
                  <div className="s_features_item_icon">
                    <i className="fa fa-star fa-2x text-primary" role="img"></i>
                  </div>
                  <h5>Quality</h5>
                  <p>We maintain the highest standards of quality in all our products and services.</p>
                </div>
              </div>
              <div className="col-lg-4 pt16 pb16" data-name="Feature">
                <div className="s_features_item text-center">
                  <div className="s_features_item_icon">
                    <i className="fa fa-heart fa-2x text-primary" role="img"></i>
                  </div>
                  <h5>Customer Focus</h5>
                  <p>Our customers are at the heart of everything we do, ensuring their satisfaction.</p>
                </div>
              </div>
              <div className="col-lg-4 pt16 pb16" data-name="Feature">
                <div className="s_features_item text-center">
                  <div className="s_features_item_icon">
                    <i className="fa fa-globe fa-2x text-primary" role="img"></i>
                  </div>
                  <h5>Global Reach</h5>
                  <p>Connecting markets across borders with innovative e-commerce solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 