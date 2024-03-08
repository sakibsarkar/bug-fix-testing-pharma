import React from 'react'
import './operate.style.css';
import OperateCard from './OperateCard';
import photo1 from '../../../assets/1.png';
import photo2 from '../../../assets/2.png';
import photo3 from '../../../assets/3.png';
import photo4 from '../../../assets/4.png';
import photo5 from '../../../assets/5.png';

const HowOperation = () => {
    return (
        <section id="how-operate" className='operation'>
            <div className="section-title operate-title">
                <div className="container">
                <h2 className='title'>HOW WE OPERATE</h2>
                <h3 className='sub-title'>FAST. EFFICIENT. SAFE.</h3>
                </div>
            </div>
            <div className="operetion-wrapperbox">
            <div className="container">
                <OperateCard url={photo1} text={"Before paying anything, send us your sample of what you need tested. Include your secondary fors of contact inside the box as well."} direction={false} stepNumber={1} />
                <OperateCard url={photo2} text={"After the sample is recieved on our end, we will send you an email for confirmation. We will connect with you to discuss all sample types that you want."} direction={true} stepNumber={2} />
                <OperateCard url={photo3} text={"A follow-up email will be sent to you with payment confirmation. In this email an invoice will be attached. This is when you will be prompted to pay."} direction={false} stepNumber={3} />
                <OperateCard url={photo4} text={"After payment is recieved, your position will be added to the queue. During this time period we will prepare and then perform tests based on which ones were ordered."} direction={true} stepNumber={4} />
                <OperateCard url={photo5} text={`Results will then be sent to you via email. You can check the validity of these results on this website.<br/><br/> All results can be verified. If the ORDER NUMBER at the top of the document does not show verified when checked on our website, IT IS FAKE!`} direction={false} stepNumber={5} />
            </div>
            </div>
        </section>
    )
}

export default HowOperation