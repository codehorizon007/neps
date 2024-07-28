import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const sidebar_options = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Notifications", path: "/notifications" },
    { name: "Contact", path: "/contact" },
  ]
  const sidebar_options_to_render=sidebar_options.map((item)=>{
    return(<li key={item.name}><NavLink  className={({ isActive }) => isActive ? "text-white px-4 py-2 rounded-xl active-link sm:w-[70%] w-[100%] block" : "text-white block sm:w-[70%] w-[100%] "} to={item.path}>{item.name}</NavLink></li>)
  })



  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [MenuShow, setMenuShow] = useState(false)
  const togglemenu = () => {
    setMenuShow(prevState => !prevState)
  }

  useEffect(() => {
    if (MenuShow==false) {
     
      sidebar.style.width = "0";
      sidebar.style.left = "-40vw";
    } else { sidebar.style.width = "70%";
      sidebar.style.left = "0";
    }
  }, [MenuShow])
  
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
        <header className={`z-30 header fixed  w-full top-0 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className='flex justify-between md:px-[70px] sm:px-[50px] px-[20px] pt-3.5 pb-2 sm:gap-0 gap-16'>
                <div className="header-left flex gap-2">
                    <div className="header-logo flex items-center">
                      <img src="./public/school-logo.png" className='sm:w-[30px] w-[25px]' />
                    </div>
                    <div className="header-left-text font-ubuntu text-[#ecebed] font-medium sm:text-[16px] text-[13.5px] flex items-center" > <NavLink to="/">New Era Public School</NavLink></div>
                </div>


                <div className="header-right text-[#c9c9c9] flex gap-[3.5rem]">
                  <ul className='lg:flex gap-[4.5rem] font-ubuntu hidden'>
                    <NavLink to="/" className={({ isActive }) => isActive ? "pt-[5px] active-header-link  hover:scale-110 transition-all" : "pt-[5px]  hover:scale-110 transition-all"}><li>Home</li></NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "pt-[5px] active-header-link  hover:scale-110 transition-all" : "pt-[5px]  hover:scale-110 transition-all"}><li>About</li></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "pt-[5px] active-header-link  hover:scale-110 transition-all" : "pt-[5px] hover:scale-110 transition-all"}><li>Contact</li></NavLink>

                  </ul>
                  <div className="" >
                    <label className="hamburger block relative cursor-pointer">
                      <input type="checkbox" className="hidden" />
                      <svg onClick={togglemenu} viewBox="0 0 32 32" className=" hamburger-svg h-8 w-8 transition-transform duration-[600ms] ease-in-out">
                        <path className="line line-top-bottom fill-none stroke-white stroke-linecap-round stroke-linejoin-round stroke-3 transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-in-out" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line fill-none stroke-white stroke-linecap-round stroke-linejoin-round stroke-3 transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms] ease-in-out" d="M7 16 27 16"></path>
                      </svg>
                    </label>
                  </div>
                </div>
            </nav>
        </header>

        <div className="sidebar h-full z-50 rounded-xl w-0 overflow-hidden fixed bg-neutral-900 p-8 z-45 " id='sidebar'>
          <ul className='flex flex-col gap-4 font-poppins '>
           
            {sidebar_options_to_render}
          </ul>
        </div>

    </>
  )
}

export default Navbar
