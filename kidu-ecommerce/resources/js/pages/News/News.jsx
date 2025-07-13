import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'updates', name: 'Updates' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'New Electronics Collection Launched',
      excerpt: 'We are excited to announce the launch of our latest electronics collection featuring cutting-edge technology and innovative designs.',
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg',
      category: 'technology',
      date: '2024-01-15',
      author: 'Jane DOE',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Cross-Border E-commerce Trends 2024',
      excerpt: 'Discover the latest trends in cross-border e-commerce and how they are shaping the future of international trade.',
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg',
      category: 'ecommerce',
      date: '2024-01-12',
      author: 'John DOE',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'Kidu Platform Updates and Improvements',
      excerpt: 'Learn about the latest updates and improvements to the Kidu platform, designed to enhance your shopping experience.',
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg',
      category: 'updates',
      date: '2024-01-10',
      author: 'Iris DOE',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Business Expansion to Rwanda',
      excerpt: 'We are proud to announce our expansion into the Rwandan market, bringing quality electronics to more customers.',
      image: '/src/assets/images/website.s_company_team_image_1.jpg',
      category: 'business',
      date: '2024-01-08',
      author: 'Jane DOE',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Customer Success Stories',
      excerpt: 'Read inspiring stories from our customers who have transformed their businesses with our electronics solutions.',
      image: '/src/assets/images/website.s_company_team_image_2.jpg',
      category: 'business',
      date: '2024-01-05',
      author: 'John DOE',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Sustainable Electronics Initiative',
      excerpt: 'Learn about our commitment to sustainability and how we are working towards a greener future in electronics.',
      image: '/src/assets/images/website.s_company_team_image_3.jpg',
      category: 'technology',
      date: '2024-01-03',
      author: 'Iris DOE',
      readTime: '4 min read'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1>News & Updates</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Search and Filter Section */}
        <section className="s_news_filter o_cc o_cc1 pt32 pb32" data-vxml="001" data-vcss="001" data-snippet="s_news_filter">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <form onSubmit={handleSearch} className="d-flex gap-3">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="col-lg-4">
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
        </section>

        {/* News Grid Section */}
        <section className="s_news_grid o_cc o_cc2 pt32 pb64" data-vxml="001" data-vcss="001" data-snippet="s_news_grid">
          <div className="container">
            <div className="row">
              {filteredArticles.map((article) => (
                <div key={article.id} className="col-lg-4 col-md-6 pt16 pb16" data-name="News Article">
                  <article className="s_news_article card h-100">
                    <div className="s_news_article_img">
                      <Link to={`/news/article-${article.id}`}>
                        <img src={article.image} className="card-img-top" alt={article.title} loading="lazy"/>
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="s_news_article_meta mb-2">
                        <span className="badge bg-primary me-2">{article.category}</span>
                        <small className="text-muted">{article.date}</small>
                      </div>
                      <h5 className="card-title">
                        <Link to={`/news/article-${article.id}`}>{article.title}</Link>
                      </h5>
                      <p className="card-text">{article.excerpt}</p>
                      <div className="s_news_article_footer">
                        <small className="text-muted">
                          By {article.author} • {article.readTime}
                        </small>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <Link to={`/news/article-${article.id}`} className="btn btn-outline-primary btn-sm">
                        Read More
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredArticles.length > 0 && (
              <div className="s_news_pagination d-flex justify-content-center mt-5">
                <nav aria-label="News pagination">
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

            {filteredArticles.length === 0 && (
              <div className="text-center py-5">
                <h4>No articles found</h4>
                <p className="text-muted">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News; 