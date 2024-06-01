import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPages from "./pages/SignUpPages";
import ActivationPage from "./pages/ActivationPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/userActions";
import Producsts from "./pages/Producsts";
import Header from "./components/layout/Header";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/products" element={<Producsts />}></Route>
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
