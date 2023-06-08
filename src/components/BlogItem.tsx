import React from "react";
import { BlogParams, Pages } from "../types";
import { useStyles } from "../styles/BlogItem.style";
import { Card, Mark, Text, Group, Image, Badge, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface BlogItemProps {
    blog: BlogParams;
    place: string;
}

export default function BlogItem({ blog, place }: BlogItemProps) {
    const { classes, cx } = useStyles();
    const navigate = useNavigate();


    const linkProps = {
        // href: blog.redirectUrl,
        href: Pages.PRODUCTS,
        // target: "_blank",
    };
    return (
        <>
            <Card withBorder radius="md" className={cx(classes.card)}>
                <Card.Section>

                    <a {...linkProps}>
                        <Image src={blog.imageUrl} height={180} />
                    </a>

                </Card.Section>
                {blog.trending && (
                    <Badge
                        className={classes.trend}
                        variant="gradient"
                        gradient={{ from: "yellow", to: "red" }}
                    >
                        Trending
                    </Badge>
                )}

                <Text
                    className={classes.title}
                    fw={500}
                    component="a"
                    {...linkProps}
                >
                    {blog.title}
                </Text>

                <Text fz="sm" color="dimmed" lineClamp={4}>
                    {blog.description}

                    {place === "product" && (
                        <Text fz="sm" inline>
                            <Button onClick={() => {
                                navigate(Pages.TEMPLATE)
                            }}
                            >Buy Now</Button>
                        </Text>
                    )}
                </Text>

                <Group position="apart" className={classes.footer}>

                    <Text fz="sm" inline>
                        {/* <Mark>Category</Mark>: {blog.categorySlug} */}
                    </Text>
                </Group>
            </Card>
        </>
    );
}
