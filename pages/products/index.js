import { SimpleGrid } from "@mantine/core";
import axios from "axios";
import React from "react";
import ProductCard from "../../components/ProductCard";

const Products = ({ data }) => {
  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: 1050, cols: 3, spacing: "md" },
        { minWidth: 768, cols: 2, spacing: "sm" },
        { minWidth: 550, cols: 1, spacing: "sm" },
      ]}
      spacing="xl"
    >
      {data.map(
        ({
          id,
          thumbnail,
          title,
          description,
          brand,
          price,
          rating,
          discountPercentage,
        }) => (
          <ProductCard
            key={id}
            {...{
              id,
              thumbnail,
              title,
              description,
              brand,
              price,
              rating,
              discountPercentage,
            }}
          />
        )
      )}
    </SimpleGrid>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:8080/products`);
  return {
    props: { data },
  };
};

export default Products;
