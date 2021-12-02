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
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <Navbar/>
        <Line/>
        <main>
          <Header title="Twitter Analytics for Crypto - Coming Soon!" />
          <p className="description">
            Join the <a href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft">Alpha Wait List</a> 
          </p>
    
        </main>
  
        <Footer />
      </div>
    )




}
    
