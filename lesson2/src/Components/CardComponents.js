import React from "react";

function Card(props)
{
    let badgeText;

    if(props.openSpots === 0)
    {
        badgeText ="SOLD OUT" 
    }
    else if(props.location === "Online" )
    {
        badgeText = "ONLINE"
    }
    
    
    return(
        <div className="card">
       { badgeText && <div className="card--bardge">{badgeText}</div>}
    {<img src={props.image} alt="demo" className="card--image"  />}
    <div className="card--stats">
        <img src="images/star.png" alt="log2" className="card--star" />
       <span> {props.span}</span>
       <span className="gray">({props.span1}) . </span>
       <span className="gray">{props.span2}</span>
        </div>
        <p>{props.p1}</p>
         <p>{props.p2}</p>
</div>
    )
}
export default Card