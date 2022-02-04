import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@components/Navbar'


function Machinelearning() {
    return (
        <div className="container">
          <Head>
            <title>Defi Data - About Us</title>
            <meta name="description" content="Defi Data privacy and data policy." />
            <link rel="icon" href="/favicon.ico" />
          </Head>

        
        <main>
        
          <div className="container">
          <div className='graph-box'>
            <div className='content'>
            
              <h1>Machine Learning Models</h1>
                <p>Defi Data has collected +50 million of rows of twitter frequency and sentiment data across the top 400 tokens. This equates to about 9 full months of data at minute resolution. 
                  The dataset will be used to run ML experiments and build models to correlate price with twitter volume and sentiment metrics. 
                  Other research paper have shown a 62.48% prediction accuracy for bitcoin. However bitcoin has high liquidity, many institutional player and an established market. We aim to look at less liquid token that are less wellknow to find out if twitter has a larger effect in these markets. 
                  Training across multiple markets it maybe possible for a model to express more complexity. I.E. Not just correlate twitter activity to price but also type of market and sensitivity to Twitter activity.   </p>
              
                
            </div>
             
          </div>
          <Image placeHolder="blur" src="/fall_out.webp" width={687} height={683} alt="Mr Gusty - Fallout 3" />    
          </div>

        </main>

      </div>

    )

  }
  

  export default Machinelearning