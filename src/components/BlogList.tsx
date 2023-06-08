import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
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
import { getCollection } from "../utils/firebase";

interface BlogListProps {
    slug: string;
}


export default function BlogList({ slug }: BlogListProps) {
    const [blogs, setBlogs] = React.useState([]) ;
    const [loading, setLoading] = React.useState(true);
    const { classes } = useStyles();
    useEffect(() => {
        setLoading(true);
        const fetchBlogs = async () => {
            try {
                // const response = await API.getBlogByCategory(slug);

                const response = await getCollection("area");
                console.log(response);
                // TODO: fetch documents inside area collection based on the value of area
                    // first correct the method inside firebase/index

                // setBlogs(response.data.data);
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
                                <BlogItem key={blog.id} blog={blog}  place="other"/>
                            ))}
                    </>
                ) : (
                    <>
                        {!loading && (
                            <Text>There are no shops/ products in this category</Text>
                        )}
                    </>
                )}
            </Container>
        </>
    );
}
