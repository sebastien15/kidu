import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="wrap" className="oe_structure">
      {/* Hero Section */}
      <section className="s_cover parallax o_cc o_cc5 pt160 pb192" data-scroll-background-ratio="0" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }} data-oe-shape-data='{"shape":"web_editor/Bold/13","colors":{"c5": "o-color-3"},"flip":[]}' data-snippet="s_cover">
        <div className="o_we_bg_filter bg-black-50"></div>
        <div className="o_we_shape o_web_editor_Bold_13 o_header_extra_shape_mapping" style={{ backgroundImage: "url('/web_editor/shape/web_editor/Bold/134001.html?c5=o-color-3')" }}></div>
        <div className="container s_allow_columns">
          <div className="row">
            <div className="col col-lg-7 pb128">
              <h1>
                Making a difference.
              </h1>
              <p className="lead">
                Our mission is to provide clients with exceptional service.<br/>Comprehensive product information, a supportive community,<br/>and round-the-clock assistance make partnering with us enjoyable.
              </p>
              <p>
                <Link className="btn btn-primary btn-lg o_translate_inline" to="/contact">Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Text Image Section */}
      <section className="s_text_image pb96 pt0" data-oe-shape-data='{"shape":"web_editor/Bold/15","colors":{"c5": "o-color-3"},"flip":[],"showOnMobile":false,"shapeAnimationSpeed":"0"}' data-snippet="s_text_image">
        <div className="o_we_shape o_web_editor_Bold_15" style={{ backgroundImage: "url('/web_editor/shape/web_editor/Bold/154001.html?c5=o-color-3')" }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 pt16 pb16 offset-lg-1">
              <h2>Create unique experiences to drive engagement</h2>
              <div className="s_hr pt16 pb0" data-snippet="s_hr" data-name="Separator">
                <hr className="w-100 mx-auto" style={{ borderTopColor: "rgba(0, 0, 0, 0) !important" }}/>
              </div>
              <p>
                Customers are seeking high-quality electronics accessories.<br/>We enable our teams to deliver the most relevant products.
              </p>
              <p>Our top priority is customer satisfaction.</p>
              <p><Link to="#" className="btn btn-secondary o_translate_inline btn-lg">Learn more</Link></p>
            </div>
            <div className="offset-lg-1 pt16 pb16 col-lg-4">
              <img src="/web_editor/image_shape/website.s_image_text_device_perspective/web_editor/devices/iphone_3d_portrait_02.svg" className="img img-fluid mx-auto rounded" alt="" data-shape="web_editor/devices/iphone_3d_portrait_02" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Grid Section */}
      <section className="s_numbers_grid o_cc o_cc5 pt96 pb96" data-oe-shape-data='{"shape":"web_editor/Rainy/01_001","flip":[]}' data-snippet="s_numbers_grid">
        <div className="o_we_shape o_web_editor_Rainy_01_001"></div>
        <div className="container">
          <div className="row o_grid_mode" data-row-count="6" style={{ gap: "8px" }}>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "1 / 1 / 4 / 4", zIndex: 1, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Revenue Growth<br/> <span className="h1-fs">60%</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "1 / 4 / 4 / 7", zIndex: 2, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Projects deployed<br/> <span className="h1-fs">+300</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "1 / 7 / 4 / 10", zIndex: 3, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Expected revenue<br/> <span className="h1-fs">$75M</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "1 / 10 / 4 / 13", zIndex: 4, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Online Members<br/> <span className="h1-fs">300,000</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "4 / 1 / 7 / 4", zIndex: 5, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Customer Retention<br/> <span className="h1-fs">90%</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "4 / 4 / 7 / 7", zIndex: 6, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Inventory turnover<br/> <span className="h1-fs">6x</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "4 / 7 / 7 / 10", zIndex: 7, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Website visitors<br/> <span className="h1-fs">150,000</span>
              </p>
            </div>
            <div className="o_grid_item g-col-lg-3 g-height-3 col-lg-3 col-6 o_cc border rounded o_cc5 bg-black-50" data-name="Number Cell" style={{ gridArea: "4 / 10 / 7 / 13", zIndex: 8, "--grid-item-padding-y": "16px", "--grid-item-padding-x": "16px" }}>
              <p>
                Transactions<br/> <span className="h1-fs">60,000</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Image Section */}
      <section className="s_mockup_image o_cc o_cc1 pt96 pb96" data-oe-shape-data='{"shape":"web_editor/Bold/13","colors":{"c5":"o-color-3"},"flip":[],"showOnMobile":false,"shapeAnimationSpeed":"0"}' data-snippet="s_mockup_image">
        <div className="o_we_shape o_web_editor_Bold_13" style={{ backgroundImage: "url('/web_editor/shape/web_editor/Bold/134001.html?c5=o-color-3')" }}></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="pt16 pb16 col-lg-5">
              <h2>The Technology Behind Our Accessories</h2>
              <p>Write one or two paragraphs describing your product or services. To be successful your content needs to be useful to your readers.</p>
              <p>Start with the customer – find out what they want and give it to them.</p>
              <p><Link to="#" className="btn btn-primary o_translate_inline">Learn more</Link></p>
            </div>
            <div className="pt16 pb16 offset-lg-1 col-lg-6">
              <img src="/web_editor/image_shape/website.s_mockup_image_default_image/web_editor/devices/macbook_front.svg" className="img-fluid ms-auto" data-shape="web_editor/devices/macbook_front" data-shape-colors=";;#F3F2F2;;" data-file-name="s_text_image.jpg" data-original-mimetype="image/jpeg" alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="s_comparisons o_cc o_cc2 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_comparisons">
        <div className="container">
          <div className="mb-4">
            <h3>Competitive pricing</h3>
            <p className="lead">Listing your product pricing helps potential customers quickly determine if it fits their budget and needs in electronics accessories.</p>
          </div>
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-4" data-name="Plan">
              <div className="s_card card o_cc o_cc1 h-100 my-0" data-vxml="001" data-snippet="s_card" data-name="Card">
                <div className="card-body">
                  <h5 className="card-title">Beginner</h5>
                  <div className="my-2">
                    <strong className="h2-fs">$ 15.00</strong> <small className="text-muted">/ month</small>
                  </div>
                  <p className="card-text small">Ideal for newcomers. Essential features to kickstart your electronics sales and marketing. Perfect for small teams.</p>
                  <Link to="/contact" className="btn btn-outline-primary w-100 mb-3">Start Now</Link>
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Sales & marketing for 2</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Account management</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-times text-danger" role="img"></i> No customization</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-times text-danger" role="img"></i> No support</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <small className="text-center">Easy and Quick Setup with Money-Back Guarantee</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-name="Plan">
              <div className="s_card card o_cc o_cc1 h-100 my-0" data-vxml="001" data-snippet="s_card" data-name="Card">
                <div className="card-body">
                  <h5 className="card-title">Reliable and Affordable</h5>
                  <div className="my-2">
                    <strong className="h2-fs">$ 25.00</strong> <small className="text-muted">/ month</small>
                  </div>
                  <p className="card-text small">Comprehensive solutions for retailers. Streamline your inventory and sales processes with our premium accessories.</p>
                  <Link to="/contact" className="btn btn-primary w-100 mb-3">Start Now</Link>
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Complete solutions for any retailer</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Access all modules</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Limited customization</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Email support</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <small className="text-center">Easy and Quick Setup with Money-Back Guarantee</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4" data-name="Plan">
              <div className="s_card card o_cc o_cc1 h-100 my-0" data-vxml="001" data-snippet="s_card" data-name="Card">
                <div className="card-body">
                  <h5 className="card-title">Expert</h5>
                  <div className="my-2">
                    <strong className="h2-fs">$ 45.00</strong> <small className="text-muted">/ month</small>
                  </div>
                  <p className="card-text small">Advanced solutions for retailers. Innovative features and top-tier support for maximum sales performance.</p>
                  <Link to="/contact" className="btn btn-outline-primary w-100 mb-3">Contact Us</Link>
                  <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Unlimited product support</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> All modules & features</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Unlimited customization options</li>
                    <li className="list-group-item px-0 bg-transparent text-reset"><i className="fa fa-check text-success" role="img"></i> Priority support</li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <small className="text-center">Easy and Quick Setup with Money-Back Guarantee</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 