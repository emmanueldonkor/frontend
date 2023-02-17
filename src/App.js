import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./routes/checkout/checkout";
import Confirmation from "./routes/checkout/confirmation";
import CartMenu from "./routes/global/cartMenu";
import Navbar from "./routes/global/navbar";
import Home from "./routes/home/home"
import ItemDetails from "./routes/itemDetails/itemDetails";
import Footer from  "./routes/global/Footer"
import Popup from "./components/Popup/Popup";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
        {showPopup && (
          <Popup
            onClose={handleClosePopup}
            style={{
              position: "absolute",
              top: "50px",
              left: 0,
              right: 0,
              zIndex: 100,
            }}
          />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
