import React from 'react'
import { Typography ,Box,Button,Container} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    rootContainer:{
        display:'flex',
        flexDirection:'row',
        height:'80px',
        alignItems:'center',
        border:'1px solid black',
        minWidth:'98vw'
    }
    ,titleContainer:{
        display:'flex',
        flexWrap:'name',
        maxWidth:'300px',
        cursor:'pointer'
    },
    menuContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        maxWidth:'500px',
    },
    getStarted:{
        borderRadius:'20px',
        cursor:'pointer',
        border:'2px solid',
        fontWeight:'700',
        "&:hover":{
            backgroundColor:theme.palette.primary.main,
            color:'white',
            fontWeight:'700'
        }
    },
    menuItem:{
        cursor:'pointer',
        "&:hover":{
            color:theme.theme_ui_colors_primary.main
        }
    },
    title:{
        fontSize:'4vh',
        fontWeight:'800'
    }
}))

const AppBarDesktop = () => {
    const classes = useStyles()
    return (
        <Container className={classes.rootContainer} >
            {/*Title and logo */}
            <Container className={classes.titleContainer}>
                <Typography className={classes.title}>niceURL</Typography>
            </Container>
            {/*Menu items */}
            <Container className={classes.menuContainer}>
                <Typography className={classes.menuItem}>Home</Typography>
                <Typography className={classes.menuItem}>Features</Typography>
                <Typography className={classes.menuItem}>About</Typography>
                <Typography className={classes.menuItem}>LogIn</Typography>
                <Typography className={classes.menuItem}>SignUp</Typography>
            </Container>
            {/* Get Started button*/}
            <Button variant="outlined" className={classes.getStarted}>Get started</Button>

        </Container>
    )
}

export default AppBarDesktop
