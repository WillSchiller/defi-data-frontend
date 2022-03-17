import Head from 'next/head'
import Navbar from '@components/Navbar'
import Link from 'next/link'
import { CenterFocusStrong } from '@material-ui/icons'



function Machinelearning() {
    return (
        <div className="container">
          <Head>
            <title>Defi Data - Machine Learning</title>
            <meta name="description" content="Machine learning project that uses Twitter data to predict price movements." />
            <link rel="icon" href="/favicon.ico" />
          </Head>

        
        <main>
        <div className='dark-header'>

        <h1 className='hero'>ML-001</h1>
        <h2> Comming Soon..</h2>

        </div>
          <div className="container">
            
          
         
            <div className='content'>
            
              <h1>Machine Learning Models</h1>
                <p>Defi Data has collected +50 million of rows of twitter frequency and sentiment data across the top 400 tokens. This equates to about 9 full months of data at minute resolution. 
                  This dataset will be used to run ML experiments and build models to correlate price with twitter volume and sentiment metrics. 
                  </p>
                  <p>
                  <Link href="https://arxiv.org/pdf/1610.09225.pdf"><a>Research</a></Link> has shown around 70% prediction accuracy for bitcoin. However bitcoin is highly liquiditywith many institutional players. 
                  We aim to look at lesser known tokens in less liquid markets to find out if twitter has a larger effect in these markets. Our hypothesis is that these mascent tokens are largely driven by online culture & small community. </p>
                  <p>
                  While most projects focus on a single market we will aim to train across multiple markets in that aim that a model can potentially expres not only tweets to price but consider type of market (volume, market cap, volatility etc).   
                  
                  </p>
                  &nbsp;
                
                  <div className='graph-box' style={{textAlign: 'center'}}>

                  <p>Sign up to stay up to date <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passhref>
                      <a className='button'>SIGN UP HERE</a></Link></p>

                  </div>
                  
                
              
        
             
          </div>
          
          </div>

        </main>
  
      </div>

    )

  }
  

  export default Machinelearning