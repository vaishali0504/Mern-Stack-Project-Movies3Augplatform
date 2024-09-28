
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, sliderClasses, useScrollTrigger } from "@mui/material";
import React, { cloneElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { themeModes } from "../../configs/theme.configs";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Sidebar from "./Sidebar";
import AuthModal from "./AuthModal";

const ScrollAppBar = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined
  });

  return cloneElement(children, {
    sx: {
      color: trigger ? "text.primary" : "" === themeModes.dark ? "primary.contrastText" : "text.primary",
      backgroundColor: trigger ? "background.paper" : "" === themeModes.dark ? "transparent" : "background.paper"
    }
  });
};
const Topbar = ({ user, setUser }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} user={user} setUser={setUser} />
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>

              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <Logo />
              </Box>
            </Stack>
            <Box flexGrow={1} alignItems="center" display={{ xs: "none", md: "flex" }}>
              <Box sx={{ marginRight: "30px" }}>
                <Logo />
              </Box>
              {
                menuConfigs.main.map((item, index) => (
                  <Button onClick={() => { setActivePage(index) }}
                    key={index}
                    sx={{
                      color: "black",
                      mr: 2,
                      fontWeight: "bold"
                    }}
                    component={Link}
                    to={item.path}
                    variant={activePage === index ? "contained" : "text"}
                  >
                    {item.display}
                  </Button>
                ))}
            </Box>

            <Stack spacing={3} direction="row" alignItems="center">
              {!user ?
                <Button
                  variant="contained"
                  onClick={() => setAuthModalOpen(true)}>
                  sign in
                </Button>
                :
                <UserMenu user={user} setUser={setUser} />}
            </Stack>

            {authModalOpen &&
              <AuthModal
                user={user}
                setUser={setUser}
                authModalOpen={authModalOpen}
                setAuthModalOpen={setAuthModalOpen}
              />
            }
          </Toolbar>
        </AppBar>
      </ScrollAppBar >
    </div>
  )
}

export default Topbar;