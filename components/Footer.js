import Link from "next/link";

export default function Footer({ title }) {
    return (   
        <div className='signupbox' >
            <p>
                Twitter: <Link href="https://twitter.com/defidatadev" ><a  target="_blank" > @DefiDataDev</a></Link>
            </p>
            <p>
                Donate ETH: <span className='white'>0x8ae3784B96DeF82936124AF47E3056699d6F2Cd1</span>
            </p>
        </div>
    )
}
  