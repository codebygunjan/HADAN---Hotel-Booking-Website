import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
