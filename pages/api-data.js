import Head from 'next/head'
import Navbar from '@components/Navbar'
import { Button } from '@material-ui/core'
import { Link } from '@material-ui/core'


function Apidata() {
    return (
        <div className="container">

          <Head>
            <title>Defi Data - About Us</title>
            <meta name="description" content="Defi Data privacy and data policy." />
            <link rel="icon" href="/favicon.ico" />
          </Head>

    
        
          <main>
          <div className='graph-box'>
            <div className="container joke"> 
              <h1>Fantastic data like this from a genuine API</h1>
                <img src="/funny_man.png" alt="Funny retro computer advert" width={375} height={409}/>
                <h2>Features such as <i>GET REQUEST</i> & <i>JSON</i> </h2>
                <h2>Full Service Coming Soon! *</h2>
                  <h3>Buy now or regret later</h3>
                    <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passhref>
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