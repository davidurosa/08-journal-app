import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export const theme =createTheme({
    palette:{
        primary:{
            main:'#1E1420'
        },
        secondary:{
            main:'#01EDFF'
        },
        error:{
            main:red.A400
        }
    }
})