import { IconHeart } from "@tabler/icons";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  Flex,
  Space,
} from "@mantine/core";
import { IconShoppingBag, IconCurrencyRupee, IconStar } from "@tabler/icons";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "Column",
    justifyContent: "space-between",
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

export default function ProductCard({
  id,
  thumbnail,
  title,
  description,
  brand,
  price,
  rating,
  discountPercentage,
}) {
  const { classes, theme } = useStyles();
  const Router = useRouter();
  const [favourite, setFavourite] = useState(false);

  const handleWishList = () => {
    setFavourite(!favourite);
  };

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      className={classes.card}
      //   style={{ boxShadow: "0 0 10px black" }}
      shadow="xl"
    >
      <Card.Section
        onClick={() => Router.push({ pathname: `/products/${id}` })}
      >
        <Image src={thumbnail} alt={title} height={200} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{brand}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Flex mt="xs" justify={"space-between"}>
          <Flex align={"center"} >
            <IconCurrencyRupee color="blue" size={18} />
            <Text c='blue' fw={500}>{price}</Text>
            <Space w="xs" />
            <Text fz="xs" td="line-through">
              {+Math.floor(price + (price * discountPercentage) / 100)}
            </Text>
          </Flex>
          <Flex align={"center"} gap="xs">
            <Text>{rating}</Text>
            <IconStar color="orange" size={14} />
          </Flex>
        </Flex>

        <Group mt="xs">
          <Button
            radius="md"
            style={{ flex: 1 }}
            leftIcon={<IconShoppingBag />}
          >
            Add to Shopping Bag
          </Button>
          <ActionIcon radius="md" size={36} onClick={handleWishList}>
            <IconHeart
              Tooltip="hi"
              size={18}
              fill={
                favourite
                  ? "red"
                  : theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.colors.gray[0]
              }
              className={classes.like}
              stroke={2}
            />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
}
