import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import API from "../utils/api";
import { BlogParams } from "../types";
import {
    Loader,
    LoadingOverlay,
    Container,
    Paper,
    Text,
    Center,
    Box,
    Group,
    createStyles,
} from "@mantine/core";
import { useStyles } from "../styles/BlogList.style";

interface BlogListProps {
    slug: string;
}

export default function BlogList({ slug }: BlogListProps) {
    const [blogs, setBlogs] = React.useState([] as BlogParams[]);
    const [loading, setLoading] = React.useState(true);
    const { classes } = useStyles();
    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            try {
                const response = await API.getBlogByCategory(slug);
                setBlogs(response.data.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        };
        setTimeout(() => {
            fetchBlogs();
        }, 900);
    }, [slug]);

    useEffect(() => {
        console.log(blogs);
    }, [blogs]);

    return (
        <>
            <Container className={classes.root}>
                {loading}

                {loading && <Loader size="lg" />}
                {blogs.length > 0 ? (
                    <>
                        {!loading &&
                            blogs.map((blog: any) => (
                                <BlogItem key={blog.id} blog={blog} />
                            ))}
                    </>
                ) : (
                    <>
                        {!loading && (
                            <Text>There are no blogs in this category</Text>
                        )}
                    </>
                )}
            </Container>
        </>
    );
}
