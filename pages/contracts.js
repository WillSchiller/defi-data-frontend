import Head from 'next/head'
import ContractsTx from '@components/charts/ContractsTx'
import ContractsValue from '@components/charts/ContractsValue'
import React, { Component } from "react"
import Footer from '@components/Footer'


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
        
                <main>
                    <div className='light-header'>
                    <h1 className='hero'>CONTRACTS</h1>
                        <h2>Ethereum Smart Contract Stats</h2>
                    </div>
                    <div className="container"> 
                        <div className='content'>
                            <ContractsTx />
                            <ContractsValue />  
                            <Footer />
                        </div>
                    </div>
                 </main>

            </div>
        );
    };
};


export default Contracts;