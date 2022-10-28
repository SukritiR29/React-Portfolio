import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id='project'>
      <div className="project__head">
        <h1>Projects</h1>
      </div>
        <div className="container project__container">
        
          <article className='project__item1'>
            <h3>CureNimal</h3>
            <p>Curenimal is a platform created with a vision of helping animals. Be it a pet or stray, the website assists you with the simplest ways to save their lives. </p>
            <div className="project__item1-cta">
             <a href="https://github.com/GDSC-RTU/Solution-Challenge-CureNimal" className='btn' target='_blank'>Github</a>
             <a href="https://gdsc-rtu.github.io/Solution-Challenge-CureNimal/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='project__item2'>
            <h3>Project item title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
            <div className="project__item2-cta">
             <a href="" className='btn' target='_blank'>Github</a>
             <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='project__item3'>
            <h3>MetaMask Address</h3>
            <p>The application allows you to get the user address of you metaMask wallet. The login flow creates a digital signature using nonce and JWT for the authentication process. </p>
            <div className="project__item-cta">
            <a href="https://github.com/SukritiR29/MetaMask-Address" className='btn' target='_blank'>Github</a>
            <a href="https://sukritir29.github.io/MetaMask-Address/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          <div className="project__more">
            <a href="" className='btn'>View More</a>
          </div>
        </div>
    </section>
  )
}

export default Project
