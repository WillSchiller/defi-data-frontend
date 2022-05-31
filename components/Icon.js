
import React, { Component } from "react";
import Identicon from '@polkadot/react-identicon';


class Icon extends Component {


  render () {
    // address is an ss58-encoded address or publicKey (hex string or Uint8Array)
    const  address  = '13NHkkBo2WfnhcZytP5x12FVLLuyyhqM9JGZP5hKnj8tS9Lf'
    // size (optional) is a number, indicating the size (in pixels, 64 as default)
    const size = 32;
    // theme (optional), depicts the type of icon, one of
    // 'polkadot', 'substrate' (default), 'beachball' or 'jdenticon'
  
    // standard className & style props are also available
    return (
      <Identicon value={address} theme="polkadot" size="300" / >
    );
  }

}

export default Icon;