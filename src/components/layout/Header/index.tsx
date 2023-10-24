import { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from "@mui/material";
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
                    <HeaderProfile />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
