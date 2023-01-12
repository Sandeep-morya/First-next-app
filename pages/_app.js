import { MantineProvider, Paper, } from "@mantine/core";
import { AppShell, Navbar, Header } from "@mantine/core";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS >
      <AppShell
        padding="md"
        navbar={
          <Nav />
        }
        header={
          <Header height={60} p="xs">
            <TopBar />
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
          <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}
