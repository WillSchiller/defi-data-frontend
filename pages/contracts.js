import Head from 'next/head'
import Navbar from '@components/Navbar'
import Contracttx from '@components/charts/contractstx'
import Contractsvalue from '@components/charts/contractsvalue'
import React, { Component } from "react"

let rowcounter = 1

class Contracts extends Component {


    


    render() {
        return (

            <div className="container">

                <Head>
                    <title>Defi Data - Smart Contract Stats</title>
                    <meta name="description" content="Realtime dashboard showing top performing new smart contracts. Use it to find the lastest NTF, token sales and projects." /> 
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar/>
        
                <main>
                    <div className="container"> 

        
                        <div className='content'>
                            <div className='graph-box'><h1>Smart Contract Stats</h1></div>
                            <Contracttx />
                            <Contractsvalue />
                            

                    
                          
                         
                           

                    
                            
                            

                        </div>
                    </div>
                 </main>
            </div>
        );
    }
}


export default Contracts;