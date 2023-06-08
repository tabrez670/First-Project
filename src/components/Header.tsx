import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import {
    Header,
    Group,
    Button,
    rem,
    Text,
    UnstyledButton,
    Avatar,
} from "@mantine/core";
import { Pages } from "../types";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

import { useStyles, HEADER_HEIGHT } from "../styles/Header.style";

export default function AppHeader() {
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user: UserResponse = useSelector((state: any) => state.user);
    const usr = window.localStorage.getItem("user");
    const user = usr ? JSON.parse(usr) : null;

    return (
        <Header
            my={rem(5)}
            height={HEADER_HEIGHT}
            className={classes.inner}
            sx={{ borderBottom: 0, position: "sticky", top: 0, zIndex: 1 }}
        >
            <UnstyledButton className={classes.user}>
                <Group>
                    <Avatar size={"lg"} src={user.photoUrl} radius="xl" />

                    <div style={{ flex: 1 }}>
                        <Text size="sm" weight={500}>
                            {user.name}
                        </Text>
                        <Text color="dimmed" size="xs">
                            {user.email}
                        </Text>{" "}
                        <Text color="dimmed" size="xs">
                            {user.area}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
            <Group spacing={10}></Group>
            <Button
                radius="md"
                // py={"xs"}
                // px={"lg"}
                variant="outline"
                onClick={() => {
                    notifications.show({
                        id: "Logg-out",
                        title: "Logged Out",
                        message: "See you soon...!",
                        color: "orange",
                        icon: <IconX size={24} />,
                        autoClose: 5000,
                    });
                    dispatch(logout());
                    console.log("logout");
                    navigate(Pages.HOME);
                }}
            >
                Logout
            </Button>
        </Header>
    );
}
