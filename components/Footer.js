import Link from "next/link";

export default function Footer({ title }) {
    return (   
        <div className='signupbox' >
            <p>
                Mailing List: <Link href="https://d0zrotlzu5n.typeform.com/to/KPYNnxft" passhref><a className='button'>SIGN UP HERE</a></Link>
            <p>
            // Follow: <Link href="https://twitter.com/defidatadev" ><a  target="_blank" > @DefiDataDev</a></Link>
            </p>
          
                
            </p>
            <p>
                Donate ETH: <span className='white'>0xb94d23CE4Aac668015aF33371dA35cBB4dC461df</span>
            </p>
        </div>
    )
}
  