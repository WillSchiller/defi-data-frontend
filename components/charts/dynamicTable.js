
import React, { Component, useEffect, useState } from "react";
import {useRouter} from 'next/router';
import Table from 'react-bootstrap/Table';
let rowcounter = 1


const DynamicTable = props => {
    const [data, dataSet] = useState([]);
    const router = useRouter();
    const token = (router.asPath).substr((router.asPath).lastIndexOf('/') + 1);
    
    
     useEffect(() => {
         async function fetchAPI(){
            let response = await fetch('https://fathomless-fjord-82402.herokuapp.com/tokenstats/' + token) 
            response = await response.json()
            dataSet(response)
         }
         fetchAPI()
        }, [])


        return (

            <div className="graph-box">

            <div className="titlebox">
                <h2>  <div className='icon'>&#128064;</div> Latest Token Stats</h2>
               
            </div>


            

            <Table responsive>
                <th className="number">#</th>
                <th>Symbol</th>
                <th>Tweets</th>
                <th>24%</th>
                <th>7d%</th>
                <th>RSD 24</th>
                <th>RSD 7d</th>
                <th>Sentiment</th>

                {data.map((row) => (
                    <tr key={row}>
                        <td className="number"><b>{rowcounter++}</b></td>
                        <td><a href={`/cryptocurrencies/${row.symbol.toLowerCase()}`} tabIndex={"-1"}>{row.symbol}</a></td>
                        <td>{row.count}</td>
                        <td>{(row.sma1_dif * 100).toFixed(2)+'%'}</td>
                        <td>{(row.sma7_dif * 100).toFixed(2)+'%'}</td>
                        <td>{row.rsd_1.toFixed(2)}</td>
                        <td>{row.rsd_7.toFixed(2)}</td>
                        <td>{row.sentiment.toFixed(2)}</td>
                    </tr>
                ))}
            </Table>

        </div>

        )
    
}



export default DynamicTable;
