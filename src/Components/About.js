import React from "react";

const About = ({ data }) => {
  if (data) {
    // var name = data.name;
    // var profilepic = "images/" + data.image;
    // var bio = data.bio;
    // var street = data.address.street;
    // var city = data.address.city;
    // var state = data.address.state;
    // var zip = data.address.zip;
    // var phone = data.phone;
    // var email = data.email;
    var resumeDownload = "images/" + data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          {/* <img
            className="profile-pic"
            // src={profilepic}
            alt="Siddhesh's Profile Pic"
          /> */}
        </div>
        <div className="nine columns main-col">
          {/* <h2>Technology Used</h2> */}

          {/* <p>{bio}</p> */}
          <div className="row">
            {/* <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div> */}
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  {/* <i className="fa fa-download"> </i> */}
                  Download Resumé
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
