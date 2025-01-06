import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ProjectShowcase from './components/ProjectShowcase'
import AdAgencyPackages from './components/AdAgencyPackages'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className='overflow-hidden bg-orange-50 text-emerald-950 antialiased'>
   <Navbar />
   <Hero />
   <About />
   <Services />
   <ProjectShowcase />
   <AdAgencyPackages />
   <Team />
   <Testimonials />
   <Faq />
   <ContactForm />
    </div>
  )
}

export default App
