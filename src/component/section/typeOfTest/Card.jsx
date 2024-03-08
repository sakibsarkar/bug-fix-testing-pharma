import React from 'react'

const Card = ({ title, img, postion }) => {
    return (
        <div className={`test-card ${postion ? "card-absloute" : ""}`}>
            <h2>{title}</h2>
            <div className="img-box">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Card