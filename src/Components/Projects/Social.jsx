import React from "react";

import fb from "../../assets/media/fb.jpeg";
import insta from "../../assets/media/insta.jpeg";
import linkedIn from "../../assets/media/linkedin.jpeg";
import x from "../../assets/media/x.png";

const Social = () => {
  return (
    <right>
      <div className="social_heading">
        <h3>Social Media</h3>
      </div>

      <div className="social_icons">
        <div className="social_div">
          <a href="https://www.facebook.com/kartikay.varun" target="_blank">
            <img src={fb} alt="facebook" id="facebook" className="social_img" />
            <label htmlFor="facebook">Facebook</label>
          </a>
        </div>

        <div className="social_div">
          <a href="https://www.instagram.com/kartikay0306_mr.kk?igsh=MTQ1ZDBjMWVjNDYyZw==" target="_blank">
            <img
              src={insta}
              alt="instagram"
              id="instagram"
              className="social_img"
            />
            <label htmlFor="instagram">Instagram</label>
          </a>
        </div>

        <div className="social_div">
          <a href="https://www.linkedin.com/in/kartikay-varun-47269216a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <img
              src={linkedIn}
              alt="linkedin"
              id="linkedin"z
              className="social_img"
            />
            <label htmlFor="linkedin">LinkedIn</label>
          </a>
        </div>

        <div className="social_div">
          <a href="https://x.com/KartikayVarun?t=ieK2d5Yzre8M9ZikTe8ffA&s=09" target="_blank">
            <img src={x} alt="x" id="x" className="social_img" />
            <label htmlFor="x">X</label>
          </a>
        </div>
      </div>
    </right>
  );
};

export default Social;
