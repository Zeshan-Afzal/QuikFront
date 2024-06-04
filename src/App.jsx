import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPages from "./pages/SignUpPages";
import ActivationPage from "./pages/ActivationPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./store/actions/userActions";
import Producsts from "./pages/Producsts";
import Header from "./components/layout/Header";
import ProductDetailPage from "./pages/ProductDetailPage";
import Footer from "./components/layout/Footer";
import ProfilePage from "./pages/ProfilePage";
import LayoutPage from "./pages/LayoutPage";
import AllProducts from "./components/products/AllProducts";
import BestSelling from "./pages/BestSelling";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage>
                <HomePage />
              </LayoutPage>
            }
          ></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/profile"
            element={
              <LayoutPage>
                <ProfilePage />
              </LayoutPage>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <LayoutPage>
                <Producsts />
              </LayoutPage>
            }
          ></Route>
          <Route
            path="/best-selling"
            element={
              <LayoutPage>
                <BestSelling />
              </LayoutPage>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <LayoutPage>
                <ProductDetailPage />
              </LayoutPage>
            }
          ></Route>

          <Route path="/sign-up" element={<SignUpPages />}></Route>
          <Route
            path="/activation/:userToken"
            element={<ActivationPage />}
          ></Route>
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}

export default App;
