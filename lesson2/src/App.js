import React from "react";
import Nav from "./Components/NavHead";
import Middle from "./Components/MainCoponents";
import Card from "./Components/CardComponents";
import "./style.css";
import popupover from "./Components/Data";

export default function App()
{

const demo = popupover.map(datacard => {
return <Card 
key ={datacard.id}
image= {datacard.image}
image1= {datacard.image1} 
span= {datacard.span}
span1= {datacard.span1}
span2 = {datacard.span2}
p1 ={datacard.p1}
p2= {datacard.p2}
openSpots ={datacard.openSpots}
location ={datacard.location}
 />
})

  return(
    <div>
    <Nav />
    <Middle />
    {demo}
    </div>
  )
}

