import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaUserGraduate, FaHandHoldingHeart, FaUserFriends, FaAward, FaLightbulb, FaUsers, FaChartLine, FaBalanceScale, FaHandshake, FaGlobe } from 'react-icons/fa';
function App() {
  const animate = (element) => {
    gsap.to(element, { rotation: 360, x: 100, duration: 2 });
  };
  return (
    <>
      <Navbar />
      <main>
        <div className="hero w-full flex items-center flex-col gap-10">
          <div className="content w-full sm:pt-32 pt-24 text-white flex items-center flex-col  lg:leading-[0.8em] leading-[0.8em] font-normal gap-3 lg:text-[4em] sm:text-[2.5em] min-[350px]:text-[1.5em] text-[1.2em] font-ubuntu">
            <span>Education for a </span>
            <span>New Era:<span className='italic text-[#24cfa6]'> Excellence </span></span>
            <span>Begins Here.</span>
          </div>
          <a href="/about">
            <div className='bg-[#24cfa6] font-HelveticaNeue-Light text-black font-bold px-8 py-2 rounded-lg'>Learn More..</div></a>
          <div className=' bg-[#14141450] p-4 rounded-lg  flex justify-center sm:gap-20 gap-4'>
            <div className='flex flex-col gap-2 items-center'>
              <span className='text-white  sm:text-4xl text-2xl font-semibold '>48k+</span>
              <span className='font-ubuntu text-gray-300 sm:text-base text-xs text-center'>Students taught</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <span className='text-white  sm:text-4xl text-2xl font-semibold '>80+</span>
              <span className='font-ubuntu text-gray-300 sm:text-base text-xs text-center'>Teachers</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <span className='text-white  sm:text-4xl text-2xl font-semibold '>15+</span>
              <span className='font-ubuntu text-gray-300 sm:text-base text-xs text-center'>Years of Experience</span>
            </div>
          </div>
        </div>

        <div className="section-II flex text-white justify-between sm:mt-40 mt-20  md:mx-[70px] sm:mx-[50px] mx-[20px] rounded-lg">
          <div className="all-text min-[1200px]:w-[50%] w-full flex p-5 flex-col gap-2 ">
            <h1 className="min-[400px]:text-5xl text-3xl h-auto text-center font-bold font-ubuntu text-[#24cfa6] bg-[#14141450] p-2 rounded-lg w-full ">Our Motto </h1>
            <div className="motto-text h-full rounded-lg p-3 bg-[#14141450] flex flex-col  font-poppins">
              <span className='text-[#928aff] text-center'>Education is the foundation of all progress.</span>
              <span className='text-[#24cfa6] text-center'>आ नो भद्रा: कृतवो यन्तु विस्वत:</span>
              <span className='text-[#ffe77f] text-center'>Let noble thoughts come to us from every side (Rigveda 1-89-1)</span>
              <span className='text-[#ffffff] text-xs text-justify'>The motto of school is to inspire the virtues of humility , honesty, integrity & kindness in the children & blend these with education for the holistic development of the children , which ensures the transformation of children into talented citizens.</span>
              <span className='text-[#ffffff] text-xs text-justify'>The objective of education is to bring about the consciousness that , the more knowledge one gains the more humble one must be.</span>
            </div>
          </div>
          <div className='w-[50%] p-5  min-[1200px]:flex hidden items-center' >
            <img src="../public/reception.jpg" alt="" className='rounded-lg' />
          </div>
        </div>

        <div className="section-III flex text-white justify-between   md:mx-[70px] sm:mx-[50px] mx-[20px] rounded-lg">
          <div className=' p-5 w-[68%] h-full min-[1200px]:flex hidden items-center' >
            <img src="../public/academics.jpg" alt="" className='rounded-lg' />
          </div>
          <div className="all-text  w-full flex p-5 flex-col gap-2 ">
            <h1 className="min-[400px]:text-5xl text-3xl h-auto text-center font-bold font-ubuntu text-[#24cfa6] bg-[#14141450] p-2 rounded-lg w-full ">Academics</h1>
            <div className="motto-text h-full rounded-lg p-3 bg-[#14141450] flex flex-col  font-poppins text-xs text-justify">
              <span className='text-sm text-[#dfb2ff]'>NEPS follows the CBSE curriculum & currently offers academic facilities from Playgroup to Class XII . English is our medium of instruction.</span>
              <h4 className='text-[#ffe77f] text-base mt-3'>Teaching Methodology:</h4>
              <span>We follow child centered , student friendly methods . special attention is given to “Reading and Spoken English Programmes”. Communication and reading skills are developed through specially designed courses and material.</span>
              <h4 className='text-[#ffe77f] text-base mt-3'>Parent Teacher Meetings (PTMs):</h4>
              <span>We hold PTMs regularly to form an important bridge between the school and the parents.</span>
              <span>The participation of parents is a must to promote effective interaction and understanding. Together we can do it.</span>
              <span>It is important that students , teachers, parents and the school community at large feel something new and exciting is going to take place at school.</span>
            </div>
          </div>
        </div>


        <div className="section-IV flex flex-col bg-[#14141450] gap-6 rounded-lg mt-20 md:mx-[70px] sm:mx-[50px] mx-[20px] p-6">
          <div className="text-center text-[#24cfa6] font-ubuntu font-bold text-2xl"><h1 >Why to Choose Us</h1></div>
      
            <div className="facilities flex flex-col sm:flex-row gap-2 justify-between text-[#d3d3d3]">
              <div className='sm:w-[50%] w-full gap-1 flex flex-col '>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaUserGraduate />  Holistic Development: All-round growth and self-confidence.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaHandHoldingHeart /> Commitment, dedication, and responsibility.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaUserFriends />  Low teacher-student ratio.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaAward /> Preparing for the competitive world.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaLightbulb />  Path-breaking teaching techniques.</li>
              </div>

              <div className='sm:w-[50%] w-full gap-1 flex flex-col '>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaUsers />  Learning leadership and teamwork.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaChartLine />Setting the stage for success.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaBalanceScale /> Fostering discipline in life.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaHandshake /> Instilling kindness, loyalty, and truthfulness.</li>
              <li className='list-none font-poppins sm:text-sm text-xs flex items-start gap-1'><FaGlobe /> Delivering top-notch education.</li>
              </div>
            </div>
          </div>
      </main>
      <Footer />
    </>
  )
}

export default App
