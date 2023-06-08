import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { Paper, Text, Avatar, Button, ScrollArea, rem } from "@mantine/core";
import { useStyles } from "../styles/Categories.style";

const randomeCategory =  [
        {
            "name": "Anand Nagar",
            "imageUrl": "https://sploot-prod-env.s3.ap-south-1.amazonaws.com/cms/topics/undefined/Weekend%20Reads_1669205487863",
            "priority": 0,
            "isVisible": true,
            "createdAt": 1669189325823,
            "updatedAt": 1680421581785,
            "slug": "weekend-read",
            "id": "637dcecd6bed7f1910b19383"
        },
        {
            "name": "Namaskar Chowk",
            "imageUrl": "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/undefined/test_1662444892806",
            "priority": 1,
            "isVisible": true,
            "createdAt": 1662380942772,
            "updatedAt": 1679558360344,
            "slug": "test",
            "id": "6315eb8e1e2bd9a4cbd25560"
        },
        {
            "name": "Bhagya Nagar",
            "imageUrl": "https://sploot-prod-env.s3.ap-south-1.amazonaws.com/cms/topics/undefined/Play_1668151979001",
            "priority": 1,
            "isVisible": true,
            "createdAt": 1662631450693,
            "updatedAt": 1679558360345,
            "slug": "play",
            "id": "6319be1af5d9418a66b737dc"
        },
        {
            "name": "Sai Nagar",
            "imageUrl": "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/undefined/For%20You_1677755494378",
            "priority": 1,
            "isVisible": false,
            "slug": "for-you",
            "createdAt": 1677755511858,
            "updatedAt": 1679558360345,
            "id": "6400847784818da966840f89"
        },
        {
            "name": "Vzirabad",
            "imageUrl": "https://sploot-media.s3.ap-south-1.amazonaws.com/cms/topics/undefined/Test%20Reel_1678349899491",
            "priority": 1,
            "isVisible": true,
            "slug": "test-reel",
            "createdAt": 1678349911964,
            "updatedAt": 1679558360345,
            "id": "640996570ff09fda616ce007"
        },
    ]
export default function Categories({ activeCategory, setActiveCategory }: any) {
    const [categories, setCategories] = useState([{ data: [] }]);
    const { classes } = useStyles();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await API.getCategories();
                setCategories(response.data.data);
                setActiveCategory(response.data.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <>
            <ScrollArea
                type={"hover"}
                scrollbarSize={rem(5)}
                styles={(theme) => ({
                    // this style can also be managed from style file, but  with sx props
                    scrollbar: {
                        '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb':
                            {
                                backgroundColor: theme.colors.lime[1],
                            },
                    },
                })}
            >
                <Paper className={classes.root}>
                    {/* {categories.map((category: any) => ( */}
                    {randomeCategory.map((category: any) => (
                        <Button
                            compact
                            variant="subtle"
                            key={category.id}
                            value={category.name}
                            className={classes.btn}
                            onClick={() => {
                                setActiveCategory(category);
                            }}
                            {...(activeCategory.id === category.id && {
                                variant: "light",
                                color: "blue",
                            })}
                        >
                            <Avatar
                                size={"xs"}
                                mr={"xs"}
                                src={category.imageUrl}
                            />
                            <Text>{category.name}</Text>
                        </Button>
                    ))}
                </Paper>
            </ScrollArea>
        </>
    );
}
