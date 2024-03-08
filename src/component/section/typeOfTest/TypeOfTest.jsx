import React from 'react'
import './typeoftest.css'
import Card from './Card';
import img1 from '../../../assets/t1.png';
import img2 from '../../../assets/t2.png';
import img3 from '../../../assets/t3.png';

const TypeOfTest = () => {
return (
<section className="type-of-test">
    <div className="type-of-test-wrapper">
        <div className="section-title">
            <div className="container">
                <h2 className='title'>WHAT TYPES OF TESTS?</h2>
            </div>
        </div>
        <div className="typeOf-test-content-wrapper">
            <div className="container">
                <div className="test-container">
                    <Card postion={false} title="LIQUIDS/SOLVENTS" img={img1} />
                    <Card postion={true} title="POWDERS" img={img2} />
                    <Card postion={false} title="TABLETS" img={img3} />
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default TypeOfTest
