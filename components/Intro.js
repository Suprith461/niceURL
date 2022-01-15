import React from 'react';
import { Typography, Container,ButtonBase } from '@mui/material';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    rootContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        border:'1px solid black',
        height:'600px',
        minWidth:'98vw'
        
    },
    heading:{
        color:theme.theme_ui_colors_heading.main,
        fontSize:'58px',
        fontWeight:'700',
        [theme.breakpoints.down('800')]:{
            fontSize:'25px'
        }
    },
    description:{
        fontSize:'20px',
        maxWidth:'600px',
        textAlign:'center',
        
    },
    explore:{
        backgroundColor:theme.palette.primary.main,
        color:'white',
        fontWeight:'500',
        padding:'15px 40px 15px 40px',
        borderRadius:'25px',
        fontSize:'18px',
        marginTop:'20px'
    }
}))

const Intro = () => {
    const classes = useStyles()
    return (
        <Container className={classes.rootContainer}>
            
                <Typography variant="h1" className={classes.heading}>URL shortner</Typography>
                <Typography variant="h1" className={classes.heading}>Create custom short URL's</Typography>
                <Typography className={classes.description}>niceURL is a free tool to shorten a URL or reduce a link
                    Use our URL Shortener to create a shortened link making it easy to remember</Typography>
        
                <ButtonBase className={classes.explore}>Explore</ButtonBase>
        </Container>
    )
}

export default Intro
