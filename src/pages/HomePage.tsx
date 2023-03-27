import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import API from "../utils/api";
import Categories from "../components/Categories";
import BlogList from "../components/BlogList";
import { CategoryResponse } from "../types";
export default function HomePage() {
    const [activeCategory, setActiveCategory] = useState(
        {} as CategoryResponse
    );
    useEffect(() => {
        console.log(activeCategory);
    }, [activeCategory]);

    return (
        <>
            <Header />
            <Categories
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <BlogList slug={activeCategory.slug} />
        </>
    );
}
