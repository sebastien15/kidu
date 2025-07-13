import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/common/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import Help from './pages/Help/Help';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './styles/globals.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div id="wrapwrap" className="homepage">
          <a className="o_skip_to_content btn btn-primary rounded-0 visually-hidden-focusable position-absolute start-0" href="#wrap">
            Skip to Content
          </a>
          <Header />
          <div id="wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/help" element={<Help />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
