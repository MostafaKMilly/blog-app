"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Box,
  ListItemButton,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        color="inherit"
        onClick={handleDrawerToggle}
        sx={{ alignSelf: "flex-end", p: 2 }}
      >
        <CloseIcon />
      </IconButton>

      <List
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
        onClick={handleDrawerToggle}
        role="presentation"
      >
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            href={item.href}
            sx={{
              textAlign: "center",
              py: 2,
              maxHeight: "47px",
              width: "100%",
              transition: "background-color 0.3s, color 0.3s",
              bgcolor: pathname === item.href ? "white" : "transparent",
              color: pathname === item.href ? "black" : "primary.contrastText",
              "&:hover": {
                bgcolor: "white",
                color: "black",
              },
            }}
          >
            <ListItemText primary={item.label} sx={{ fontSize: "1.5rem" }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "blogNav.background" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
            <Typography
              variant="h6"
              color="blogNav.contrastText"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <Image src="/images/logo.svg" width={24} height={24} alt="Logo" />
              Mostafa Blog
            </Typography>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  href={item.href}
                  sx={{
                    textTransform: "none",
                    fontSize: "1rem",
                    bgcolor: pathname === item.href ? "white" : "transparent",
                    color: pathname === item.href ? "black" : "inherit",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                    margin: "0 8px",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              sx={{
                display: {
                  xs: "inline-flex",
                  md: "none",
                },
              }}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw",
            height: "100vh",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
