import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HSocials from './HSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Isaiah Stapleton</h1>
        <h5 className="text-light">B.S. Computer Science '23</h5>
        <CTA />

        <HSocials />
        
        <div className='me'>
          <img src={ME} alt='me' />  
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header