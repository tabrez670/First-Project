import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { Image, Button } from "@mantine/core";

export default function Categories({ activeCategory, setActiveCategory }: any) {
    const [categories, setCategories] = useState([{ data: [] }]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await API.getCategories();
                setCategories(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <>
            <div>
                {categories.map((category: any) => (
                    <div key={category.id}>
                        <h1>{category.name}</h1>
                        <Button
                            onClick={() => {
                                setActiveCategory(category);
                            }}
                        >
                            {category.name}
                        </Button>
                        {/* <Image src={category.imageUrl} /> */}
                    </div>
                ))}
            </div>
        </>
    );
}
