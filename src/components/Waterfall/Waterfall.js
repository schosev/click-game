import React from "react";
import "./Waterfall.css";

const Waterfall = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} id={props.id}/>
    </div>
  </div>
);

export default Waterfall;
