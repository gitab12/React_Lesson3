import React from "react";

function Card()
{
    return(
        <div>
        <img src={require("../images/katie-zaferes.png")} alt="log1" />
      
        <div className="sub_log">
        <img src={require("../images/star.png")} alt="log2" className="star1" />
       <span>5.0</span>
       <span>(6) .</span>
       <span>USA</span>
        </div>
        <p>Lesson of React</p>
         <p>Style with css</p>
</div>
    )
}
export default Card