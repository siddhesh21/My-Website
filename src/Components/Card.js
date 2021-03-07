import React from "react";
import "./Card.css";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PersonIcon from "@material-ui/icons/Person";
import GavelIcon from "@material-ui/icons/Gavel";
function Card() {
  return (
    <div>
      <div className="cont__service--fadeBottom" />
      <div className="cont__service">
        <h2 className="col__text">My Offerings</h2>
      </div>
      <div className="container__service">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <ImportantDevicesIcon style={{ fontSize: 70 }} />
              <h3>Web Developing</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We develop your website, completely custom based on your
                requests. This will allow you to have the site of your dreams
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <PersonIcon style={{ fontSize: 70 }} />
              <h3>Professional Modelling</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>Check-out my self produced work here</p>
              <a href="#">View to know More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <GavelIcon style={{ fontSize: 70 }} />
              <h3>Website Restyling</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                If you have a website that doesn't suit your tastes and you
                don't want to invest in a new site, I will restore your site and
                give it new life
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="cont__service--fadeBottom" />
    </div>
  );
}
export default Card;
