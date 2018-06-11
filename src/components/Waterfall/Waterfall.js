import React from "react";
import "./Waterfall.css";

const Waterfall = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} id={props.id}/>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Waterfall;
