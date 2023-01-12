import React from "react";
import { useRouter } from "next/router";
import { Paper, Image, Text } from "@mantine/core";
const SingleUser = ({ data, dim, click }) => {
  const Router = useRouter();
  return (
    <Paper
      style={{
        display: "grid",
        placeItems: "center",
      }}
      withBorder
      radius="md"
      p={"1rem"}
      shadow={"md"}
      onClick={
        click ? () => Router.push(Router.pathname + "/" + data.id) : () => false
      }
    >
      <Image
        radius="md"
        src={data.avatar}
        alt={data.title}
        width={dim}
        height={dim}
      />
      <Text size="xl" weight={500} mt="md">
        {data.first_name} {data.last_name}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {data.email}
      </Text>
    </Paper>
  );
};

export default SingleUser;
