import React from "react";
import "./footer2.css";
import facebook from "./facebook.jpg" 
import instagram from "./instagram.jpg"
import linkedin from "./linkedin.jpg"

const Footer2 = () => {
  return (
    <div className="footer2">
      <section className="footer2_sec1">
        <h4 className="footer2_title">ABOUT US</h4>
        <p className="footer2_para">Doorstep Wash & Dryclean Service</p>
      </section>
      <section className="footer2_sec2">
        {/* <ul className="footer2_first__ul"> */}
        <div className="footer_div1">
          <li>Home</li>
          <li>Pricing</li>
          <li>Career</li>
          <li>Contact</li>
        </div>
        {/* </ul> */}
      </section>
      <section className="footer2_sec3">
        {/* <ul className="footer2_first__ul"> */}
        <div className="footer_div2">
          <div className="inside_div">
          <li>Sign In</li>
          <li>Register</li>
          </div>
          <div className="inside_div">
          <li>Blogs</li>
          <li>Create</li>
          </div>
        </div>
        {/* </ul> */}
      </section>

      <section className="footer2_sec2">
        <p className="footer2_sec4__title">SOCIAL&nbsp;MEDIA</p>
        <div className="footer2_socialmedia">
          <img
            src={facebook}
            alt="facebook"
            style={{ width: "30px" }}
          />
          <img
            src={instagram}
            alt="instagram"
            style={{ width: "30px" }}
          />
          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: "30px" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Footer2;
