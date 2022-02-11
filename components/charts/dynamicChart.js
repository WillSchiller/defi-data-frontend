
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Area, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { Component, useEffect, useState } from "react";
import {useRouter} from 'next/router';


const DynamicChart = props => {
    const [data, dataSet] = useState([]);
    const router = useRouter();
    const token = (router.asPath).substr((router.asPath).lastIndexOf('/') + 1);
    
    
     useEffect(() => {
         async function fetchAPI(){
            let response = await fetch('https://fathomless-fjord-82402.herokuapp.com/history/' + token) 
            response = await response.json()
            dataSet(response)
         }
         fetchAPI()
        }, [])


        return (

            
            <div className='graph-box'>
                <div className="titlebox">
                    <h3><div className='icon'>&#9194;</div> History</h3>
                    <p className="title">Total&nbsp;<b>${token.toLocaleLowerCase()}</b>&nbsp;mentions.</p>
                </div>
                    <ResponsiveContainer width="98%" height={300}>
                        <ComposedChart  data={data}>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <XAxis dataKey="date" />
                            <Area strokeWidth={3} type="monotone" dataKey="count" fill="#A98DE8" stroke="#9A6DF8"  activeDot={{ fill: "#fe14fd", stroke: '#fe14fd', strokeWidth: 2, r: 7 }} />
                            <Tooltip />
                            <Legend />
                        </ComposedChart>
                    </ResponsiveContainer>
            </div>

        )
    
}



export default DynamicChart;







