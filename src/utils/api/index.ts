import axios from "axios";

const API = axios.create({
    baseURL: "https://api-staging-v2.sploot.space/api/v2/",
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

const login = async (email: string, password: string) => {
    try {
        console.log("sample")
        const response = await API.post("auth/signin", {
            email,
            password,
        });
        console.log(response);

        localStorage.setItem("token", response.data.token);

        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const getUser = async (token: string) => {
    try {
        const response = await API.get("user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const getCategories = async () => {
    try {
        const response = await API.get("cms/post-categories");
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

const getBlogByCategory = async (slug: string) => {
    try {
        const response = await API.get(`public/cms/post-categories/${slug}`);
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export default {
    login,
    getUser,
    getCategories,
    getBlogByCategory,
};
