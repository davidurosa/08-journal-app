import { Box, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";

export const JournalLayout = ({children}) => {

    const drawerWhidth = 280;

  return (
    <Box sx={{display:'flex'}} className="animate__animated animate__fadeIn animate__faster">
        <Navbar drawerWhidth={drawerWhidth} />
        <Sidebar drawerWhidth={drawerWhidth}/>

        <Box component={'main'} sx={{flexGrow:1,padding:3}}>
            <Toolbar/>
        {children}
        </Box>
    </Box>
  )
}
