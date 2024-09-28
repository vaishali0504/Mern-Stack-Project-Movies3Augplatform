import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { Box } from "@mui/material"

const UserMenu = ({ user, setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleMenu = (e) => setAnchorEl(e.currentTarget);

  return (
    <Box>
      {user && (
        <Box>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", userSelect: "none", fontWeight: "700", fontFamily: "cursive" }}
            onClick={toggleMenu}
          >
            {user.displayName}
          </Typography>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { padding: 0 } }}
          >
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onClick={() => setAnchorEl(null)} >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText disableTypography primary={<Typography textTransform="uppercase">{item.display}</Typography>} />
              </ListItemButton>
            ))}
            <ListItemButton
              sx={{ borderRadius: "10px" }}
              onClick={() => setUser(null)}
            >
              <ListItemIcon><LogoutOutlinedIcon /></ListItemIcon>
              <ListItemText disableTypography primary={
                <Typography textTransform="uppercase">sign out</Typography>
              } />
            </ListItemButton>
          </Menu>
        </Box>
      )
      }
    </Box>
  )
};
export default UserMenu;