import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const iconSize = 60;

const socials = (iconSize) => (

    
    
    <div className='home__socials'>
        <a href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218/" target="_blank"><BsLinkedin size={iconSize} /></a>
        <a href="https://github.com/SukritiR29" target="_blank"><BsGithub size={iconSize} /></a>
        <a href="https://discordapp.com/users/Sukriti%20Rajora#0820" target="_blank"><FaDiscord size={iconSize}  /></a>
        <a href="mailto:sukritirajora@gmail.com" target="_blank"><AiOutlineMail size={iconSize}  /></a>
    </div>
)

export default socials