import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import back2 from './../public/images/back2.png'


const useStyles = makeStyles((theme)=>({
    rootContainer:{
        minWidth:'98vw',
        display:'flex',
        height:"600px",
        border:'1px solid black',
        flexDirection:'row'
    },
    
}))

const DashboardSnap = () => {
    const classes = useStyles()
    return (
        <div className={classes.rootContainer}>
            
        </div>
    )
}

export default DashboardSnap
