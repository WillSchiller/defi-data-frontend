import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Line from '@components/line'
import Stats from '@components/Stats'





export default function Home() {

  
  
  

    return (
      <div className="container">
        <Head>
          <title>Defi Data - Crypto Alerts from Twitter</title>
          <link rel="icon" href="/favicon.ico" />
          
          
        </Head>
        <Navbar/>
        
        <div className="centerdiv">
        <main>
          <Header title="Twitter Alerts for Crypto - Coming Soon!" />
          <p className="description">
            Join the <a target="blank" href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft">Alpha Wait List</a> &#128293; &#128293; &#128293; 
          </p>
    
        </main>
        </div>
        <Footer/>
      </div>
    )




}
    
