import React from "react";
import Nav from "./Components/NavHead";
import Middle from "./Components/MainCoponents";
import Card from "./Components/CardComponents";
import "./style.css";
function App()
{

  return(
    <div>
    <Nav />
    <Middle />
    <Card />
    </div>
  )
}

export default App