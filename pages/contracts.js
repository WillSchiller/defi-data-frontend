import Head from 'next/head'
import Navbar from '@components/Navbar'
import Contracttx from '@components/charts/contractstx'
import Contractsvalue from '@components/charts/contractsvalue'
import React, { Component } from "react"
import Link from 'next/link'

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

                    <div className='dark-header'>

                        <h1 className='hero'>CONTRACTS</h1>
                        <h2>Ethereum Smart Contract Stats</h2>

                    </div>
                    <div className="container"> 

        
                        <div className='content'>
                           
                            <Contracttx />
                            <Contractsvalue />

                            <div className='graph-box' style={{textAlign: 'center'}}>

<p>Sign up to stay up to date <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passhref>
    <a className='button'>SIGN UP HERE</a></Link></p>
<p><Link href="https://twitter.com/defidatadev" ><a target="_blank" >Follow @DefiDataDev</a></Link></p>
</div>
                            

                    
                          
                         
                           

                    
                            
                            

                        </div>
                    </div>
                 </main>
            </div>
        );
    }
}


export default Contracts;