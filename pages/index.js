import Head from 'next/head'
import Trending from '@components/charts/Trending'
import Volatile from '@components/charts/Volatile'
import Decreasing from '@components/charts/Decreasing'
import History from '@components/charts/History'
import React, { Component } from "react"
import Link from 'next/link'




export default function Home() {

    return (
      <div className='container'>

<Head>
              <title>Defi Data - Crypto Twitter Data & API</title>
              <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics." /> 
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>

          <div className='dark-header'>
            <h1 className='hero'>DEFI ANALYTICS</h1>
                
                <div className='row content'>
                    <div className='info-box aqua-border'>
                        <p><b>ANALYTICS</b></p>
                        <p>Free Crypto Twitter dashboards updated hourly.</p>
                        <p><Link href="#dashboard"><a className='button aqua'>DASHBAORD</a></Link></p>
                    </div>
                <div className='info-box purple-border'>
                    <p><b>DATA</b></p>
                    <p>Rest API for Developers and automated trading</p>
                    <p><Link href="/api-data"><a className='button purple'>API</a></Link></p>
                </div>
                <div className='info-box pink-border'>
                    <p><b>AI</b></p>
                    <p>ML insights and subscribable alerts straight to your inbox.</p>
                    <p><Link href="/machine-learning">
                    <a className='button pink'>MACHINE LEARNING</a></Link></p>
                </div>
                </div>
            </div>
              
            <div className="container"> 
                  <div className='content'>
                      <div className='graph-box'><h2 id="dashboard">Crypto Twitter Stats</h2></div>
                      
                      <History />
                      <Trending />
                      <Volatile />
                      <Decreasing />

                      <div className='graph-box' style={{textAlign: 'center'}}>

                  <p>Mailing List: <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passhref>
                      <a className='button'>SIGN UP HERE</a></Link>

                      // Follow:

                      <Link href="https://twitter.com/defidatadev" ><a target="_blank" >@DefiDataDev</a></Link></p>

                  <p>Donate ETH: 0xb94d23CE4Aac668015aF33371dA35cBB4dC461df</p>

            
                  </div>
                      
                  </div>
              </div>
            </main>
      </div>
    );
}
    
