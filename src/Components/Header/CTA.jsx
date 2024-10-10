import React from "react";
import { Link } from "react-router-dom";
import { TfiDownload } from "react-icons/tfi";


const CTA = () => {
  return (
    <div className="cta">
      <a href="www.google.com" download className="btn">   {/* -IMPORT CV FROM ASSETS FOLDER - */}
        <strong>Resume 
        <span>
          <TfiDownload className="dwnld" />
        </span>
            </strong>        
      </a>
      <Link to="/Contact" className="btn-primary btn ">
         Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
