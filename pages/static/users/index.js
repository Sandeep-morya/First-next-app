import { SimpleGrid } from "@mantine/core";
import axios from "axios";
import React from "react";
import SingleUser from "../../../components/SingleUser";

const Users = ({ data }) => {
  return (
    <SimpleGrid 
      breakpoints={[
        { minWidth: 1050, cols: 3, spacing: "md" },
        { minWidth: 768, cols: 2, spacing: "sm" },
        { minWidth: 550, cols: 1, spacing: "sm" },
      ]} 
    >
      {data.map((user) => (
        <SingleUser key={user.id} data={user} dim={225} click={true} />
      ))}
    </SimpleGrid> 
  );
};

export default Users;

export async function getStaticProps() {
  const { data } = await axios(`http://localhost:8080/users`);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

