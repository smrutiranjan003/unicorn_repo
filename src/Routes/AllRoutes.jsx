import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";

import Error from "../components/Products/Error";
import Dashboard from "../AdminPage/Pages/Dashboard/Dashboard";
import SearchBar from "../AdminPage/Navbar/SearchBar";
import AdminNavbar from "../AdminPage/Navbar/Navbar";
import RealDashboard from "../AdminPage/Pages/Dashboard/RealDashboard";
import RealAdminUser from "../AdminPage/Pages/Users/RealAdminUser";
import Order from "../AdminPage/Pages/Order/Order";
import RealAdminOrder from "../AdminPage/Pages/Order/RealAdminOrder";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Pagination from "../components/Products/Pagination";

import CartPage from "../Pages/CartPage";
// import Checkout from "../components/AddToCart_Payment_components/Che/Checkout";
import Checkout from "../components/AddToCart_Payment_Components/Chekout/Checkout";

import SingleProductPageWomen from "../Pages/SingleProductPageWomen";
import SingleProductPageMen from "../Pages/SingleProductPageMen";
import PrivateRouteAdmin from "../components/PrivateRoute/PrivateRouteAdmin";


const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/signinadmin"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/men-product"
        element={
          <>
            <Navbar />
          </>
        }
      />
      <Route
        path="/women-product"
        element={
          <>
            <Navbar />
            {" "}
          </>
        }
      />

  
      <Route path="/cart" element={<><Navbar /><CartPage /><Footer /></>} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="/women-product/:id" element={<><Navbar /><SingleProductPageWomen /><Footer /></>} />
      <Route path="/men-product/:id" element={<><Navbar /><SingleProductPageMen /><Footer /></>} />
      <Route path="/product/:id" element={<><Navbar /><SingleProductPageMen /><Footer /></>} />
      {/* <Route path="/cart" element={<CartPage />} /> */}

      <Route path="*" element={<Error />} />

      {/* Admin routes */}
      <Route path="/admin-dashboard" element={<RealDashboard />} />
      <Route path="/admin-user" element={<RealAdminUser />} />
      <Route path="/admin-order" element={<RealAdminOrder />} />
    </Routes>
  );
};

export default AllRoutes;
