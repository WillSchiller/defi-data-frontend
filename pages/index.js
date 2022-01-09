import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { Button } from '@material-ui/core'
import { Link } from '@material-ui/core'





export default function Home() {



    return (

    

      <div className="container">
        <Head>
          <title>Defi Data - Crypto Twitter Data API</title>
          <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics.">
          <link rel="icon" href="/favicon.ico" />
          
          
        </Head>
        <Navbar/>
        
        <div className="content">
        <main>
          <Header title="Twitter Alerts for Crypto - Coming Soon!" />
          <p className="description">
          Join the&nbsp;
          <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passHref>
          <Button variant="outlined" color="primary">Alpha Wait List</Button>
          </Link> 
          &nbsp;&#128293; &#128293; &#128293; 
          </p>
    
        </main>
        </div>
      </div>
    )




}
    
