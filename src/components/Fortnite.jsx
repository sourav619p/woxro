import React from 'react'
import Cards from './Cards'
import './Fortnite.css'
import Fortnitepicture from './fortnite-pic.png'

function Fortnite() {
  return (
    <div>
        <div></div>
        <div className='outer'>
        <div className='outer-div'>
            <p className='para1'>Epic Games : An American Video Game And Software Developer <br />
            And Publisher Based In Cary, North Carolina.</p>
            <div>
                <img className='Header-Pict' src={Fortnitepicture} alt="" />
            </div>
            <p className='para2'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br />
            live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br />
            an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
            <button className='btn-visit'>Visit Website</button>
            <Cards />
            <h1 className='h11'>Our Contribution</h1>
            <p className='p11'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user <br /> community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing <br /> distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
        <div className='rating'>
            <div className='rat1'>
                <h1>5M</h1>
                <p>Daily User <br />
                Engagements</p>
            </div>
            <div className='rat1'>
                <h1>$500</h1>
                <p>Revenue Surge for an<br />
                platform</p>
            </div>
            <div className='rat1'>
                <h1>10X</h1>
                <p>Roas on all our<br />
                marketing campaigns</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Fortnite