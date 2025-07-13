// Kidu E-commerce Platform - Header Component

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      id="top" 
      data-anchor="true" 
      data-name="Header" 
      className={`o_header_standard ${isSticky ? 'header-sticky' : 'header-normal'}`}
      style={{ position: 'sticky', top: 0, zIndex: 1000 }}
    >
      {/* Desktop Navigation */}
      <nav 
        data-name="Navbar" 
        aria-label="Main" 
        className={`navbar navbar-expand-lg navbar-light o_colored_level o_cc o_header_force_no_radius d-none d-lg-block p-0 shadow-sm transition-all duration-300 ${
          isSticky ? 'py-1' : 'py-0'
        }`}
      >
        <div id="o_main_nav" className="o_main_nav">
          <div 
            aria-label="Top" 
            className={`container d-flex align-items-center justify-content-between transition-all duration-300 ${
              isSticky ? 'py-2' : 'py-3'
            }`}
          >
            
            {/* Logo */}
            <Link data-name="Navbar Logo" to="/" className="navbar-brand logo me-4">
              <span role="img" aria-label="Logo of kidu" title="kidu">
                <img 
                  src="/images/website/1/logo/kidu004a-2.svg" 
                  className={`img img-fluid transition-all duration-300 ${
                    isSticky ? 'header-logo-sticky' : 'header-logo-normal'
                  }`} 
                  width={isSticky ? "75" : "95"} 
                  height={isSticky ? "32" : "40"} 
                  alt="kidu" 
                  loading="lazy"
                />
              </span>
            </Link>
            
            {/* Main Navigation */}
            <ul role="menu" id="top_menu" className="nav navbar-nav top_menu o_menu_loading pe-2">
              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  <span>Home</span>
                </Link>
              </li>

              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/shop" className={`nav-link ${isActive('/shop') ? 'active' : ''}`}>
                  <span>Shop</span>
                </Link>
              </li>

              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                  <span>Services</span>
                </Link>
              </li>

              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
                  <span>Pricing</span>
                </Link>
              </li>

              <li role="presentation" className="nav-item dropdown">
                <a href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="menuitem" className="dropdown-toggle nav-link">
                  <span>Company</span>
                </a>
                <ul role="menu" className="dropdown-menu">
                  <li role="presentation">
                    <Link role="menuitem" to="/news" className="dropdown-item">
                      <span>News</span>
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link role="menuitem" to="/success-stories" className="dropdown-item">
                      <span>Success Stories</span>
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link role="menuitem" to="/about" className="dropdown-item">
                      <span>About Us</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/help" className={`nav-link ${isActive('/help') ? 'active' : ''}`}>
                  <span>Help</span>
                </Link>
              </li>

              <li role="presentation" className="nav-item">
                <Link role="menuitem" to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>

            {/* Right Side Actions */}
            <ul className="o_header_sales_one_right_col navbar-nav align-items-center gap-1 flex-grow-1 justify-content-end">
              {/* Contact Us Button */}
              <li className="flex-grow-1">
                <div className="oe_structure oe_structure_solo d-flex align-items-center">
                  <section className="oe_unremovable oe_unmovable s_text_block" data-snippet="s_text_block" data-name="Text">
                    <div className="container">
                      <Link to="/contact" className="oe_unremovable btn btn-primary btn_cta">Contact Us</Link>
                    </div>
                  </section>
                </div>
              </li>

              {/* Search Button */}
              <li>
                <button 
                  type="button" 
                  title="Search" 
                  className="btn rounded-circle p-1 lh-1 o_navlink_background text-reset o_not_editable"
                >
                  <i className="oi oi-search fa-stack lh-lg"></i>
                </button>
              </li>

              {/* User Authentication */}
              {isAuthenticated ? (
                <li className="dropdown">
                  <button 
                    className="btn rounded-circle text-reset fw-bold o_navlink_background dropdown-toggle" 
                    type="button" 
                    onClick={toggleUserMenu}
                    aria-expanded={isUserMenuOpen}
                  >
                    {user?.name || 'User'}
                  </button>
                  {isUserMenuOpen && (
                    <ul className="dropdown-menu show">
                      <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                      <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  )}
                </li>
              ) : (
                <li className="o_no_autohide_item">
                  <Link to="/login" className="btn rounded-circle text-reset fw-bold o_navlink_background">Sign in</Link>
                </li>
              )}

              {/* Shopping Cart */}
              <li className="o_wsale_my_cart">
                <Link to="/cart" aria-label="eCommerce cart" className="btn position-relative rounded-circle p-1 text-reset o_navlink_background">
                  <div>
                    <i className="fa fa-shopping-cart fa-stack"></i>
                    <sup className="my_cart_quantity badge bg-primary position-absolute top-0 end-0 mt-n1 me-n1 rounded-pill d-none" data-order-id="">0</sup>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Bar - Hidden when sticky */}
          <div 
            aria-label="Bottom" 
            className={`o_header_sales_one_bot o_header_hide_on_scroll gap-3 py-2 transition-all duration-300 ${
              isSticky ? 'opacity-0 max-h-0 overflow-hidden py-0' : 'opacity-100 max-h-20'
            }`}
          >
            <ul className="container navbar-nav justify-content-between align-items-center">
              <li className="flex-basis-0 flex-grow-1 flex-shrink-0">
                <div data-name="Text" className="s_text_block d-flex flex-column flex-lg-row gap-1 gap-lg-4 align-items-lg-center">
                  <small className="d-flex align-items-center">
                    <i className="fa fa-1x fa-fw fa-usd fa-stack me-1"></i>
                    Low Price Guarantee
                  </small>
                  <small className="d-flex align-items-center">
                    <i className="fa fa-1x fa-fw fa-shopping-basket fa-stack me-1"></i>
                    30 Days Online Returns
                  </small>
                  <small className="d-flex align-items-center">
                    <i className="fa fa-1x fa-fw fa-truck fa-stack me-1"></i>
                    Standard Shipping
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-light o_colored_level o_cc d-lg-none transition-all duration-300 ${
        isSticky ? 'py-1' : 'py-2'
      }`}>
        <div className="container">
          <div className="d-flex flex-grow-1">
            <Link className="navbar-brand logo" to="/">
              <span role="img" aria-label="Logo of kidu" title="kidu">
                <img 
                  src="/images/website/1/logo/kidu004a-2.svg" 
                  className="img img-fluid transition-all duration-300"
                  width={isSticky ? "75" : "95"} 
                  height={isSticky ? "32" : "40"} 
                  alt="kidu" 
                  loading="lazy"
                />
              </span>
            </Link>
            
            <ul className="o_header_mobile_buttons_wrap navbar-nav d-flex flex-row align-items-center gap-2 mb-0 ms-auto">
              <li className="o_wsale_my_cart">
                <Link to="/cart" aria-label="eCommerce cart" className="o_navlink_background_hover btn position-relative rounded-circle border-0 p-1 text-reset">
                  <div>
                    <i className="fa fa-shopping-cart fa-stack"></i>
                    <sup className="my_cart_quantity badge bg-primary position-absolute top-0 end-0 mt-n1 me-n1 rounded-pill d-none" data-order-id="">0</sup>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          
          <button 
            className="nav-link btn p-2 o_not_editable" 
            type="button" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Mobile Menu */}
          <div className={`offcanvas offcanvas-end o_navbar_mobile ${isMenuOpen ? 'show' : ''}`} id="top_menu_collapse_mobile">
            <div className="offcanvas-header justify-content-end o_not_editable">
              <button type="button" className="nav-link btn-close" onClick={toggleMenu} aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-between h-100 w-100 pt-0">
              <ul className="navbar-nav">
                {/* Mobile Search */}
                <li>
                  <form method="get" className="o_searchbar_form s_searchbar_input" action="#" data-snippet="s_searchbar_input">
                    <div role="search" className="input-group mb-3">
                      <input type="search" name="search" className="search-query form-control oe_search_box rounded-start-pill bg-light" placeholder="Search..." />
                      <button type="submit" aria-label="Search" title="Search" className="btn oe_search_button rounded-end-pill bg-o-color-3 pe-3">
                        <i className="oi oi-search"></i>
                      </button>
                    </div>
                  </form>
                </li>

                {/* Mobile Navigation Links */}
                <ul role="menu" className="nav navbar-nav top_menu o_mega_menu_is_offcanvas mx-n3">
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/" className={`nav-link p-3 text-wrap ${isActive('/') ? 'active' : ''}`}>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/shop" className={`nav-link p-3 text-wrap ${isActive('/shop') ? 'active' : ''}`}>
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/services" className={`nav-link p-3 text-wrap ${isActive('/services') ? 'active' : ''}`}>
                      <span>Services</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/pricing" className={`nav-link p-3 text-wrap ${isActive('/pricing') ? 'active' : ''}`}>
                      <span>Pricing</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/about" className={`nav-link p-3 text-wrap ${isActive('/about') ? 'active' : ''}`}>
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/help" className={`nav-link p-3 text-wrap ${isActive('/help') ? 'active' : ''}`}>
                      <span>Help</span>
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item border-top px-0">
                    <Link role="menuitem" to="/contact" className={`nav-link p-3 text-wrap ${isActive('/contact') ? 'active' : ''}`}>
                      <span>Contact us</span>
                    </Link>
                  </li>
                </ul>

                {/* Mobile Utility Bar */}
                <li className={`transition-all duration-300 ${isSticky ? 'opacity-50' : 'opacity-100'}`}>
                  <div data-name="Text" className="s_text_block d-flex flex-column flex-lg-row gap-1 gap-lg-4 align-items-lg-center mt-2">
                    <small className="d-flex align-items-center">
                      <i className="fa fa-1x fa-fw fa-usd fa-stack me-1"></i>
                      Low Price Guarantee
                    </small>
                    <small className="d-flex align-items-center">
                      <i className="fa fa-1x fa-fw fa-shopping-basket fa-stack me-1"></i>
                      30 Days Online Returns
                    </small>
                    <small className="d-flex align-items-center">
                      <i className="fa fa-1x fa-fw fa-truck fa-stack me-1"></i>
                      Standard Shipping
                    </small>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav gap-2 mt-3 w-100">
                {/* Mobile Authentication */}
                {isAuthenticated ? (
                  <li className="dropdown">
                    <button 
                      className="btn btn-outline-primary dropdown-toggle w-100" 
                      type="button" 
                      onClick={toggleUserMenu}
                    >
                      {user?.name || 'User'}
                    </button>
                    {isUserMenuOpen && (
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                        <li><Link className="dropdown-item" to="/orders">Orders</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                      </ul>
                    )}
                  </li>
                ) : (
                  <li className="o_no_autohide_item">
                    <Link to="/login" className="nav-link o_nav_link_btn w-100 border text-center">Sign in</Link>
                  </li>
                )}

                {/* Mobile Contact Button */}
                <li>
                  <div className="oe_structure oe_structure_solo">
                    <section className="oe_unremovable oe_unmovable s_text_block" data-snippet="s_text_block" data-name="Text">
                      <div className="container">
                        <Link to="/contact" className="oe_unremovable btn btn-primary btn_cta w-100">Contact Us</Link>
                      </div>
                    </section>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 