import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#EA3A60',
    },
    secondary: {
      main: '#2563FF',
    },
    error: {
      main: red.A400,
    },
    
  },theme_ui_colors_text:{
    main:"#343D48"
},
theme_ui_colors_text_secondary:{
    main:"#02073E"
},
theme_ui_colors_heading:{
    main:"#0F2137"
},
theme_ui_colors_heading_secondary: {
    main:"#0F2137"
},
theme_ui_colors_background: {
    main:"#FFFFFF"
},
theme_ui_colors_background_secondary: {
    main:"#F9FBFD"
},
theme_ui_colors_border_color: {
    main:"#E5ECF4"
},
theme_ui_colors_yellow: {
    main:"#FFA740"
},
theme_ui_colors_primary: {
    main:"#EA3A60"
},
theme_ui_colors_secondary:{
    main:"#2563FF"
},
theme_ui_colors_muted: {
    main:"#E4E4E4"
},
theme_ui_colors_accent:{
    main:"#609"
},

background_color:{
    main:"#FFFFFF"
},typography: {
    "fontFamily": `"DM Sans", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export default theme;