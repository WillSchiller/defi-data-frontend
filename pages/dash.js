import Head from 'next/head'
import Navbar from '@components/Navbar'
import Trending from '@components/charts/Trending'
import Volatile from '@components/charts/Volatile'
import Decreasing from '@components/charts/Decreasing'
import History from '@components/charts/History'
import React, { Component } from "react"

let rowcounter = 1

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("https://fathomless-fjord-82402.herokuapp.com/topStats")
            .then(res => res.json())
            .then(data => this.setState({ apiResponse: data }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        this.sortBy = {
            id: 'symbol',  // default sort column name
            desc: false  // default sort order
          };
    }


    


    render() {
        return (

            <div className="container">

                <Head>
                    <title>Defi Data - Crypto Twitter Data API</title>
                    <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics." /> 
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Navbar/>
        
                <main>
                    <div className="container"> 

        
                        <div className='content'>
                            <div className='graph-box'><h1>Crypto Twitter Stats</h1></div>
                            

                            <Trending />
                            <Volatile />
                            <Decreasing />
                            <History />
                          
                         
                           

                    
                            
                            

                        </div>
                    </div>
                 </main>
            </div>
        );
    }
}


export default Dash;


