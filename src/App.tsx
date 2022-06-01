import React from 'react'

import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
