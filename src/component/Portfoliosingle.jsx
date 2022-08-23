import React from "react";

const Portfoliosingle = (props) => {
return (
    <>
        <div className="singlePortfolioWrapper">
            <div className="singlePortfolioWrapper">
                <div className="portfolioImage">
                    <img src={props.portfolioImage} />
                </div>
                <div className="portfolioName">
                    <h4>{props.portfolioName}</h4>
                </div>
                
            </div>
        </div>
    </>
)
}

export default Portfoliosingle;