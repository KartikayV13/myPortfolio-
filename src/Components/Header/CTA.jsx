import React from "react";
import { TfiDownload } from "react-icons/tfi";


const CTA = () => {
  return (
    <div className="cta">
      <a href="" download className="btn">   {/* -IMPORT CV FROM ASSETS FOLDER - */}
        <strong>Resume 
        <span>
          <TfiDownload className="dwnld" />
        </span>
            </strong>        
          
       
      </a>
      <a href="" className="btn , btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;
