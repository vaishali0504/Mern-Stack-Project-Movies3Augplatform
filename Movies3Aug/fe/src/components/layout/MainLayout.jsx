/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";
import AuthModal from "../common/AuthModal";
import { useEffect } from "react";
import userApi from "../../api/modules/user.api";

const MainLayout = ({ user, setUser }) => {

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.getInfo();
      if (response) setUser(response);
      if (err) setUser(null);
    }
    authUser();
  }, []);

  return (
    <Box>
      <GlobalLoading />
      <AuthModal user={user} setUser={setUser} />
      <Box display="flex" minHeight="100vh">
        <Topbar user={user} setUser={setUser} />
        <Box
          component="main"
          flexGrow={1}
          overflow="hidden"
          minHeight="100vh"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;