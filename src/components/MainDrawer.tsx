import { styled } from '@mui/material/styles';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from 'react';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
display: 'flex',
alignItems: 'center',
padding: theme.spacing(0, 1),
// necessary for content to be below app bar
...theme.mixins.toolbar,
justifyContent: 'flex-end',
}));

export const MainDrawer = ({handleDrawerClose, open }:any) => {

    return (
        <Drawer
        sx={{
            zIndex:99,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'black',
            // color:'white',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />

        <List>
          {['Recruitment & Selection', 'Compensation & Benefits', 'Onboarding', 'Offboarding', 'Learning & Development'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:"#999"}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{color:"white"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{borderColor:"rgba(255,255,255,.4)"}} />
        <List>
          {['PIE Portal', 'Ask a question'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:"#999"}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{color:"white"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}