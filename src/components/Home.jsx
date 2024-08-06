import React from 'react'
import{Navbar} from "./Navbar"
import { Hero } from './Hero'
import { About } from './About'
import { Technologies } from './Technologies'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'
export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects />
      <Contact/>
    </div>
  )
}

