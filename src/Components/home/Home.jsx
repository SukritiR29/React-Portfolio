import React from 'react'
import './home.css'
import CTA from './CTA'
import ME from '../../Assets/home pic.png'
import Socials from './socials'

const Home = () => {
  return (
    <section id='home'>
    <header>
       <div className='container home__container'>
        <h2>Hello I'm</h2>
        <h1>Sukriti Rajora</h1>
        <p>I am a front-end web devloper and UI/UX designer. Also a content writer and graphic designer at times.</p>
        <CTA />
        <Socials />
        </div>

        <div className='me'>
          <img src= {ME} alt="me" />
        </div>
        </header>
        </section>
  )
}

export default Home
