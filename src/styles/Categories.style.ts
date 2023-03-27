import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "auto",
        overflowY: "hidden",
        width: "100%",
    },
    btn: {
        // color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        margin: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },
}));
