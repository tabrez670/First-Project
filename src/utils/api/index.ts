import axios from "axios";
import { LoginParams } from "../../types";

const API = axios.create({
    baseURL: "https://api-staging-v2.sploot.space/api/v2/",
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const login = async (params: LoginParams) => {
    const response = await API.post("auth/signin", {
        username: params.username,
        password: params.password,
    });
    console.log(response);
    localStorage.setItem("token", response.data.data.data.authToken);
    return response.data;
};

const getUser = async (token: string) => {
    const response = await API.get("user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response);
    return response.data;
};

const getCategories = async () => {
    const response = await API.get("cms/post-categories");
    console.log(response);
    return response.data;
};

const getBlogByCategory = async (slug: string) => {
    const response = await API.get(`public/cms/post-categories/${slug}`);
    console.log(response);
    return response.data;
};

export default {
    login,
    getUser,
    getCategories,
    getBlogByCategory,
};
