import React from 'react'

const Capsule = () => {
  return (
    <div className='capsule'>
        <div className="heading">
<h2>Skills I Have</h2>
<h5> --Forntend--</h5>
        </div>
<div className="progress_capsule">
    <div className='progress_circle html'>
        <div className='inner'>
            <p className='percentage'>
        HTML <br /> 90%
            </p>
        </div>
    </div>
    <div className='progress_circle css'>
        <div className="inner">
            <p className='percentage'>
        CSS <br/> 80%
            </p>
        </div>
    </div>
    <div className='progress_circle js'>
        <div className="inner">
            <p className='percentage'>
        JS <br/> 65%
            </p>
        </div>
    </div>
    <div className='progress_circle sass'>
        <div className="inner">
            <p className='percentage'>
        SASS <br/> 75%
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
        React JS <br/> 70%
            </p>
        </div>
    </div>
    <div className='progress_circle redux'>
        <div className="inner">
            <p className='percentage'>
        React Redux <br/> 60%
            </p>
        </div>
    </div>

           <div className='progress_circle java view '>
                <div className="inner">
                    <p className='percentage'>
                Java <br/> 85%
                    </p>
                </div>
            </div>
            <div className='progress_circle mongodb view'>
                <div className="inner">
                    <p className='percentage'>
                Mongo DB <br/> 50%
                    </p>
                </div>
            </div>
            <div className='progress_circle firebase  view'>
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

export default Capsule