import { AppBar, Toolbar, Container } from "@mui/material";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderMenu } from "./HeaderMenu";
// import { HeaderProfile } from "./HeaderProfile";
import { ToggleNotiButton } from "./ToggleNotiButton";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <HeaderTitle />
          <HeaderMenu isXs />
          <HeaderTitle isXs />
          <HeaderMenu />
          {/* <HeaderProfile /> */}
          <ToggleNotiButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
