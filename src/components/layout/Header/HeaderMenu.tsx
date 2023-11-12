import { useState } from "react";
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages: { label: string; path: string; disabled?: boolean }[] = [
  { label: "공부하기", path: "/study" },
  { label: "모의시험", path: "/test" },
  { label: "공지사항", path: "/notice" },
]; // TEST, GAME, RANKING 등 추가

export const HeaderMenu = ({ isXs = false }: { isXs?: boolean }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (!isXs) {
    const navButtons = pages.map((page) => (
      <Button
        key={page.label}
        href={page.path}
        onClick={handleCloseNavMenu}
        disabled={page.disabled}
        sx={{
          my: 2,
          color: "white",
          display: "block",
        }}
      >
        {page.label}
      </Button>
    ));

    return (
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        {navButtons}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-app-bar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-app-bar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => {
          const isCurrentPath = page.path === location.pathname;

          return (
            <MenuItem
              key={page.label}
              onClick={handleCloseNavMenu}
              disabled={page?.disabled}
              sx={{
                backgroundColor: isCurrentPath ? "primary.main" : "inherit",
              }}
            >
              <Typography
                component="a"
                textAlign="center"
                href={isCurrentPath ? undefined : page.path}
                color={isCurrentPath ? "white" : "inherit"}
              >
                {page.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
