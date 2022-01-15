import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Grid,CssBaseline,Box,Typography,Link, useMediaQuery} from '@mui/material'
import AppBarDesktop from './../components/appBar/AppBarDesktop'
import AppBarMobile from './../components/appBar/AppBarMobile'
import Intro from './../components/Intro'


import { createTheme } from '@mui/material/styles';
import {makeStyles} from '@mui/styles'
import DashboardSnap from '../components/DashboardSnap'

const useStyles = makeStyles((theme)=>(
  {
    button:{
      "&:hover":{
        textDecoration:'none',color:'red'
      }
    }
  }
))


export default function Home() {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div  style={{width:"100%"}}>
      <Head>
        <title>NiceURL free url shortner</title>
        <meta name="description" content="Create custom short urls for free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Navigation bar */}
      {matches?  
      <AppBarMobile/>:
      <AppBarDesktop/>}

      {/*Home page */}
      <Intro/>

      {/*Dashboard snap */}
      <DashboardSnap/>
      
     
     

    </div>
  )
}
