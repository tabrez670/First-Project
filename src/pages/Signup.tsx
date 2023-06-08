import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Stack,
    rem,
    Container,
} from "@mantine/core";
import API from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { LoginParams, Pages } from "../types";
import { IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {registerWithEmailAndPassword} from "../utils/firebase";

export function Signup(props: PaperProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user);
    useEffect(() => {
        if (user) {
            console.log("user");
            navigate(Pages.BLOG);
        }
    }, []);

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            area: "",
            name: "",
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 1
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    const body: LoginParams = {
        email: form.values.email,
        password: form.values.password,
        area: form.values.area,
        name: form.values.name,
    };

    const onSubmit = async () => {
        try {
            console.log(body);
            notifications.show({
                id: "login-form",
                title: "Loading",
                message: "Please wait... ",
                color: "cyan",
                icon: <IconX size={24} />,
                autoClose: 5000,
                loading: true,
            });
            // const result = await API.login(body);
            // const getUser = await API.getUser(result.data.data.authToken);
            // const user = getUser.data.data;
            // console.log(user);
            setTimeout(() => {
                // dispatch(login(user));

                registerWithEmailAndPassword(body.name, body.email, body.password,  body.area);

                navigate(Pages.HOME);
            }, 1000);
            notifications.update({
                id: "login-form",
                title: "Login Success",
                message: `Welcome back, ${user.name} `,
                color: "teal",
                icon: <IconX size={24} />,
                autoClose: 5000,
            });
        } catch (error: any) {
            setTimeout(() => {
                notifications.update({
                    id: "login-form",
                    title: "Login Failed",
                    message: error.response.data.message,
                    color: "red",
                    icon: <IconX size={24} />,
                    autoClose: 5000,
                });
            }, 1000);
            console.log(error);
        }
    };

    return (
        // styles can be done using styles or class={} also, but for time saving using these shorthand properties by mantine. these are not classes!! these are just shorthands for style specifications. p-> padding, xl= mantineTheme.spacing.xl -> ~ "x" PX
        <>
            <Container
                size="sm"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Paper
                    radius="md"
                    p="xl"
                    withBorder
                    {...props}
                    style={{
                        width: rem(400),
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <Text size="lg" weight={500}>
                        Signup
                    </Text>

                    <Divider
                        label="Enter email and password"
                        labelPosition="center"
                        my="lg"
                    />

                    <form
                        onSubmit={form.onSubmit(() => {
                            onSubmit();
                        })}
                    >
                        <Stack>
                            <TextInput
                                required
                                label="name"
                                placeholder="name"
                                value={form.values.name}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "name",
                                        event.currentTarget.value
                                    )
                                }
                                // error={form.errors.email && "Invalid email"}
                                radius="md"
                            />

                            <TextInput
                                required
                                label="area"
                                placeholder="area"
                                value={form.values.area}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "area",
                                        event.currentTarget.value
                                    )
                                }
                                // error={form.errors.email && "Invalid email"}
                                radius="md"
                            />

                            <TextInput
                                required
                                label="email"
                                placeholder="hello@mantine.dev"
                                value={form.values.email}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "email",
                                        event.currentTarget.value
                                    )
                                }
                                error={form.errors.email && "Invalid email"}
                                radius="md"
                            />

                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Your password"
                                value={form.values.password}
                                onChange={(event) =>
                                    form.setFieldValue(
                                        "password",
                                        event.currentTarget.value
                                    )
                                }
                                error={
                                    form.errors.password &&
                                    "Password should include at least 6 characters"
                                }
                                radius="md"
                            />
                            <PasswordInput
                                required
                                label="Passwordd"
                                placeholder="Your password"
                                value={form.values.password}
                                radius="md"
                                // onChange={(event) =>
                                //     form.setFieldValue(
                                //         "password",
                                //         event.currentTarget.value
                                //     )
                                // }
                            />
                        </Stack>
                        <Group position="right" mt="xl">
                            <Button type="submit" radius="xl">
                                Signup
                            </Button>
                        </Group>
                    </form>
                </Paper>
            </Container>
        </>
    );
}
