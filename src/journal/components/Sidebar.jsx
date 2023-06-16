import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Sidebar = ({ drawerWhidth }) => {
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
            <Typography variant="h6" noWrap component={'div'}>David Urosa</Typography>
        </Toolbar>
        <Divider/>
        <List>
            {
                ['Enero','Febrero','Marzo','Abril'].map(item=>(
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid>
                                <ListItemText primary={item}/>
                                <ListItemText secondary='Lorem, ipsum dolor sit amet'/>

                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>

      </Drawer>
    </Box>
  );
};
