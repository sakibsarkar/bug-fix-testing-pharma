import React from 'react'
import { pageScroll } from '../../../Utils/PageScroll'
import './banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="content">
                    <p>{"WE ARE ONE OF SOUTH AMERICA’S LEADING TOXICOLOGICAL RESEARCH AND VERIFICATION LABORATORY. PROVIDING RESULTS FOR YOUR SAFETY ACROSS THE GLOBE."}</p>
                    <div className="msg-button">
                        <button onClick={() => pageScroll("contact")}>CONTACT US TO PURCHASE</button>
                        <button onClick={() => pageScroll("verify-lab-test")}>VERIFY A LAB TEST</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner