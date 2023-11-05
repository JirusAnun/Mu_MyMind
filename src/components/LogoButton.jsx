import React from 'react'
import Logo from '/src/assets/logo.png'
import './LogoButton.css'

export default function LogoButton() {
  return (
    <div className="logo-container">
        <a href="/"><img id="logo" src={Logo} alt="" /></a>
    </div>
  )
}
