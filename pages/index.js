import Head from 'next/head'
import Trending from '@components/charts/Trending'
import Volatile from '@components/charts/Volatile'
import Decreasing from '@components/charts/Decreasing'
import History from '@components/charts/History'
import React, { Component } from "react"
import Link from 'next/link'
import Image from 'next/image';




export default function Home() {

    return (
      <div className='container'>

<Head>
              <title>Defi Data - Crypto Twitter Data & API</title>
              <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics." /> 
              <link rel="icon" href="/favicon.ico" />

              <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Sora:wght@700&display=swap" rel="stylesheet" />  

          </Head>

          <main>

          <div className='light-header'>
            
            <Image src="/gitcoin.png" alt="defi data logo" width={620} height={200} />
           <p className='no-margin'> <Link href="https://gitcoin.co/grants/5860/defidata-free-crypto-twitter-analytics" ><a className='green' target="_blank">FUND DEVS</a></Link> TO #BUIDL DEFIDATA</p>
        
                
            
            </div>
    
            <div className="container"> 
                  <div className='content'>

                    <h1>Crypto Twitter Stats</h1>
                      
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
    
