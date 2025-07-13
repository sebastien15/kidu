import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      price: 25000,
      originalPrice: 30000,
      image: '/src/assets/images/website.s_three_columns_default_image_1.jpg',
      quantity: 2,
      inStock: true
    },
    {
      id: 2,
      name: 'USB-C Fast Charging Cable',
      price: 8500,
      originalPrice: 8500,
      image: '/src/assets/images/website.s_three_columns_default_image_2.jpg',
      quantity: 1,
      inStock: true
    },
    {
      id: 3,
      name: 'Portable Power Bank',
      price: 35000,
      originalPrice: 40000,
      image: '/src/assets/images/website.s_three_columns_default_image_3.jpg',
      quantity: 1,
      inStock: false
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome10') {
      setAppliedCoupon({ code: couponCode, discount: 10 });
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    return (calculateSubtotal() * appliedCoupon.discount) / 100;
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 50000 ? 0 : 5000;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() + calculateShipping();
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount();
  const shipping = calculateShipping();
  const total = calculateTotal();

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Shopping Cart</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Cart Section */}
        <section className="s_cart o_cc o_cc1 pt32 pb64" data-vxml="001" data-vcss="001" data-snippet="s_cart">
          <div className="container">
            {cartItems.length > 0 ? (
              <div className="row">
                {/* Cart Items */}
                <div className="col-lg-8">
                  <div className="s_cart_items">
                    <h3 className="mb-4">Cart Items ({cartItems.length})</h3>
                    
                    {cartItems.map((item) => (
                      <div key={item.id} className="s_cart_item card mb-3">
                        <div className="card-body">
                          <div className="row align-items-center">
                            <div className="col-md-2">
                              <img src={item.image} className="img-fluid rounded" alt={item.name} />
                            </div>
                            <div className="col-md-4">
                              <h6 className="mb-1">{item.name}</h6>
                              {!item.inStock && (
                                <span className="badge bg-warning text-dark">Out of Stock</span>
                              )}
                            </div>
                            <div className="col-md-2">
                              <div className="s_cart_quantity">
                                <div className="input-group input-group-sm">
                                  <button 
                                    className="btn btn-outline-secondary" 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                  >
                                    -
                                  </button>
                                  <input 
                                    type="number" 
                                    className="form-control text-center" 
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                    min="1"
                                  />
                                  <button 
                                    className="btn btn-outline-secondary" 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-2 text-center">
                              <div className="s_cart_price">
                                <span className="text-primary fw-bold">RF {item.price.toLocaleString()}</span>
                                {item.originalPrice > item.price && (
                                  <div className="text-muted text-decoration-line-through">
                                    RF {item.originalPrice.toLocaleString()}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-md-2 text-end">
                              <button 
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeItem(item.id)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart Summary */}
                <div className="col-lg-4">
                  <div className="s_cart_summary card">
                    <div className="card-header">
                      <h5 className="mb-0">Order Summary</h5>
                    </div>
                    <div className="card-body">
                      {/* Coupon Code */}
                      <div className="mb-3">
                        <label className="form-label">Coupon Code</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                          />
                          <button 
                            className="btn btn-outline-primary" 
                            onClick={applyCoupon}
                          >
                            Apply
                          </button>
                        </div>
                        {appliedCoupon && (
                          <div className="mt-2">
                            <span className="badge bg-success">
                              {appliedCoupon.code} - {appliedCoupon.discount}% off
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Summary Details */}
                      <div className="s_cart_summary_details">
                        <div className="d-flex justify-content-between mb-2">
                          <span>Subtotal:</span>
                          <span>RF {subtotal.toLocaleString()}</span>
                        </div>
                        {discount > 0 && (
                          <div className="d-flex justify-content-between mb-2 text-success">
                            <span>Discount:</span>
                            <span>- RF {discount.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="d-flex justify-content-between mb-2">
                          <span>Shipping:</span>
                          <span>{shipping === 0 ? 'Free' : `RF ${shipping.toLocaleString()}`}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between fw-bold">
                          <span>Total:</span>
                          <span>RF {total.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <div className="mt-4">
                        <Link to="/checkout" className="btn btn-primary w-100 mb-2">
                          Proceed to Checkout
                        </Link>
                        <Link to="/shop" className="btn btn-outline-secondary w-100">
                          Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty Cart */
              <div className="text-center py-5">
                <i className="fa fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h3>Your cart is empty</h3>
                <p className="text-muted">Looks like you haven't added any items to your cart yet.</p>
                <Link to="/shop" className="btn btn-primary">
                  Start Shopping
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart; 