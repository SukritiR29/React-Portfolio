import React from 'react'
import './about.css'
import ME from '../../Assets/about-me.jpg'
const About = () => {
  return (
    <section id='about'>
    <div className="about__head">
      <h1>About Me</h1>
    </div>
    <div className="container about__container">
      
      <div className="about__me">
        <div className="about__me-img">
          <img src={ME} alt="About Img" height="350" />
        </div>
      </div>
      <div className="about__content">
        <p>
          I'm a third year engineering undergrad in Information Technology. I'm a Web Developer and a UI/UX designer with experience in React, Python, JavaScript, Data Structures and SQL. I've worked as a Software Engineering Intern at MiniOrange and have been a finalist in the Smart India Hackathon'22.
          Apart from that a big book worm and an animal lover.
        </p>
        
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
      </div>
    </div>
    </section>
  )
}

export default About
