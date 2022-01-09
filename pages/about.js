import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import { Button } from '@material-ui/core'
import { Link } from '@material-ui/core'

function About() {
    return (
        <div className="container">
        <Head>
        <title>Defi Data - About Us</title>
          <meta name="description" content="Defi Data privacy and data policy." />
          <link rel="icon" href="/favicon.ico" />
          
          
        </Head>
        <Navbar/>
        
        <main>
        <div className="container"> 
            <div className='content'>
    
            <h1>Privacy: We don’t track you.</h1>
            <p>
            We don’t use trackers, cookies or pixels on our site. We have a minimal analytics setup that consists of Google Search Console & Netlify Analytics. 
            </p>
            <p>
            Google Search Console Reports are based on information Google collects about you when you use Google. This data would be collected regardless of Defi Data. The data we have access to is aggregregated and devoid of personal identifiable information. We use this data to better match our services to what people are searching for. 
            </p>
            <p>
            We use Netlify Analytics to make minimal use of log files to see request frequencies with basic geographical segmentation (I.E. country level). This helps us to monitor internet traffic and bots hitting our servers. 
            </p>
            <p>
            Our analytics setup is minimal not out of a moral duty but because we believe the best way to grow is to focus on our products and services.
            </p>
            <p>
            We hope you enjoy this site & feel free to contact us with any feedback, suggestions or ideas. 
           
            </p>
            <br/>
            <h2>Data: This is an alpha product</h2>
            <p>
            Defi Data provides data for educational & research purposes. Trends, reports, metrics and analysis are not intended as investment advice. 
            </p>
            <p>
            
            Please be aware Data & the software underpinning it is experimental and in alpha release. We do our best to ensure accuracy and availability of data but it should be noted that the current services offered are “as is” without guarantee of up time or accuracy.
            </p>
        


            </div>
            </div>
          
     

    
        </main>

      </div>



    )
  }
  
  export default About