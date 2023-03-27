import React from "react";
import { BlogParams } from "../types";
import { useStyles } from "../styles/BlogItem.style";
import { Card, Text, Group,  Image, Badge } from "@mantine/core";

interface BlogItemProps {
    blog: BlogParams;
}

export default function BlogItem({ blog }: BlogItemProps) {
    const { classes, cx } = useStyles();

    const linkProps = {
        href: blog.redirectUrl,
        target: "_blank",
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
                </Text>

                <Group position="apart" className={classes.footer}>
                    <Text fz="sm" inline>
                        category: {blog.categorySlug}
                    </Text>
                </Group>
            </Card>
        </>
    );
}
