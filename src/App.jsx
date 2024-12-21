// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { AboutUs } from "./Pages/AboutUs";
import { ContactUs } from "./Pages/ContactUs";
import { Shop } from "./Pages/Shop";
import { Error } from "./Pages/Error";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Scrolltop } from "./components/Scrolltop";
import { Blogs } from "./Pages/Blogs";
import { ProductDetail } from "./Pages/ProductDetail";
import { Login } from "./Pages/Login";
import { BackToTopButton } from "./components/BackToTopButton";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="ProductDetail/:productId" element={<ProductDetail />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
      <BackToTopButton />
    </>
  );
}

export default App;
