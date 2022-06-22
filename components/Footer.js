import Link from "next/link";

export default function Footer({ title }) {
    return (   
        <div className='signupbox' >
            <p>
                Twitter: <Link href="https://twitter.com/defidatadev" ><a  target="_blank" > @DefiDataDev</a></Link>
            </p>
            <p>
                Donate ETH: <span className='white'>0xb94d23CE4Aac668015aF33371dA35cBB4dC461df</span>
            </p>
        </div>
    )
}
  