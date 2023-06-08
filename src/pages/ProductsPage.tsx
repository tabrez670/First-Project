import React, { useState, useEffect } from "react";
import AppHeader from "../components/Header";
import BlogItem from "../components/BlogItem";
import { CategoryResponse } from "../types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import { Pages } from "../types";
import { useStyles } from "../styles/BlogList.style";
import { Container, Divider, Text } from "@mantine/core";

const localProducts = [
    {
        trending: false,
        title: "Fruit Basket",
        category: {
            name: "test 2",
            imageUrl:
                "https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "AAl mix fruite juice",
        isVisible: true,
        imageUrl:
            "https://media.istockphoto.com/id/171302954/photo/groceries.jpg?s=612x612&w=0&k=20&c=D3MmhT5DafwimcYyxCYXqXMxr1W25wZnyUf4PF1RYw8=",
        redirectUrl:
            "https://app.sploot.space/posts?post=634d20c83ce605b07ca3dda6",
        createdAt: 1665732797681,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "634910bda831f71cca104747",
    },
    {
        trending: false,
        title: "Grains Set",
        category: {
            name: "test 2",
            imageUrl:
                "https://content.jdmagicbox.com/comp/kolkata/i9/033pxx33.xx33.220125121919.c2i9/catalogue/urban-feed-park-street-kolkata-grocery-stores-kaeh3o24sq.jpg",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "ALl grains",
        isVisible: true,
        imageUrl:
            "https://content.jdmagicbox.com/comp/kolkata/i9/033pxx33.xx33.220125121919.c2i9/catalogue/urban-feed-park-street-kolkata-grocery-stores-kaeh3o24sq.jpg",
        redirectUrl:
            "https://www.instagram.com/reel/CgoZJ2ujCNx/?igshid=YmMyMTA2M2Y=",
        createdAt: 1665732757263,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "63491095a831f71cca104730",
    },
    {
        trending: false,
        title: "Utilities",
        category: {
            name: "test 2",
            imageUrl:
                "https://5.imimg.com/data5/BM/DV/KV/ANDROID-92423289/product-jpeg-500x500.jpg",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "sploot kitchen",
        isVisible: true,
        imageUrl:
            "https://5.imimg.com/data5/BM/DV/KV/ANDROID-92423289/product-jpeg-500x500.jpg",
        redirectUrl: "https://blog.sploot.space/pupcakes-sploot-kitchen/",
        createdAt: 1665732673683,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "63491041a831f71cca10465c",
    },
    {
        trending: false,
        title: "Tips on Traveling with Dogs",
        category: {
            name: "test 2",
            imageUrl:
                "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/undefined/test%202_1665732530258",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "test",
        isVisible: true,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOxq8vSDeOXbLhQPmDVUimelvnRUKDbde_w&usqp=CAU",
        redirectUrl:
            "https://blog.sploot.space/how-to-tell-if-my-dog-is-stressed/",
        createdAt: 1664434590630,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "6335419ed7876c6a35930bd4",
    },
    {
        trending: false,
        title: "Tips on Traveling with Dogs",
        category: {
            name: "test 2",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOxq8vSDeOXbLhQPmDVUimelvnRUKDbde_w&usqp=CAU",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "test",
        isVisible: true,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzayXVA4Way2aF6Rd2KM7GrEd1QLUiXVVTg&usqp=CAU",
        redirectUrl:
            "https://blog.sploot.space/how-to-tell-if-my-dog-is-stressed/",
        createdAt: 1664434590630,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "639b778f15d0e6a0a48e9cd8",
    },
    {
        trending: false,
        title: "Tips on Traveling with Dogs",
        category: {
            name: "test 2",
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzayXVA4Way2aF6Rd2KM7GrEd1QLUiXVVTg&usqp=CAU",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "test",
        isVisible: true,
        imageUrl:
            "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/test%202/Tips%20on%20Traveling%20with%20Dogs_1665650175643",
        redirectUrl:
            "https://blog.sploot.space/how-to-tell-if-my-dog-is-stressed/",
        createdAt: 1664434590630,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "639b779d15d0e6a0a48e9cd9",
    },
    {
        trending: false,
        title: "Tips on Traveling with Dogs",
        category: {
            name: "test 2",
            imageUrl:
                "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/undefined/test%202_1665732530258",
            priority: 2,
            isVisible: true,
            createdAt: 1662447278034,
            updatedAt: 1679558360345,
            slug: "test-2",
            id: "6316eeae5ca403e3d8ba69aa",
        },
        description: "test",
        isVisible: true,
        imageUrl:
            "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/test%202/Tips%20on%20Traveling%20with%20Dogs_1665650175643",
        redirectUrl:
            "https://blog.sploot.space/how-to-tell-if-my-dog-is-stressed/",
        createdAt: 1664434590630,
        updatedAt: 1679558360386,
        categorySlug: "test-2",
        id: "639b77a015d0e6a0a48e9cda",
    },
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState(
        {} as CategoryResponse
    );

    const user = useSelector((state: any) => state.user);
    const navigate = useNavigate();
    const { classes } = useStyles();

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
                    <Container className={classes.root}>
                        {localProducts.length > 0 ? (
                            <>
                                {localProducts.map((blog: any) => (
                                    <BlogItem key={blog.id} blog={blog} place={"product"} />
                                ))}
                            </>
                        ) : (
                            <>
                                {
                                    <Text>
                                        There are no blogs in this category
                                    </Text>
                                }
                            </>
                        )}
                    </Container>
                </Container>
            )}
        </>
    );
}
