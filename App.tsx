import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Premium from './pages/Premium';
import Elite from './pages/Elite';
import About from './pages/About';
import Newsletter from './pages/Newsletter';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/premium" element={<Premium />} />
          <Route path="/membership/elite" element={<Elite />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;