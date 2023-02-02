
import Box from '@mui/material/Box';

import { useTheme } from '@emotion/react';
import { useState } from 'react';

import { MainCards } from '../src/components/MainCards';
import { MainHeader } from '../src/components/MainHeader';
import { MainDrawer } from '../src/components/MainDrawer';
import { Chip, CssBaseline, Typography } from '@mui/material';



export default function Wireframe() {
    const theme = useTheme();
  const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
      };
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };


  return (
    <>
        <Box sx={{ flexGrow: 1, display:"flex", flexDirection:"column" }}>
            <CssBaseline />
            <MainHeader handleDrawerOpen={handleDrawerToggle} />
  
            <MainDrawer handleDrawerClose={handleDrawerClose} open={open} />
            <Box pt={8}>
                <Box p={2} alignContent="center" alignItems="center" display="flex" flexDirection="column" >
                    <Typography variant='h3' p={4}>  Hello, May I help you?</Typography>
              
                <Box bgcolor="#eee" p={1} borderRadius={2} width="80%" maxWidth="800px"><select></select><input></input><button>Search</button></Box>
                <Box display="flex" alignItems="center" gap={1} p={2}>Suggestions: <Chip size='small' onClick={console.log} label="vacations" /> <Chip size='small' onClick={console.log} label="extra hours" /> <Chip onClick={console.log} size='small' label="change password" /></Box>
                </Box>
                <MainCards />

                {/* <iframe style={{width:'100%', height:'500px'}} src='https://10az.online.tableau.com/t/nimbo/views/TEst1/Sheet1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=y'></iframe>
                 */}
            </Box>
        </Box>


      </>
  );
}
