import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Navbar, Login, Register } from "./components";
import {
  BensuMenus,
  UserProfile,
  CartOrder,
  EditProfile,
  EditProfilePartner,
  PartnerProfile,
  AddProduct,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginContextProvider } from "./components/context/LoginContext";
import { Cekauth } from "./components/cekauth/Cekauth";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = () => {
  const client = new QueryClient();
  return (
    <LoginContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <Cekauth />
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/bensu-menu" element={<BensuMenus />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/cart-order" element={<CartOrder />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route
              path="/edit-profile-partner"
              element={<EditProfilePartner />}
            />
            <Route path="/partner-profile" element={<PartnerProfile />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </LoginContextProvider>
  );
};

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
