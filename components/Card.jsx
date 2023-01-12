import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconFlower } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.blue[6],
        theme.colors.cyan[6]
      ),
    },
  },
}));

export function CardGradient({ id, title, body }) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "blue", to: "cyan" }}
      >
        <IconFlower size={28} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {id + " - " + title.slice(0, 20)}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {body.slice(0, 100)}
      </Text>
    </Paper>
  );
}
