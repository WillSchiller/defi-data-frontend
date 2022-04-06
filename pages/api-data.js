import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@material-ui/core'


function Apidata() {
    return (
        <div className="container">

          <Head>
            <title>Defi Data - API for Crypto Twitter Data & Trends</title>
            <meta name="description" content="Crypto data for automated trading, market making, MEV & arbitrage." />
            <link rel="icon" href="/favicon.ico" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Sora:wght@700&display=swap" rel="stylesheet" />
          </Head>

    
        
          <main>
          <div className='graph-box'>
            <div className="container joke"> 
              <h1>Fantastic data like this from a genuine API</h1>
                <Image src="/funny_man.png" alt="Funny retro computer advert" width={375} height={409}/>
                <h2>Features such as <i>GET REQUEST</i> & <i>JSON</i> </h2>
                <h2>Full Service Coming Soon! *</h2>
                  <h3>Buy now or regret later</h3>
                    <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passHref>
                      <Button variant="outlined" color="primary">Alpha Wait List</Button>
                    </Link> 
                    &nbsp;&#128293; &#128293; &#128293; 
                    <p>* Actual launch date might not actually be soon. ** </p>
                    <p className="small_joke"> ** Subject to inflation, pandemics and/or other factors that may affect launch date. </p>
                </div>
                </div>
            </main>
        </div>

    )

  }

  
  export default Apidata