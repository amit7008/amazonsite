import React from "react";
const Sectionheader = (props) =>{
return(
    <>
    <div className="sectionHeader">
         <div className="subTitle">{props.subTitle}</div>
            <h2 className="secTitle">{props.secTitle}</h2>
            <div className="az_paragraph">{props.paragraph} </div>
            
</div>
    </>
)
}
export default Sectionheader;