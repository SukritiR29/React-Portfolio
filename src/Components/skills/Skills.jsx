import React from 'react'
import './skills.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {DiPython} from 'react-icons/di'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FiFigma} from 'react-icons/fi'
import {BsWordpress} from 'react-icons/bs'
import {SiAdobeillustrator} from 'react-icons/si'



const Skills = () => {
  return (
    <section id='skills'>
      <div className="skills_head">
      <h1>Skills</h1>
      <h4>I have experience in the fields of</h4>
      </div>
      <div className="skills__container">
        <div className="technical">
         <h3>Technical Skills</h3>
          <div className="skills_content">
           <article className='skill_details'>
            <AiFillHtml5 className='skill_detail-icon' size={30} />
            <div>
             <h4>HTML</h4>
            </div>
           </article>
           <article className='skill_details'>
            <DiCss3 className='skill_detail-icon' size={30} />
            <div>
             <h4>CSS</h4>
             
            </div>
           </article>
           <article className='skill_details'>
            <IoLogoJavascript className='skill_detail-icon' size={30} />
            <div>
             <h4>JavaScript</h4>
            
            </div>
           </article>
           <article className='skill_details'>
            <FaReact className='skill_detail-icon' size={30} />
            <div>
             <h4>React</h4>
             
            </div>
           </article>
           <article className='skill_details'>
            <DiPython className='skill_detail-icon' size={30} />
            <div>
             <h4>Python</h4>
             
            </div>
           </article>
           <article className='skill_details'>
            <AiOutlineConsoleSql className='skill_detail-icon' size={30} />
            <div>
             <h4>SQL</h4>
             
            </div>
           </article>
          </div>
        </div>
        <div className="non-tech">
         <h3>Other Skills</h3> 
         <div className="skills_content">
          <article className='skill_details'>
           <FiFigma className='skill_detail-icon' size={30} />
           <div>
            <h4>Figma</h4>
            
           </div>
          </article>
          <article className='skill_details'>
           <BsWordpress className='skill_detail-icon' size={30} />
           <div>
            <h4>Wordpress</h4>
            
           </div>
          </article>
          <article className='skill_details'>
           <SiAdobeillustrator className='skill_detail-icon' size={30} />
           <div>
            <h4>Illustrator</h4>
            
           </div>
          </article>
          </div>
       
         
        </div>
      </div>
    </section>
  )
}

export default Skills
