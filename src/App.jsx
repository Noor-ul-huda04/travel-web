import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import BookingPage from "./components/mainBooking";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BlogSection from "./components/BlogSection";
import BlogDetails from "./components/BlogDetails";
import Offers from './components/Offers.jsx'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/blogsection" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/packages" element={<Offers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
