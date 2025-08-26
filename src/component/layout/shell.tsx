import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import SideBar from "@/component/layout/sidebar";

const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{
        height: { base: 60, sm: 0 },
      }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header hiddenFrom="sm">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>

      <AppShell.Navbar>
        <SideBar />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};

export default Shell;
