import { styled, alpha } from '@mui/material/styles';
import { AppBar, IconButton, InputBase, Toolbar, Typography } from "@mui/material"
import Image from "next/image"

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
export const MainHeader = ({handleDrawerOpen}:{handleDrawerOpen:() => void}) => {
    return (
        <AppBar position="fixed" sx={{zIndex:100}}>
        <Toolbar>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    onClick={handleDrawerOpen}
    aria-label="open drawer"
    sx={{ mr: 2 }}
  >
    <MenuIcon />
  </IconButton>
  <Image src="./WDC.Logo.12.Color.I.svg" height="100" alt='Western Digital' width="350" style={{
    marginTop:"-10px",
    marginBottom:"-15px",
    marginRight:"-30px",
    marginLeft:"-50px",
  }} />
  <Typography
    variant="h5"
    noWrap
    component="div"
    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } , fontWeight:'bold', fontSize:"28px", marginBottom:"5px"}}
  >
    | HR Ops
  </Typography>
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
</Toolbar>
</AppBar>
    )
}