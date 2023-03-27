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
} from "@mantine/core";
import API from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { LoginParams } from "../types";
import { IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export function LoginForm(props: PaperProps) {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const user = useSelector((state: any) => state.user);
    // useEffect(() => {
    //     if (user) {
    //         console.log("user");
    //         navigate("/blog");
    //     }
    // }, []);

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
            password: (val) =>
                val.length <= 6
                    ? "Password should include at least 6 characters"
                    : null,
        },
    });

    const body: LoginParams = {
        username: form.values.email,
        password: form.values.password,
    };

    const onSubmit = async () => {
        try {
            notifications.show({
                id: "login-form",
                title: "Loading",
                message: "Please wait... ",
                color: "cyan",
                icon: <IconX size={24} />,
                autoClose: 5000,
                loading: true,
            });
            const result = await API.login(body);
            const getUser = await API.getUser(result.data.data.authToken);
            const user = getUser.data.data;
            console.log(user);
            setTimeout(() => {
                dispatch(login(user));
            }, 1000);
            notifications.update({
                id: "login-form",
                title: "Login Success",
                message: `Welcome back, ${user.email} `,
                color: "teal",
                icon: <IconX size={24} />,
                autoClose: 5000,
            });
            // navigate("/blog");
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
            <Paper radius="md" p="xl" withBorder {...props}>
                <Text size="lg" weight={500}>
                    Login
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
                            label="Username"
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
                    </Stack>
                    <Group position="right" mt="xl">
                        <Button type="submit" radius="xl">
                            Login
                        </Button>
                    </Group>
                </form>
            </Paper>
        </>
    );
}
