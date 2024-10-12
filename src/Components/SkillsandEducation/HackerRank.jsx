import React from 'react'


const HackerRank = () => {

const hackerRank = [
  {
    name: "CSS",
    path: "https://www.hackerrank.com/certificates/3bd2ef335f18"
  },
  {
    name: "JS (Basic)",
    path: "https://www.hackerrank.com/certificates/ae7b7f46b802"
  },
  {
    name: "JS (Intermediate)",
    path: "https://www.hackerrank.com/certificates/23d41b708891"
  },
  {
    name: "React (Basic)",
    path: "https://www.hackerrank.com/certificates/47f2833ba04f"
  },
  {
    name: "Frontend Developer (React)",
    path: "https://www.hackerrank.com/certificates/2913d9a064f0"
  },
  {
    name: "Java (Basic)",
    path: "https://www.hackerrank.com/certificates/ae7b7f46b802"
  },
  {
    name: "Problem Solving (Basic)",
    path: "https://www.hackerrank.com/certificates/d4c8fc5fdd0e"
  },
  
]

  return (
    <div className="hackerrank">
         <div className="heading">
<h2 className='heading_'>Hacker Rank</h2>
<h5 className='heading_certificates'>--Certificates--</h5>
        </div>
<div className="hackerrank-certificates">
  <ul>
    {hackerRank.map((item) => (
      <li key={item.name}>
        <a className='certificates-name' href={item.path} target='_blank' rel="noopener noreferrer"  >{item.name}</a>
      </li>
    ))}
  </ul>
</div>

    </div>
  )
}

export default HackerRank