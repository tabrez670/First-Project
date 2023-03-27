import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { Paper, Text, Avatar, Button } from "@mantine/core";
import { useStyles } from "../styles/Categories.style";

export default function Categories({ activeCategory, setActiveCategory }: any) {
    const [categories, setCategories] = useState([{ data: [] }]);
    const { classes } = useStyles();

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
            <Paper className={classes.root}>
                {categories.map((category: any) => (
                    <Button
                        compact
                        variant="light"
                        key={category.id}
                        value={category.name}
                        className={classes.btn}
                        onClick={() => {
                            setActiveCategory(category);
                        }}
                        {...(activeCategory.id === category.id && {
                            variant: "subtle",
                        })}
                    >
                        <Avatar size={"xs"} mr={"xs"} src={category.imageUrl} />
                        <Text>{category.name}</Text>
                    </Button>
                ))}
            </Paper>
        </>
    );
}
