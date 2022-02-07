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
              <Link href="/">
                <Image src="/defi_data_logo.png" alt="defi data logo" width={100} height={56.2} />
              </Link>
            </div>
            <div className="buttons-box">
              <div>
                <Link href="/machine-learning" style={{ textDecoration: 'none' }}>
                    <a>ML</a>
                </Link>
              </div>
              <div>
                <Link href="/api-data" style={{ textDecoration: 'none' }}>
                  <a>API</a>
                </Link>
              </div>
              <div>
                <Link href="/about" style={{ textDecoration: 'none' }}>
                  <a>About</a>
                </Link>     
              </div>
           </div>
    
           </div> 
           
          <Line/>

      </div>
      

  );


}