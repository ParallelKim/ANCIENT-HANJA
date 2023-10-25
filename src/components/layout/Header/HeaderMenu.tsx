import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const pages = [
    { label: "Study", path: "/study", disabled: false },
    { label: "Test", path: "/test", disabled: true },
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
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                }}
            >
                {pages.map((page) => (
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
                ))}
            </Box>
        );
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
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
                {pages.map((page) => (
                    <MenuItem
                        key={page.label}
                        onClick={handleCloseNavMenu}
                        disabled={page.disabled}
                    >
                        <Typography
                            component="a"
                            textAlign="center"
                            href={page.path}
                            color="primary.main"
                        >
                            {page.label}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
