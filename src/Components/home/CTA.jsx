import React from 'react'
import CV from '../../Assets/cv.pdf'


function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume</a>
       
    </div>
  )
}

export default CTA
