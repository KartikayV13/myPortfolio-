import React from 'react'

const Freecodecamp = () => {

const FCC = [
  {name:"Responsive web Design",
    path:"https://www.freecodecamp.org/certification/KartikayVarun13/responsive-web-design"
  },
  {
    name:"JavaScript Algorithm and Data Structures",
    path:"https://www.freecodecamp.org/certification/KartikayVarun13/javascript-algorithms-and-data-structures-v8"
  },
  {
    name:"Frontend Developer Library",
    path:"https://www.freecodecamp.org/certification/KartikayVarun13/front-end-development-libraries"
  },
  {
    name:"(E D U C B A) Build Responsive Website Using HTML CSS JavaScript Bootstrap ",
    path:"https://www.educba.com/certificate/?c=DE0YRSZDI"
  }
]

  return (
    <div className="freecodecamp">
    <div className="heading">
<h2>Free CodeCamp  <span>&</span> E D U C B A</h2>
<h5>--Certificates--</h5>
   </div>

   <div className="hackerrank-certificates FCC_OTHER-certificates">
  <ul>
    {FCC.map((item) => (
      <li key={item.name}>
        <a className='certificates-name' href={item.path} target='_blank' rel="noopener noreferrer" >{item.name}</a>
      </li>
    ))}
  </ul>
</div>


</div>
  )
}

export default Freecodecamp