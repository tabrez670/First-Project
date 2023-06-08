import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header";
import Categories from "../components/Categories";
import BlogList from "../components/BlogList";
import { CategoryResponse } from "../types";
import { Container, Divider } from "@mantine/core";
import { useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import { Pages } from "../types";

export default function HomePage() {
    const [activeCategory, setActiveCategory] = useState(
        {} as CategoryResponse
    );

    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            console.log(JSON.parse(user));
        }
    }, []);


    useEffect(() => {
        if (!user || user === undefined || user === null) {
            notifications.show({
                id: "un-authorised",
                title: "Unauthorised",
                message: "Complete the Login first",
                color: "yellow",
                icon: <IconX size={24} />,
                autoClose: 5000,
            });
            navigate(Pages.HOME);
        }
    }, []);

    return (
        <>
            {user && (
                <Container size="xl">
                    <AppHeader />
                    <Divider />
                    {/* <Categories
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    /> */}
                    {/* <Divider /> */}
                    <BlogList slug={user.area} />
                </Container>
            )}
        </>
    );
}
