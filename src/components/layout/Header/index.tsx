import { AppBar, Toolbar, Container } from "@mui/material";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderProfile } from "./HeaderProfile";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HeaderTitle />
          <HeaderMenu isXs />
          <HeaderTitle isXs />
          <HeaderMenu />
          {/* <HeaderProfile /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
