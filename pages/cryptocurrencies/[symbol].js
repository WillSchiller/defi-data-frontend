
import Trending from '@components/charts/Trending';
import Head from 'next/head'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Area, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useRouter} from 'next/router';
import Test from '@components/charts/dynamicChart';
import DynamicChart from '@components/charts/dynamicChart';
import DynamicTable from '@components/charts/dynamicTable';




export const getStaticPaths = async () => {
    const res = await fetch('https://fathomless-fjord-82402.herokuapp.com/tokens');
    const data = await res.json();
    const paths = data.map(token => {
        return {
            params: {symbol: token.symbol.toString().toLowerCase()}
        }

    })

   return {
       paths,
       fallback:false
   }
}

export const getStaticProps = async (context) => {
    const symbol = context.params.symbol.toLowerCase();
    return {
        props: {token : symbol}
    }
}

const Symbol = ({ token }) => {
    const router = useRouter()
    return (
        <div className="container">

        <Head>
            <title>Defi Data - Latest {(router.asPath).substr((router.asPath).lastIndexOf('/') + 1).toUpperCase()} Stats</title>
            <meta name="description" content={"Currenting trending stats for " +(router.asPath).substr((router.asPath).lastIndexOf('/') + 1).toUpperCase() + " token. Data updated hourly."} /> 
            <link rel="icon" href="/favicon.ico" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Sora:wght@700&display=swap" rel="stylesheet" />
        </Head>

  

        <main>
        <div className='dark-header'>
                        <h1 className='hero'>{(router.asPath).substr((router.asPath).lastIndexOf('/') + 1).toUpperCase()}</h1>
                        <p>Token Stats & History</p>
                    </div>
            <div className="container"> 
                <div className='content'>
                    
                    <DynamicTable />
                    <DynamicChart />
                    
        
                  
                 
                   

                       
                </div>
            </div>
          </main>
    </div>
    )
}


export default Symbol