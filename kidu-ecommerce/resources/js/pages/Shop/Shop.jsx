import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 'RF 25,000',
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'USB-C Fast Charging Cable',
      price: 'RF 8,500',
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Portable Power Bank',
      price: 'RF 35,000',
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg',
      category: 'Electronics'
    },
    {
      id: 4,
      name: 'Wireless Phone Charger',
      price: 'RF 18,000',
      image: '/src/assets/images/website.s_company_team_image_1.jpg',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Smart Watch',
      price: 'RF 45,000',
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg',
      category: 'Electronics'
    },
    {
      id: 6,
      name: 'Laptop Stand',
      price: 'RF 12,000',
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg',
      category: 'Electronics'
    },
    {
      id: 7,
      name: 'Mechanical Keyboard',
      price: 'RF 28,000',
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg',
      category: 'Electronics'
    },
    {
      id: 8,
      name: 'Gaming Mouse',
      price: 'RF 15,000',
      image: '/src/assets/images/website.s_company_team_image_1.jpg',
      category: 'Electronics'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    // Handle sorting functionality
    console.log('Sorting by:', sortType);
  };

  return (
    <div id="wrap" className="js_sale o_wsale_products_page">
      <div className="oe_structure oe_empty oe_structure_not_nearest" id="oe_structure_website_sale_products_1"></div>
      <div id="o_wsale_container" className="oe_website_sale o_wsale_page_contained container o_wsale_layout_catalog o_wsale_has_filmstrip o_wsale_has_sidebar o_wsale_context_thumb_cover" style={{ "--o-wsale-products-grid-gap": "16px" }} data-ppg="20" data-ppr="4" data-default-sort="website_sequence asc">
        <div className="row o_wsale_products_main_row flex-nowrap">
          
          {/* Sidebar Filters */}
          <aside id="products_grid_before" className="d-none d-lg-block position-sticky align-self-start col clearfix">
            <div className="o_wsale_products_grid_before_rail vh-100 ms-n2 pt-2 px-lg-2 pb-lg-5 ps-2 overflow-y-scroll">
              <div className="products_attributes_filters d-empty-none"></div>
              <div id="o_wsale_price_range_option" className="position-relative accordion accordion-flush opacity-75 pe-none user-select-none">
                <div className="accordion-item">
                  <h6 className="accordion-header">
                    <button className="accordion-button px-0 bg-transparent shadow-none" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#o_wsale_price_range_option_inner" aria-controls="o_wsale_price_range_option_inner">
                      <b>Price Range</b>
                    </button>
                  </h6>
                  <div id="o_wsale_price_range_option_inner" className="accordion-collapse collapse show">
                    <input type="range" multiple="multiple" className="form-range range-with-input" data-currency="RF" data-currency-position="after" data-url="/shop" step="1.0" min="0.000000" max="0.000000" value="0.000000,0.000000"/>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div id="products_grid" className="col">
            <header id="o_wsale_products_header" className="d-flex flex-column gap-2 py-3">
              <h1 className="h4-fs">
                All products
              </h1>

              <div className="products_header btn-toolbar flex-nowrap align-items-center justify-content-between gap-1 gap-lg-2 gap-xl-3">
                
                {/* Search Form */}
                <div className="o_wsale_products_header_search_form_container product.pricelist() col-xl-5 me-auto">
                  <form method="get" className="o_searchbar_form s_searchbar_input o_wsale_products_searchbar_form me-auto flex-grow-1" action="#" data-snippet="s_searchbar_input" onSubmit={handleSearch}>
                    <div role="search" className="input-group">
                      <input 
                        type="search" 
                        name="search" 
                        className="search-query form-control oe_search_box border-0 text-bg-light border-0 bg-light" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        data-search-type="products" 
                        data-limit="5" 
                        data-display-image="true" 
                        data-display-description="true" 
                        data-display-extra-link="true" 
                        data-display-detail="true" 
                        data-order-by="name asc"
                      />
                      <button type="submit" aria-label="Search" title="Search" className="btn oe_search_button btn btn-light">
                        <i className="oi oi-search"></i>
                      </button>
                    </div>
                    <input name="order" type="hidden" className="o_search_order_by" value="name asc"/>
                  </form>
                </div>

                {/* Sort Dropdown */}
                <div className="o_sortby_dropdown dropdown dropdown_sorty_by">
                  <a role="button" href="#" data-bs-toggle="dropdown" className="dropdown-toggle btn px-2">
                    <span className="d-md-none">Sort By</span>
                    <small className="d-none d-md-inline opacity-75">Sort By:</small>
                    <span className="d-none d-md-inline">
                      <span>{sortBy === 'featured' ? 'Featured' : sortBy === 'newest' ? 'Newest Arrivals' : sortBy === 'name' ? 'Name (A-Z)' : sortBy === 'price-low' ? 'Price - Low to High' : 'Price - High to Low'}</span>
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end" role="menu">
                    <a role="menuitem" rel="noindex,nofollow" href="#" className={`dropdown-item ${sortBy === 'featured' ? 'active' : ''}`} onClick={() => handleSortChange('featured')}>
                      <span>Featured</span>
                    </a>
                    <a role="menuitem" rel="noindex,nofollow" href="#" className={`dropdown-item ${sortBy === 'newest' ? 'active' : ''}`} onClick={() => handleSortChange('newest')}>
                      <span>Newest Arrivals</span>
                    </a>
                    <a role="menuitem" rel="noindex,nofollow" href="#" className={`dropdown-item ${sortBy === 'name' ? 'active' : ''}`} onClick={() => handleSortChange('name')}>
                      <span>Name (A-Z)</span>
                    </a>
                    <a role="menuitem" rel="noindex,nofollow" href="#" className={`dropdown-item ${sortBy === 'price-low' ? 'active' : ''}`} onClick={() => handleSortChange('price-low')}>
                      <span>Price - Low to High</span>
                    </a>
                    <a role="menuitem" rel="noindex,nofollow" href="#" className={`dropdown-item ${sortBy === 'price-high' ? 'active' : ''}`} onClick={() => handleSortChange('price-high')}>
                      <span>Price - High to Low</span>
                    </a>
                  </div>
                </div>

                {/* Mobile Filters Button */}
                <button title="Filters" data-bs-toggle="offcanvas" data-bs-target="#o_wsale_offcanvas" className="btn btn-light position-relative d-lg-none text-nowrap">
                  <i className="oi oi-settings-adjust" role="img"></i>
                  <small className="ms-1 product.pricelist()">Filters</small>
                </button>
              </div>
            </header>

            {/* Products Grid */}
            <div className="o_wsale_products_grid_table_wrapper">
              <div className="o_wsale_products_grid_table row" data-oe-model="product.template" data-oe-id="1" data-oe-field="name" data-oe-type="char" data-oe-expression="product.name">
                
                {products.map((product) => (
                  <div key={product.id} className="o_wsale_products_grid_table_wrapper o_wsale_products_grid_table_wrapper_hover col-6 col-lg-3" data-oe-model="product.template" data-oe-id={product.id} data-oe-field="name" data-oe-type="char" data-oe-expression="product.name">
                    <div className="o_wsale_products_grid_table_wrapper o_wsale_products_grid_table_wrapper_hover">
                      <div className="card o_wsale_products_grid_item o_wsale_products_grid_item_hover js_product" data-oe-model="product.template" data-oe-id={product.id} data-oe-field="name" data-oe-type="char" data-oe-expression="product.name">
                        <div className="o_wsale_products_grid_item_img">
                          <Link to={`/shop/product-${product.id}`} className="d-block o_wsale_products_grid_item_img_wrapper">
                            <img src={product.image} className="img img-fluid" alt={product.name} loading="lazy"/>
                          </Link>
                        </div>
                        <div className="card-body o_wsale_products_grid_item_info">
                          <h6 className="o_wsale_products_grid_item_title">
                            <Link to={`/shop/product-${product.id}`}>{product.name}</Link>
                          </h6>
                          <div className="o_wsale_products_grid_item_price">
                            <span className="oe_currency_value">{product.price}</span>
                          </div>
                          <div className="o_wsale_products_grid_item_buttons">
                            <Link to={`/shop/product-${product.id}`} className="btn btn-primary btn-sm">View Details</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Pagination */}
            <div className="o_wsale_products_grid_pager d-flex justify-content-center mt-4">
              <nav aria-label="Product pagination">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop; 