import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header";
import Categories from "../components/Categories";
import BlogList from "../components/BlogList";
import { CategoryResponse } from "../types";
import { Container, Divider } from "@mantine/core";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
export default function HomePage() {
    const [activeCategory, setActiveCategory] = useState(
        {} as CategoryResponse
    );

    // const user = useSelector((state: any) => state.user);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //         console.log("page");
    //         navigate("/");
    //     }
    // }, [user]);

    useEffect(() => {
        console.log(activeCategory);
    }, [activeCategory]);

    return (
        <>
            <AppHeader />
            <Divider />
            <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Divider />
            <BlogList slug={activeCategory.slug} />
        </>
    );
}
