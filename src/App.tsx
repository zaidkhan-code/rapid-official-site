/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Services from './pages/Services';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import JobApplication from './pages/JobApplication';
import Technology from './pages/Technology';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Leadership from './pages/Leadership';
import CaseStudies from './pages/CaseStudies';
import EBooks from './pages/EBooks';
import VideoLibrary from './pages/VideoLibrary';
import PressReleases from './pages/PressReleases';
import FAQ from './pages/FAQ';
import Partners from './pages/Partners';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="resources" element={<Resources />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="ebooks" element={<EBooks />} />
            <Route path="video-library" element={<VideoLibrary />} />
            <Route path="press-releases" element={<PressReleases />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="partners" element={<Partners />} />
            <Route path="industries" element={<Industries />} />
            <Route path="services" element={<Services />} />
            <Route path="technology" element={<Technology />} />
            <Route path="about" element={<About />} />
            <Route path="career" element={<Career />} />
            <Route path="career/:id" element={<JobApplication />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
