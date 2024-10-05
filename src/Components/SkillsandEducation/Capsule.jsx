import React from 'react'

const Capsule = () => {
  return (
    <div className='capsule'>
<h2>Skills I Have</h2>

<div className="progress_capsule">
    <div className='progress_circle html'>
        <div className='inner'>
            <p className='percentage'>
        HTML 90%
            </p>
        </div>
    </div>
   
    <div className='progress_circle css'>
        <div className="inner">
            <p className='percentage'>
        CSS 80%
            </p>
        </div>
    </div>
    <div className='progress_circle js'>
        <div className="inner">
            <p className='percentage'>
        JS 65%
            </p>
        </div>
    </div>
    <div className='progress_circle sass'>
        <div className="inner">
            <p className='percentage'>
        SASS 75%
            </p>
        </div>
    </div>
    <div className='progress_circle tailwind'>
        <div className="inner">
            <p className='percentage'>
        Tailwind CSS 85%
            </p>
        </div>
    </div>
    
    <div className='progress_circle react'>
        <div className="inner">
            <p className='percentage'>
        React JS 70%
            </p>
        </div>
    </div>
    <div className='progress_circle redux'>
        <div className="inner">
            <p className='percentage'>
        React Redux 60%
            </p>
        </div>
    </div>
    <div className='progress_circle java'>
        <div className="inner">
            <p className='percentage'>
        Java 85%
            </p>
        </div>
    </div>
    <div className='progress_circle mongodb'>
        <div className="inner">
            <p className='percentage'>
        Mongo DB 50%
            </p>
        </div>
    </div>
    <div className='progress_circle firebase'>
        <div className="inner">
            <p className='percentage'>
        FireBase 50%
            </p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Capsule