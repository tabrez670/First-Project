import { useState, useEffect } from "react";
import API from "./utils/api";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/userSlice";
import { LoginForm } from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import { UserResponse } from "./types";
import { Container } from "@mantine/core";
import Headerfn from "./components/Header";

function App() {
    return (
        <>
                <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/blog" element={<HomePage />} />
                </Routes>
        </>
    );
}

export default App;
