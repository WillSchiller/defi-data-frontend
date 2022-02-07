
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
            <title>Defi Data - Crypto Twitter Data API</title>
            <meta name="description" content="Crypto Twitter data and analysis API and platform. Get insights for the top 400 cryptocurrency tokens including sentiment & frequency metrics." /> 
            <link rel="icon" href="/favicon.ico" />
        </Head>

  

        <main>
            <div className="container"> 
                <div className='content'>
                    <div className='dark-header'>
                        <h1 className='hero'>{(router.asPath).substr((router.asPath).lastIndexOf('/') + 1).toUpperCase()}</h1>
                        <p>Token Stats & History</p>
                    </div>
                    <DynamicTable />
                    <DynamicChart />
                    
        
                  
                 
                   

                       
                </div>
            </div>
          </main>
    </div>
    )
}


export default Symbol