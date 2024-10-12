import React from 'react'
import aktu from "../../assets/aktu.png"
import upboard from "../../assets/upboard.png"

const Education = () => {
  return (
    <div className="schl_clg">
         <div className="heading-edu">
          <h2>School <span className='edu-and'>&</span> College</h2>
            </div>

            <div className="result">
                <div className="tenth">
                    <div className="details">
                        <img src={upboard} alt="" />
                        <div className="platform">
                            <h1 className="degree">High School (UP Board)</h1>
                            <h2 className="venue">St.Francies Xaviers Inter College</h2>
                            <h5 className='addrss'>Ashok Nagar, Kanpur</h5>
                        </div>
                    </div>
                </div>
                <div className="twelfth">
                <div className="details">
                        <img src={upboard} alt="" />
                        <div className="platform">
                            <h1 className="degree">Intermediate (UP Board)</h1>
                            <h2 className="venue">St.Francies Xaviers Inter College</h2>
                            <h5 className='addrss'>Ashok Nagar, Kanpur</h5>
                        </div>
                    </div>
                </div>
                <div className="B-tech">
                <div className="details">
                        <img src={aktu} alt="" />
                        <div className="platform">
                            <h1 className="degree">B.Tech (ME)</h1>
                            <h2 className="venue">Axis Institute Of <br /> Technology And Management</h2>
                            <h5 className='addrss'>Rooma, Knapur</h5>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Education