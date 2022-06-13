import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
let rowcounter = 1


class ContractsValue extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("https://fathomless-fjord-82402.herokuapp.com/contracts/value")
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
                    <h3><div className="icon">&#128176;</div> New contracts by Eth received</h3>
                    <p className="title">Contracts deployed over last 7 days that generated the most eth from input Tx&#39;s</p>
                </div>

                <Table responsive>
                    <th className="number">#</th>
                    <th>timestamp</th>
                    <th>blockNumber</th>
                    <th>gas</th>
                    <th>gasPrice</th>
                    <th>_from</th>
                    <th>contractaddress</th>
                    <th>tx_count</th>
                    <th>eth</th>
                    {this.state.apiResponse.map((row) => (
                    
                        
                        <tr key={row}>
                            <td className="number"><b>{rowcounter++}</b></td>
                            <td>{row.timestamp}</td>
                            <td>{row.blocknumber}</td>
                            <td>{row.gas}</td>
                            <td>{row.gasprice}</td>
                            <td><a href={`https://etherscan.io/address/${row._from}`} tabIndex={"-1"} target="blank">{row._from}</a></td>
                            <td><a href={`https://etherscan.io/address/${row.contractaddress}`} tabIndex={"-1"} target="blank">{row.contractaddress}</a></td>
                
                            <td>{row.tx_count}</td>
                            <td>{row.eth}</td>
                  
                        </tr>
                    
                    ))}
                </Table>
            </div>
        ); 
    }
}

export default ContractsValue;