import Head from 'next/head'
import Navbar from '@components/Navbar'

import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Table from 'react-bootstrap/Table'
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
            <h1>Trending Tokens by Tweet Frequency</h1>
            <p>Top 10 token based on current tweet frequency Vs 24hr slow moving average (SMA)</p>
            


            
            <Table responsive>
           
                <th class="number">#</th>
                <th>Symbol</th>
                <th>Tweets</th>
                <th>24%</th>
                <th>7d%</th>
                <th>RSD 24</th>
                <th>RSD 7d</th>
                <th>Sentiment</th>
              
            </Table>

            {this.state.apiResponse.map((row) => (
                <div className='place-holder'>
                <Table responsive>
             
        
                    <tr>
                        <td class="number"><b>{rowcounter++}</b></td>
                        <td>{row.symbol}</td>
                        <td>{row.count}</td>
                        <td>{row.sma1_dif}</td>
                        <td>{row.sma7_dif}</td>
                        <td>{row.rsd_1}</td>
                        <td>{row.rsd_7}</td>
                        <td>{row.sentiment}</td>
                       
                            
                        
                    </tr>

                </Table>
    </div>
    ))}


<LineChart width={10} height={300} data={this.state.apiResponse}>
    <XAxis dataKey="date"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <XAxis dataKey="date" />
    <Line type="monotone" dataKey="count" stroke="#8884d8" />
    <Line type="monotone" dataKey="symbol" stroke="#82ca9d" />
  </LineChart>
  </div>
  </div>
            </main>
            </div>
            
          
         
        );
    }
}

export default Dash;


