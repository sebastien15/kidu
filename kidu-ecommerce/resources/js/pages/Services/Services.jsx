import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Robust API',
      description: 'Our API enables developers to build solutions 4x faster. Discover why and how.',
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg'
    },
    {
      id: 2,
      title: 'Mobile-friendly experience',
      description: 'Experience the only CRM with a complete mobile-friendly interface. Curious about how it works? Try it out!',
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg'
    },
    {
      id: 3,
      title: 'Dedicated Support Team',
      description: 'Our support team is dedicated to providing quick assistance, just like voice assistants.',
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg'
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'Our customers love the quality and variety of products we offer. Their satisfaction is our top priority!',
      author: 'Jane DOE',
      position: 'CEO of Electronics Wholesale',
      avatar: '/src/assets/images/website.s_quotes_carousel_demo_image_3.jpg',
      background: '/src/assets/images/website-3.jpg'
    },
    {
      id: 2,
      quote: 'Our customers love the quality and variety of products we offer. Their satisfaction is our top priority!',
      author: 'John DOE',
      position: 'CCO of Electronics Wholesale',
      avatar: '/src/assets/images/website.s_quotes_carousel_demo_image_4.jpg',
      background: '/src/assets/images/website-4.jpg'
    },
    {
      id: 3,
      quote: 'Our customers love the quality and variety of products we offer. Their satisfaction is our top priority!',
      author: 'Iris DOE',
      position: 'Manager of Electronics Wholesale',
      avatar: '/src/assets/images/website.s_quotes_carousel_demo_image_5.jpg',
      background: '/src/assets/images/website-5.jpg'
    }
  ];

  const partners = [
    '/src/assets/images/s_reference_demo_image_1.png',
    '/src/assets/images/s_reference_demo_image_2.png',
    '/src/assets/images/s_reference_demo_image_3.png',
    '/src/assets/images/s_reference_demo_image_4.png',
    '/src/assets/images/s_reference_demo_image_5.png',
    '/src/assets/images/s_reference_default_image_6.png'
  ];

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Services</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Services Cards Section */}
        <section className="s_three_columns o_cc o_cc2 pt32 pb32 o_colored_level" data-vxml="001" data-vcss="001" data-snippet="s_three_columns">
          <div className="container">
            <div className="row d-flex align-items-stretch">
              {services.map((service) => (
                <div key={service.id} data-name="Card" className="col-lg-4 pt16 pb16">
                  <div className="s_card o_card_img_top card h-100 o_cc o_cc1 my-0" data-vxml="001" data-snippet="s_card" data-name="Card">
                    <figure className="o_card_img_wrapper ratio ratio-16x9 mb-0">
                      <img className="o_card_img card-img-top" src={service.image} alt={service.title} loading="lazy"/>
                    </figure>
                    <div className="card-body">
                      <h5>{service.title}</h5>
                      <div className="s_hr pt8 pb16" data-snippet="s_hr" data-name="Separator">
                        <hr className="w-100 mx-auto" style={{ borderTopColor: "var(--o-color-3) !important" }}/>
                      </div>
                      <p className="card-text">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        <section className="s_quotes_carousel_wrapper" data-vxml="001" data-vcss="002" data-preview-interaction-enabled="true" data-snippet="s_quotes_carousel">
          <div className="s_quotes_carousel s_carousel_boxed carousel carousel-dark slide o_cc o_cc2" data-bs-ride="true" data-bs-interval="10000" id="myQuoteCarousel497640">
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''} oe_img_bg o_bg_img_center pt80 pb80`} style={{ backgroundImage: `url('${testimonial.background}')`, backgroundPosition: "50% 50%" }} data-name="Slide">
                  <blockquote data-name="Blockquote" data-snippet="s_blockquote" className="s_blockquote s_blockquote_with_icon o_cc o_cc1 o_animable position-relative d-flex flex-column gap-4 w-50 mx-auto p-5 fst-normal" data-vcss="001">
                    <div className="s_blockquote_line_elt position-absolute top-0 start-0 bottom-0 bg-o-color-1"></div>
                    <div className="s_blockquote_wrap_icon position-absolute top-0 start-50 translate-middle w-100">
                      <i className="s_blockquote_icon fa fa-quote-right d-block mx-auto rounded bg-o-color-1" role="img"></i>
                    </div>
                    <p className="s_blockquote_quote my-auto h4-fs" style={{ textAlign: "center" }}>"{testimonial.quote}"</p>
                    <div className="s_blockquote_infos d-flex gap-2 flex-column align-items-center w-100 text-center">
                      <img src={testimonial.avatar} className="s_blockquote_avatar img rounded-circle" alt={testimonial.author} loading="lazy"/>
                      <div className="s_blockquote_author">
                        <span className="o_small"><strong>{testimonial.author}</strong><br/> <span className="text-muted">{testimonial.position}</span></span>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
            
            <button className="carousel-control-prev o_not_editable" contentEditable="false" data-bs-slide="prev" aria-label="Previous" title="Previous" data-bs-target="#myQuoteCarousel497640">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next o_not_editable" data-bs-slide="next" aria-label="Next" title="Next" data-bs-target="#myQuoteCarousel497640">
              <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span>
            </button>
            
            <div className="carousel-indicators s_carousel_indicators_dots o_not_editable">
              {testimonials.map((_, index) => (
                <button key={index} type="button" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label="Carousel indicator" data-bs-target="#myQuoteCarousel497640"></button>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="s_references o_cc o_cc1 pt96 pb96" data-oe-shape-data='{"shape":"web_editor/Bold/13","colors":{"c5":"o-color-3"},"flip":["x","y"],"showOnMobile":false,"shapeAnimationSpeed":"0"}' data-snippet="s_references">
          <div className="o_we_shape o_web_editor_Bold_13 o_footer_extra_shape_mapping" style={{ backgroundImage: "url('/web_editor/shape/web_editor/Bold/136049.html?c5=o-color-3&flip=xy')", backgroundPosition: "50% 0%" }}></div>
          <div className="container">
            <h2 style={{ textAlign: "center" }}>Partners and references</h2>
            <p className="lead" style={{ textAlign: "center" }}>Use this section to boost your company's credibility in the electronics accessories market.</p>
            <p style={{ textAlign: "center" }}>
              <Link className="o_translate_inline" to="#">See our product showcases <i className="fa fa-long-arrow-right ms-2"></i></Link>
            </p>
            <p><br/></p>
            <div className="row">
              {partners.map((partner, index) => (
                <div key={index} className="col-6 col-lg-2 pt16 pb16">
                  <img src={partner} className="img img-fluid mx-auto" alt={`Partner ${index + 1}`} loading="lazy"/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services; 