
import Trending from '@components/charts/Trending';
import Head from 'next/head'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ComposedChart, Area, Tooltip, Legend, ResponsiveContainer } from 'recharts';




export const getStaticPaths = async () => {
    const res = await fetch('https://fathomless-fjord-82402.herokuapp.com/tokens');
    const data = await res.json();
    //const data = [{symbol: 'btc'}]
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
    
    const res = fetch('https://fathomless-fjord-82402.herokuapp.com/history/'+symbol)
    const data = await (await res).json();
    return {
        props: {token : data}
    }
}

const Symbol = ({ token }) => {
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
                    <div className='graph-box'><h1>{token[0].symbol}</h1></div>

        
                    <div className='graph-box'>

                    <div className="titlebox">
                <h2><div className='icon'>&#9194;</div> {token[0].symbol} Token History</h2>
                <p className="title"> Tweets over time.</p>
            </div>


                    <ResponsiveContainer width="98%" height={300}>
                <ComposedChart  data={token}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <XAxis dataKey="date" />
                <Area strokeWidth={3}  type="monotone" dataKey="count" fill="#A98DE8" stroke="#9A6DF8"  activeDot={{ fill: "#fe14fd", stroke: '#fe14fd', strokeWidth: 2, r: 7 }} />
                <Tooltip />
<Legend />
            </ComposedChart>
        </ResponsiveContainer>


                    </div>
                    <Trending />
                   

                       
                </div>
            </div>
          </main>
    </div>
    )
}


export default Symbol