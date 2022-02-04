import Head from 'next/head'
import Navbar from '@components/Navbar'
import Trending from '@components/charts/Trending'
import Volatile from '@components/charts/Volatile'
import Decreasing from '@components/charts/Decreasing'
import History from '@components/charts/History'
import React, { Component } from "react"





export default function Home() {


    return (
      <div className="container">

          <Head>
              <title>Defi Data - Crypto Twitter Data API</title>
              <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics." /> 
              <link rel="icon" href="/favicon.ico" />
          </Head>

    
  
          <main>
              <div className="container"> 
                  <div className='content'>
                      <div className='graph-box'><h1>Crypto Twitter Stats</h1></div>
                      
                      <History />
                      <Trending />
                      <Volatile />
                      <Decreasing />
                      
                  </div>
              </div>
            </main>
      </div>
    );
}
    
