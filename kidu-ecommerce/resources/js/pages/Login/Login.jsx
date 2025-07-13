import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Handle login logic here
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div id="wrap">
      <div className="oe_structure">
        {/* Hero Section */}
        <section className="s_title parallax s_parallax_is_fixed bg-black-50 pt24 pb24" data-vcss="001" data-snippet="s_title" data-scroll-background-ratio="1">
          <span className="s_parallax_bg oe_img_bg" style={{ backgroundImage: "url('/src/assets/images/website-2.jpg')", backgroundPosition: "50% 0" }}></span>
          <div className="o_we_bg_filter bg-black-50"></div>
          <div className="container">
            <h1>Login</h1>
          </div>
        </section>
      </div>

      <div className="oe_structure">
        {/* Login Form Section */}
        <section className="s_login o_cc o_cc1 pt64 pb64" data-vxml="001" data-vcss="001" data-snippet="s_login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="s_login_form card">
                  <div className="card-header text-center">
                    <h3>Welcome Back</h3>
                    <p className="text-muted">Sign in to your account to continue</p>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your password"
                        />
                      </div>
                      
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                      
                      <div className="mb-3">
                        <Link to="/forgot-password" className="text-decoration-none">
                          Forgot your password?
                        </Link>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="btn btn-primary w-100 mb-3"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Signing in...
                          </>
                        ) : (
                          'Sign In'
                        )}
                      </button>
                    </form>

                    {/* Divider */}
                    <div className="text-center my-4">
                      <span className="bg-white px-3 text-muted">or</span>
                      <hr className="mt-n3" />
                    </div>

                    {/* Social Login */}
                    <div className="s_social_login">
                      <button 
                        className="btn btn-outline-secondary w-100 mb-2"
                        onClick={() => handleSocialLogin('google')}
                      >
                        <i className="fa fa-google me-2"></i>
                        Continue with Google
                      </button>
                      <button 
                        className="btn btn-outline-secondary w-100 mb-2"
                        onClick={() => handleSocialLogin('facebook')}
                      >
                        <i className="fa fa-facebook me-2"></i>
                        Continue with Facebook
                      </button>
                      <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => handleSocialLogin('apple')}
                      >
                        <i className="fa fa-apple me-2"></i>
                        Continue with Apple
                      </button>
                    </div>

                    {/* Registration Link */}
                    <div className="text-center mt-4">
                      <p className="mb-0">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-decoration-none">
                          Sign up here
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

export default Login; 