import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    acceptTerms: false,
    acceptNewsletter: false
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt:', formData);
      setIsLoading(false);
      // Handle registration logic here
    }, 1000);
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Handle social signup logic here
  };

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Register</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Registration Form Section */}
        <section className="s_register o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_register">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="s_register_form card">
                  <div className="card-header text-center">
                    <h3>Create Your Account</h3>
                    <p className="text-muted">Join thousands of customers who trust Kidu for their electronics needs</p>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName" className="form-label">First Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && (
                            <div className="invalid-feedback">{errors.firstName}</div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName" className="form-label">Last Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && (
                            <div className="invalid-feedback">{errors.lastName}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="password" className="form-label">Password *</label>
                          <input
                            type="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            placeholder="Create a password"
                          />
                          {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                          )}
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="confirmPassword" className="form-label">Confirm Password *</label>
                          <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            placeholder="Confirm your password"
                          />
                          {errors.confirmPassword && (
                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`}
                          id="acceptTerms"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="acceptTerms">
                          I agree to the{' '}
                          <Link to="/terms" className="text-decoration-none">
                            Terms and Conditions
                          </Link>
                          {' '}and{' '}
                          <Link to="/privacy" className="text-decoration-none">
                            Privacy Policy
                          </Link>
                          *
                        </label>
                        {errors.acceptTerms && (
                          <div className="invalid-feedback">{errors.acceptTerms}</div>
                        )}
                      </div>
                      
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="acceptNewsletter"
                          name="acceptNewsletter"
                          checked={formData.acceptNewsletter}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="acceptNewsletter">
                          I would like to receive newsletters and promotional emails
                        </label>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 mb-3"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Creating account...
                          </>
                        ) : (
                          'Create Account'
                        )}
                      </button>
                    </form>

                    {/* Divider */}
                    <div className="text-center my-4">
                      <span className="bg-white px-3 text-muted">or</span>
                      <hr className="mt-n3" />
                    </div>

                    {/* Social Signup */}
                    <div className="s_social_signup">
                      <button 
                        className="btn btn-outline-secondary w-100 mb-2"
                        onClick={() => handleSocialSignup('google')}
                      >
                        <i className="fa fa-google me-2"></i>
                        Sign up with Google
                      </button>
                      <button 
                        className="btn btn-outline-secondary w-100 mb-2"
                        onClick={() => handleSocialSignup('facebook')}
                      >
                        <i className="fa fa-facebook me-2"></i>
                        Sign up with Facebook
                      </button>
                      <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => handleSocialSignup('apple')}
                      >
                        <i className="fa fa-apple me-2"></i>
                        Sign up with Apple
                      </button>
                    </div>

                    {/* Login Link */}
                    <div className="text-center mt-4">
                      <p className="mb-0">
                        Already have an account?{' '}
                        <Link to="/login" className="text-decoration-none">
                          Sign in here
                        </Link>
                      </p>
                    </div>
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

export default Register; 