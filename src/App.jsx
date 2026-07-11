import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import GlobalUI from './components/GlobalUI';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import ExtractionProcess from './pages/ExtractionProcess';
import Quality from './pages/Quality';
import Exports from './pages/Exports';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <div className="noise-overlay"></div>
          <Loader />
          <GlobalUI />
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/extraction-process" element={<ExtractionProcess />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/exports" element={<Exports />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
