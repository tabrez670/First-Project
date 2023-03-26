import { useToggle, upperFirst } from "@mantine/hooks";
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
import { useNavigate } from "react-router-dom";

export function LoginForm(props: PaperProps) {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  

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

    return (
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
                onSubmit={form.onSubmit(async (values) => {
                    const result = await API.login(
                        values.email,
                        values.password
                    );
                    console.log(result);

                    if (result?.status === 200) {
                        const userDetails = await API.getUser(
                            result.data.token
                        );
                        dispatch(login(userDetails));
                        navigate("/");
                    }
                })}
            >
                <Stack>
                    <TextInput
                        required
                        label="Email"
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
    );
}
