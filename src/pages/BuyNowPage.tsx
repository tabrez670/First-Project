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

export function BuyNowPage(props: PaperProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.user);


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
                        Buy Now
                    </Text>

                    <Divider
                        label="Purchase the product...?"
                        labelPosition="center"
                        my="lg"
                    />

                    <Paper
                      
                    >
                        <Stack>
                            <h1>Thank You</h1>
                        </Stack>
                        <Group position="right" mt="xl">
                            <Button onClick={()=>{
                                 notifications.show({
                                    id: "product",
                                    title: "Purchased Successfully",
                                    message: " Redirecting to homepage",
                                    color: "cyan",
                                    icon: <IconX size={24} />,
                                    autoClose: 5000,
                                    loading: true,
                                });
                                navigate(Pages.BLOG)
                            }} 
                             radius="xl">
                                Proceed
                            </Button>
                        </Group>
                    </Paper>
                </Paper>
            </Container>
        </>
    );
}
