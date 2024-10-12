 import React from 'react'

const ProgressBar = () => {
    return (
        <div className='capsule'>
       <div className="heading">
    <h3>Skills I Have</h3>
    <h5> --Backend-- </h5>
            </div>
        <div className="progress_capsule">
            <div className='progress_circle java'>
                <div className="inner">
                    <p className='percentage'>
                Java <br/> 85%
                    </p>
                </div>
            </div>
            <div className='progress_circle mongodb'>
                <div className="inner">
                    <p className='percentage'>
                Mongo DB <br/> 50%
                    </p>
                </div>
            </div>
            <div className='progress_circle firebase'>
                <div className="inner">
                    <p className='percentage'>
                FireBase <br/> 50%
                    </p>
                </div>
            </div>
        </div>
        
            </div>
      )
}

export default ProgressBar