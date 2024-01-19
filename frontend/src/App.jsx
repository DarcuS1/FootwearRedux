import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import MainHeader from "./components/Mainheader/MainHeader";
import MainHero from "./components/Mainhero/MainHero";
import Testimonial from "./components/Testimonial/Testimonial";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
// import Filter from "./components/Filter/Filter";
// import Product from "./components/Product/Product";
import UploadForm from "./components/UploadForm/UploadForm";
import Pricing from "./components/Pricing/Pricing";
import AboutHero from "./components/AboutHero/AboutHero";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import CartComponent from "./components/CartComponent/CartComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import CheckoutComponent from "./components/CheckoutComponent/CheckoutComponent";
import ProductComponent from "./components/ProductComponent/ProductComponent";
import UserInfo from "./components/UserInfo/UserInfo";
import ShopComponent from "./components/ShopComponent/ShopComponent";
import { CartContextProvider } from "./components/CartContext/CartCOntext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => (
  <div>
    <Navbar />
    <MainHeader />
    <MainHero />
    <Testimonial />
    <Team />
    <Footer />
  </div>
);
const Sell = () => (
  <div>
    <Navbar />
    <UploadForm />
    <Footer />
  </div>
);
const Shop = () => (
  <div>
    <Navbar />
    {/* <div className="container max-w-lg px-4 py-32 mx-auto mt-px md:max-w-none md:text-center text-center">
      <section className="container px-4 md:px-6 grid md:grid-cols-[240px_1fr] gap-10 items-start tails-selected-element">
        <Filter />
        <Product />
      </section>
    </div> */}
    <ShopComponent />
    <Footer />
  </div>
);
const AboutUs = () => (
  <div>
    <Navbar />
    <AboutHero />
    <Pricing />
    <Footer />
  </div>
);
const Contact = () => (
  <div>
    <Navbar />
    <ContactHeader />
    <ContactForm />
    <Footer />
  </div>
);
const SignUp = () => (
  <div>
    <Navbar />
    <SignUpComponent />
    <Footer />
  </div>
);
const SignIn = () => (
  <div>
    <Navbar />
    <SignInComponent />
    <Footer />
  </div>
);
const Cart = () => (
  <div>
    <Navbar />
    <CartComponent />
    <Footer />
  </div>
);
const Checkout = () => (
  <div>
    <Navbar />
    <CheckoutComponent />
    <Footer />
  </div>
);

const ProductPage = () => (
  <div>
    <Navbar />
    <ProductComponent />
    <Footer />
  </div>
);

const UserPage = () => (
  <div>
    <Navbar />
    <UserInfo />
    <Footer />
  </div>
);

const App = () => {
  return (
    <CartContextProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/user-info" element={<UserPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
