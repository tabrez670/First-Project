import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        marginBottom: theme.spacing.md,
        maxWidth: rem(280),
        // maxHeight: rem(310),
        position: "relative",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
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
