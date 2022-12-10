import React from "react";

const MasterCard = () => {
  return (
    <div className="container">
      <div className="front-card">
        <h3 id="main-title">
          {/* Financial | <span>Elite</span> */}
        </h3>
        <i id="globe" className="fa fa-globe"></i>
        <div id="chip"></div>
        <div className="card-info">
          <p id="no">**** **** **** 0041</p>
          <p id="name">John Smith</p>
          <p id="exp-date">
            <span>Expiry Date</span>: 07/22
          </p>
        </div>
        <div id="mastercard"></div>
      </div>
    </div>
  );
};

export default MasterCard;
