import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href="https://www.linkedin.com/in/isaiah-stapleton-738149194/" target="_blank" rel="noreferrer" className='btn'>Connect with Me</a>
        <a href={resume} target="_blank" rel="noreferrer" className='btn btn-primary'>View Resume</a>
    </div>
  )
}

export default CTA