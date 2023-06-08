import { useState, useEffect } from "react";
import API from "./utils/api";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import { LoginForm } from "./pages/LoginForm";
import { Signup } from "./pages/Signup";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import {BuyNowPage} from "./pages/BuyNowPage"
import { UserResponse } from "./types";
import { Container } from "@mantine/core";
import Headerfn from "./components/Header";
import { Pages } from "./types";
function App() {
    return (
        <>
            <Routes>
                <Route path={Pages.SIGNUP} element={<Signup />} />
                <Route path={Pages.HOME} element={<LoginForm />} />
                <Route path={Pages.BLOG} element={<HomePage />} />
                <Route path={Pages.PRODUCTS} element={<ProductsPage />} />
                <Route path={Pages.TEMPLATE} element={<BuyNowPage />} />
            </Routes>
        </>
    );
}

export default App;
