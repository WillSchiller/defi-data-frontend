import Head from 'next/head'
import Navbar from '@components/Navbar'
import Link from 'next/link'
import Footer from '@components/Footer'

function About() {
    return (
        <div className="container">

          <Head>
            <title>Defi Data - About Us</title>
            <meta name="description" content="Defi Data privacy and data policy." />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Sora:wght@700&display=swap" rel="stylesheet" />
          </Head>

          <Navbar/>
        
          <main>
            <div className="light-header"> 
         
                  <h1>DefiData V2 is coming.</h1>
                    <p>We have been busy working out the next steps to make DefiData V2. Check out the <Link href="/defidata2.0.pdf" ><a target="_blank" >deck</a></Link>. We will be launching a Discord soon and starting to build out the new features with the help of the community.</p>
                  <h2>Privacy: We don’t track you.</h2>
                    <p>We don’t use trackers, cookies or pixels on our site. We have a minimal analytics setup that consists of Google Search Console & Netlify Analytics.</p>
                    <p>Google Search Console Reports are based on information Google collects about you when you use Google. This data would be collected regardless of Defi Data. The data we have access to is aggregregated and devoid of personal identifiable information. We use this data to better match our services to what people are searching for.</p>
                    <p>We use Netlify Analytics to make minimal use of log files to see request frequencies with basic geographical segmentation (I.E. country level). This helps us to monitor internet traffic and bots hitting our servers.</p>
                    <p>Our analytics setup is minimal not out of a moral duty but because we believe the best way to grow is to focus on our products and services.</p>
                    <p>We hope you enjoy this site & feel free to contact us with any feedback, suggestions or ideas.</p>
                    <br/>
                  <h2>Data: This is an alpha product</h2>
                    <p>Defi Data provides data for educational & research purposes. Trends, reports, metrics and analysis are not intended as investment advice.</p>
                    <p>Please be aware Data & the software underpinning it is experimental and in alpha release. We do our best to ensure accuracy and availability of data but it should be noted that the current services offered are “as is” without guarantee of up time or accuracy.</p>
                    &nbsp;
            
                </div>
           
          </main>
        </div>
    )
}
  

export default About