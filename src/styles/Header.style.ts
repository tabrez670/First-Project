import { createStyles, rem } from "@mantine/core";

export const HEADER_HEIGHT = rem(60);

export const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    user: {
        display: "block",
        lineHeight: 1,
        margin: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.md,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },
}));