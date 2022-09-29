import React from 'react'
import { NavLink } from 'react-router-dom'
import webs from "../src/imgs.png"
import Common from './Common'
const About = () => {
  return (
    <>
      <Common name="Welcome to About Page" imgsrc={webs} visit='/contact' btnName='Contact Us'/>
    </>
  )
}

export default About