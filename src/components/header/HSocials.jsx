import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/isaiah-stapleton-738149194/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/IsaiahStapleton" target="_blank" rel='noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HSocials