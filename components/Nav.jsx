import React from "react";
import { Stack, NavLink, Title, Navbar } from "@mantine/core";
import {
  IconHome,
  IconPackage,
  IconTag,
  IconUser,
  IconInfoCircle,
  IconBrandProducthunt
} from "@tabler/icons";
import { useRouter } from "next/router";

const Nav = () => {
  const Router = useRouter();
  const links = [
    {
      label: "Home",
      pathname: "/",
      icon: <IconHome size={25} stroke={2} />,
    },
    {
      label: "Posts (CSR)",
      pathname: "/posts",
      icon: <IconPackage size={25} stroke={2} />,
    },
    {
      label: "Todos",
      pathname: "/todos",
      icon: <IconTag size={25} stroke={2} />,
    },
    {
      label: "Products (SSR)",
      pathname: "/products",
      icon: <IconBrandProducthunt size={25} stroke={2} />,
    },
    {
      label: "Contributers (SSG with SP)",
      pathname: "/static/users",
      icon: <IconUser size={25} stroke={2} />,
    },
    {
      label: "About",
      pathname: "/about",
      icon: <IconInfoCircle size={25} stroke={2} />,
    },
  ];
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section>
        {links.map((link) => (
          <NavLink
            key={link.pathname}
            label={<Title order={5}>{link.label}</Title>}
            p="1rem"
            variant="light"
            active={Router.asPath === link.pathname}
            icon={link.icon}
            onClick={() => Router.push(link.pathname)}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
};

export default Nav;
