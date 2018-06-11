import React from "react";
import "./Title.css";

const Title = props => (

<div className="container header">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-3">
      Waterfall Clicky Game
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-2">
      {props.headMessage}
    </div>
    <div className="col-md-1"></div>
    <div className="col-md-3">
      Score: {props.currentScore} | Top Score: {props.highScore}
    </div>
    <div className="col-md-1"></div>
  </div>
</div>

);

export default Title;
