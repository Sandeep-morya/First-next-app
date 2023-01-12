import React from "react";
import { Carousel } from "@mantine/carousel";
import {
  Stack,
  Flex,
  Image,
  Text,
  Title,
  Badge,
  Space,
  Button,
} from "@mantine/core";
import {
  IconShoppingBag,
  IconShoppingCart,
  IconHeart,
  IconCurrencyRupee,
  IconStar,
} from "@tabler/icons";

const SingleProduct = ({ data }) => {
  const {
    images,
    title,
    description,
    brand,
    price,
    rating,
    discountPercentage,
  } = data;
  console.log(images);
  return (
    <Stack align={"start"} spacing={"xs"}>
      <Carousel
        withIndicators
        height={400}
        slideSize="33.333333%"
        slideGap="md"
        style={{boxShadow:'0 0 5px black'}}
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        mx={5}
      >
        {images.map((e, i) => (
          <Carousel.Slide key={e + i}>
            <Image height={400} src={e} alt="" />
          </Carousel.Slide>
        ))}
      </Carousel>

     

      <Badge mt={'2rem'} p='sm' variant="filled">{brand}</Badge>

      <Title order={2}>{title}</Title>

      <Text c="dimmed">{description}</Text>
      <Flex align={"center"}>
        <Title order={3} c="blue">
          Price:
        </Title>
        <Space w="xs" />
        <IconCurrencyRupee /* color="royalblue" */ size={35} />
        <Title c="blue">{price}</Title>
        <Space w="xs" />
        <Title order={5} td="line-through">
          {+Math.floor(price + (price * discountPercentage) / 100)}
        </Title>
      </Flex>
      <Flex align={"center"}>
        <Title order={5}>Discount:</Title>
        <Title order={5}>{discountPercentage} %</Title>
      </Flex>
      <Flex align={"center"} gap="xs">
        <Title order={5}>Rating:</Title>
        {new Array(Math.floor(rating)).fill().map((_, i) => (
          <IconStar key={i} color="orange" size={14} />
        ))}
      </Flex>

      <Flex style={{ width: "100%" }} justify="space-between">
        <Button radius="md" size="lg" leftIcon={<IconShoppingBag />}>
          Purchase Now
        </Button>
        <Button
          variant="light"
          radius="md"
          size="lg"
          color='orange'
          leftIcon={<IconShoppingCart />}
        >
          Add to Cart
        </Button>
        <Button color={'red'}  variant="outline" radius="md" size="lg" leftIcon={<IconHeart />}>
          Add to WishList
        </Button>
      </Flex>
    </Stack>
  );
};

export default SingleProduct;

/**
* {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
}
*/
