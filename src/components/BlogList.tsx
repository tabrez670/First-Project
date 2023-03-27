import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import API from "../utils/api";
export default function BlogList({ slug }: any) {
    const [blogs, setBlogs] = React.useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await API.getBlogByCategory(slug);
                setBlogs(response.data.data);
            } catch (error) {
                console.log(error);
            }
            // console.log(blogs);
        };
        fetchBlogs();
    }, [slug]);

    useEffect(() => {
        console.log(blogs);
    }, [blogs]);


    return (
        <>
            <div> blogs</div>
            {blogs.map((blog: any) => (
                <BlogItem key={blog.id} blog={blog} />
            ))}
        </>
    );
}
