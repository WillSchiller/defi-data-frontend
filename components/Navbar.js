import React from 'react';
import Line from '@components/line'
import Link from 'next/link'
import Image from 'next/image';




export default function Navbar() {


  return (

      <div className="container">
        <div className='filler'></div>
        

        

          <div className="navbar">
            

            <div className= "logo">
              <Link href="/" passHref>
                <a><Image src="/defi_data_logo.png" alt="defi data logo" width={90} height={50} /></a>
              </Link>
            </div>
            <div className="buttons-box">
            <div>
                <Link href="/contracts" style={{ textDecoration: 'none' }} passHref>
                    <a>0x</a>
                </Link>
              </div>
              <div>
                <Link href="/machine-learning" style={{ textDecoration: 'none' }} passHref>
                    <a>ML</a>
                </Link>
              </div>
              <div>
                <Link href="/api-data" style={{ textDecoration: 'none' }} passHref>
                  <a>API</a>
                </Link>
              </div>
              <div>
                <Link href="/about" style={{ textDecoration: 'none' }} passHref>
                  <a>info</a>
                </Link>     
              </div>
           </div>
    
           </div> 
           
        

      </div>
      

  );


}