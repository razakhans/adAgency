import { IoArrowForward } from 'react-icons/io5'
import profileImg1 from "../assets/profile1.jpeg"
import profileImg2 from "../assets/profile2.jpeg"
import profileImg3 from "../assets/profile3.jpg"
import heroImg from "../assets/hero-image.png"
import { Vortex } from "./ui/vortex";

function Hero() {
  return (
    
   <section className='flex min-h-screen flex-wrap items-center bg-emerald-950
   text-orange-50'>

<Vortex
        backgroundColor="black"
        className="flex min-h-screen flex-wrap items-center 
   text-orange-50"
      >

<div className='w-full p-8 md:w-1/2'>
<div className='mb-4 flex space-x-2'>
  <img src={profileImg1} alt='Team Member 1' 
  className='h-12 w-12 rounded-full border-2 border-orange-50'/>
  <img src={profileImg2} alt='Team Member 2' 
  className='h-12 w-12 rounded-full border-2 border-orange-50'/>
  <img src={profileImg3} alt='Team Member 3' 
  className='h-12 w-12 rounded-full border-2 border-orange-50'/>
</div>
<h1 className='text-4xl tracking-tighter md:text-5xl lg:text-7xl'>
We create impactful ads that
<span className='text-orange-500'> elevate</span> your brand...
</h1>
<button className='mt-8 flex items-center gap-2 rounded-full
bg-emerald-900 px-4 py-3 hover:bg-emerald-800'>
    <span>Know More</span>
    <IoArrowForward />
</button>
</div>
<div className='w-full md:w-1/2 lg:p-14'>
<img src={heroImg} alt="ad Agency" className='h-auto w-full' />
</div>
</Vortex>
   </section>
  )
}

export default Hero
