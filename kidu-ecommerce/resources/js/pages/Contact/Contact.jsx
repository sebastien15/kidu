import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fa-map-marker',
      title: 'Address',
      content: '123 Business Street, Dubai, UAE'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      content: '+971 4 123 4567'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      content: 'info@kidu.com'
    },
    {
      icon: 'fa-clock-o',
      title: 'Working Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM'
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
            <h1>Contact Us</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Contact Information Section */}
        <section className="s_features o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_features">
          <div className="container">
            <div className="row">
              {contactInfo.map((info, index) => (
                <div key={index} className="col-lg-3 col-md-6 pt16 pb16" data-name="Feature">
                  <div className="s_features_item text-center">
                    <div className="s_features_item_icon">
                      <i className={`fa ${info.icon} fa-2x text-primary`} role="img"></i>
                    </div>
                    <h5>{info.title}</h5>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="s_contact_form o_cc o_cc2 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="text-center mb-5">
                  <h2>Get in Touch</h2>
                  <p className="lead">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
                
                <div className="card">
                  <div className="card-body p-5">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="name" className="form-label">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="s_map o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_map">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="s_map_container">
                  <div className="s_map_iframe">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1781324407607!2d55.2704!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTMuNCJF!5e0!3m2!1sen!2sae!4v1234567890"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kidu Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 