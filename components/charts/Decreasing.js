import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
let rowcounter = 1


class Decreasing extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("https://fathomless-fjord-82402.herokuapp.com/decreasing")
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
         
            <div className="box">

                <div className="titlebox">
                    <h3><div className="icon">&#128123;</div> Decreasing</h3>
                    <p className="title">Biggest decrease over 24hr.</p>
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
                    {this.state.apiResponse.map((row) => (
                    
                        
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
        ); 
    }
}

export default Decreasing;