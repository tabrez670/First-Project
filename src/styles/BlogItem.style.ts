import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        marginBottom: theme.spacing.md,
        // maxWidth: rem(280),
        // minWidth: rem(280),
        width: rem(280),
        // maxHeight: rem(310),
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        position: "relative",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        "&:hover": {
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.2s ease-in-out 0s !important  ",
        },
    },
    trend: {
        position: "absolute",
        top: theme.spacing.xs,
        right: rem(12),
        pointerEvents: "none",
        boxShadow: theme.shadows.sm,
    },

    title: {
        display: "block",
        marginTop: theme.spacing.md,
        marginBottom: rem(5),
    },
    footer: {
        marginTop: theme.spacing.md,
    },
}));
