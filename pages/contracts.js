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

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Sora:wght@700&display=swap" rel="stylesheet" />
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
}


export default Contracts;