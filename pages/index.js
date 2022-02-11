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
              <title>Defi Data - Crypto Twitter Data API</title>
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
                    <p>ML insights and subscribable alerts strait to your inbox.</p>
                    <p><Link href="/machine-learning">
                    <a className='button pink'>Machine Learning</a></Link></p>
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
                      
                  </div>
              </div>
            </main>
      </div>
    );
}
    
