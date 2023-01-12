import React from "react";
import {  Button, Flex } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons";
import Image from "next/image";
const TopBar = () => {
  return (
    <Flex justify={"space-between"}>
      <Image
        width={170}
        height={50}
        src={
          "https://lumiere-a.akamaihd.net/v1/images/pp_avatar_thewayofwater_logo_97_b382cbde.png"
        }
        priority
        alt={"icon"}
      />
      <Button variant="solid" leftIcon={<IconUserCircle size={25} />}>
        Login
      </Button>
    </Flex>
  );
};

export default TopBar;
