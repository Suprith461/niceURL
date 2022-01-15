import React,{useState} from 'react'
import { Container, Typography, IconButton, ButtonBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


const useStyles=makeStyles((theme)=>({
    rootContainer:{
        minWidth:'100vw',
        height:'80px',
        
        display:'flex',
        flexDirection:'row'
    },
    titleContainer:{
        display:'flex',
        maxWidth:'300px',
        cursor:'pointer',
        alignItems:'center',
        
    },title:{
        fontSize:'25px',
        fontWeight:'800'
    },menuItem:{
        cursor:'pointer',
        "&:hover":{
            color:theme.theme_ui_colors_primary.main
        }
    },drawerItem:{
        width:'250px',
        display:'flex',
        justifyContent:'space-around',
        marginTop:"35px",
      
        padding:'20px 0px 20px 0px'
    },drawer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    drawerItem1:{
        width:'250px',
        display:'flex',
        justifyContent:'space-around',
      
        padding:'20px 0px 20px 0px'
    }
}))

const AppBarMobile = () => {
    const classes = useStyles()
    const [drawerOpen,setDrawerOpen] = useState(false)
    return (
        <Container className={classes.rootContainer}>
            <Container className={classes.titleContainer}>
                <ButtonBase>
                    <Typography className={classes.title}>niceURL</Typography>
                </ButtonBase>               
            </Container>

           
            <IconButton onClick={()=>{setDrawerOpen(true)}}><MenuIcon/></IconButton>

           
                <SwipeableDrawer
                    anchor={'left'}
                    open={drawerOpen}
                    onClose={()=>{setDrawerOpen(false)}}
                    onOpen={()=>{setDrawerOpen(true)}}
                    disableRestoreFocus
                    className={classes.drawer}
                >
                    <Container className={classes.drawerItem}><Typography className={classes.menuItem}>Home</Typography></Container>
                    <Container className={classes.drawerItem1}><Typography className={classes.menuItem}>Features</Typography></Container>
                    <Container className={classes.drawerItem1}><Typography className={classes.menuItem}>About</Typography></Container>
                    <Container className={classes.drawerItem1}><Typography className={classes.menuItem}>LogIn</Typography></Container>
                    <Container className={classes.drawerItem1}><Typography className={classes.menuItem}>SignUp</Typography></Container>
                    
                </SwipeableDrawer>
          
            
        </Container>
            
        
    )
}

export default AppBarMobile
