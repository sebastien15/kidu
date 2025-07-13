import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'startup', name: 'Startups' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'retail', name: 'Retail' },
    { id: 'technology', name: 'Technology' }
  ];

  const successStories = [
    {
      id: 1,
      title: 'TechStart Rwanda: From Local to Global',
      excerpt: 'How a small Rwandan startup expanded their electronics business across borders using Kidu platform.',
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg',
      category: 'startup',
      company: 'TechStart Rwanda',
      industry: 'Electronics Retail',
      results: '300% revenue increase',
      author: 'Jane DOE',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Dubai Electronics Hub: Scaling Operations',
      excerpt: 'A Dubai-based electronics wholesaler transformed their business with our cross-border solutions.',
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg',
      category: 'enterprise',
      company: 'Dubai Electronics Hub',
      industry: 'Electronics Wholesale',
      results: '500% customer growth',
      author: 'John DOE',
      date: '2024-01-12'
    },
    {
      id: 3,
      title: 'Rwanda Mobile Solutions: Digital Transformation',
      excerpt: 'How a mobile accessories retailer in Rwanda digitized their entire operation with Kidu.',
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg',
      category: 'technology',
      company: 'Rwanda Mobile Solutions',
      industry: 'Mobile Accessories',
      results: '200% efficiency improvement',
      author: 'Iris DOE',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'East Africa Electronics: Market Expansion',
      excerpt: 'An East African electronics retailer expanded their market reach using our platform.',
      image: '/src/assets/images/website.s_company_team_image_1.jpg',
      category: 'retail',
      company: 'East Africa Electronics',
      industry: 'Electronics Retail',
      results: '400% market expansion',
      author: 'Jane DOE',
      date: '2024-01-08'
    },
    {
      id: 5,
      title: 'Dubai Tech Innovations: Innovation Hub',
      excerpt: 'A Dubai-based tech company leveraged our platform to create innovative electronics solutions.',
      image: '/src/assets/images/website.s_company_team_image_2.jpg',
      category: 'technology',
      company: 'Dubai Tech Innovations',
      industry: 'Technology Solutions',
      results: '250% innovation output',
      author: 'John DOE',
      date: '2024-01-05'
    },
    {
      id: 6,
      title: 'Rwanda Digital Store: E-commerce Success',
      excerpt: 'A Rwandan digital store achieved remarkable success through our e-commerce platform.',
      image: '/src/assets/images/website.s_company_team_image_3.jpg',
      category: 'retail',
      company: 'Rwanda Digital Store',
      industry: 'Digital Retail',
      results: '600% online sales growth',
      author: 'Iris DOE',
      date: '2024-01-03'
    }
  ];

  const filteredStories = successStories.filter(story => 
    selectedCategory === 'all' || story.category === selectedCategory
  );

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Success Stories</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Filter Section */}
        <section className="s_success_filter o_cc o_cc1 pt32 pb32" data-vxml="001" data-vcss="001" data-snippet="s_success_filter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <h3>Customer Success Stories</h3>
                <p className="lead">Discover how our customers have transformed their businesses with Kidu platform.</p>
                <div className="mt-4">
                  <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="s_success_grid o_cc o_cc2 pt32 pb64" data-vxml="001" data-vcss="001" data-snippet="s_success_grid">
          <div className="container">
            <div className="row">
              {filteredStories.map((story) => (
                <div key={story.id} className="col-lg-6 pt16 pb16" data-name="Success Story">
                  <article className="s_success_story card h-100">
                    <div className="s_success_story_img">
                      <Link to={`/success-stories/story-${story.id}`}>
                        <img src={story.image} className="card-img-top" alt={story.title} loading="lazy"/>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="s_success_story_meta mb-3">
                        <span className="badge bg-success me-2">{story.category}</span>
                        <small className="text-muted">{story.date}</small>
                      </div>
                      <h4 className="card-title">
                        <Link to={`/success-stories/story-${story.id}`}>{story.title}</Link>
                      </h4>
                      <p className="card-text">{story.excerpt}</p>
                      
                      <div className="s_success_story_details">
                        <div className="row">
                          <div className="col-md-6">
                            <strong>Company:</strong> {story.company}
                          </div>
                          <div className="col-md-6">
                            <strong>Industry:</strong> {story.industry}
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-12">
                            <strong>Results:</strong> {story.results}
                          </div>
                        </div>
                      </div>
                      
                      <div className="s_success_story_footer mt-3">
                        <small className="text-muted">
                          By {story.author}
                        </small>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <Link to={`/success-stories/story-${story.id}`} className="btn btn-outline-success btn-sm">
                        Read Full Story
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredStories.length > 0 && (
              <div className="s_success_pagination d-flex justify-content-center mt-5">
                <nav aria-label="Success stories pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}

            {filteredStories.length === 0 && (
              <div className="text-center py-5">
                <h4>No success stories found</h4>
                <p className="text-muted">Try selecting a different category or browse all stories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="s_cta o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_cta">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2>Ready to Write Your Success Story?</h2>
                <p className="lead">Join thousands of businesses that have transformed their operations with Kidu platform.</p>
                <div className="mt-4">
                  <Link to="/contact" className="btn btn-primary btn-lg me-3">
                    Get Started
                  </Link>
                  <Link to="/services" className="btn btn-outline-primary btn-lg">
                    Learn More
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

export default SuccessStories; 