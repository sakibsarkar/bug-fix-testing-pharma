import React from "react";

const OperateCard = ({ url, text, direction, stepNumber }) => {
    return (
        <div className="operate-card">
            <div className={`card-content ${direction ? "left-to-right" : ""}`}>
                <div className="image-box">
                    <img src={url} alt="" srcSet="" />
                </div>
                <div className="description">
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </div>
            </div>
            <div className={`step-number ${direction ? "step-number-left-to-right" : "step-number-default"}`}>
                <span>{stepNumber}</span>
            </div>
        </div>
    )
}

export default OperateCard