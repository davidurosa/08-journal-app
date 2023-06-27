import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({ drawerWhidth }) => {

  const {notes} = useSelector(store => store.journal);
  const {displayName} = useSelector((store)=>store.auth);


  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWhidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{ display: { xs: "block" },
                '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWhidth}
    }}
      >
        <Toolbar>
            <Typography variant="h6" noWrap component={'div'}>{displayName}</Typography>
        </Toolbar>
        <Divider/>
        <List>
            {
                notes.map(note=>(
                  <SidebarItem key={note.id} note={note}/>
                ))
            }
        </List>

      </Drawer>
    </Box>
  );
};
