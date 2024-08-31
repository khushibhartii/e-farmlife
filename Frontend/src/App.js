// src/App.js
import React from 'react';
import Navbar2 from "./components/Navbar/nav2.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import Signup from "./components/signup";
import Login from "./components/login.jsx";
import ContactUs from "./components/contact_us";
import CropManage from './components/cropManage.jsx';
import About from "./components/about";
import PaymentMockup from './components/PaymentMockup.jsx';
import FarmerDashboard from "./components/Dashboard/Farmer/main.jsx";
import BuyerDashboard from "./components/Dashboard/Buyer/main.jsx";
import Cart from "./components/cart/cart.jsx";
import Checkout from "./components/checkout/check.jsx";
import Detail from "./components/Details/details.jsx";
import AddReview from "./components/addReview/addReview.jsx";
import Payment from "./components/payment/payment.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/payment" element={<PaymentMockup />} />
        <Route
          path="/signup"
          element={
            <>
              <Navbar2 />
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar2 />
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar2 />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar2 />
              <ContactUs />
            </>
          }
        />
        <Route
          path="/cropManage"
          element={
            <>
              <Navbar2 />
              <CropManage />
            </>
          }
        />
        <Route
          path="/weather"
          element={
            <>
              <Navbar2 />
              <WeatherCard />
              <Footer />
            </>
          }
        />
        <Route
          path="/farmerProfile"
          element={
            <>
              <FarmerDashboard />
            </>
          }
        />
        <Route
          path="/buyerProfile"
          element={
            <>
              <BuyerDashboard />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar2 />
              <Cart />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar2 />
              <Checkout />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <Navbar2 />
              <Detail />
            </>
          }
        />
        <Route
          path="/addReview"
          element={
            <>
              <AddReview />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Payment />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


