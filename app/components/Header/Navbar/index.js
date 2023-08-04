import React from 'react'
import NavbarLink from './NavbarLink'

const navLinks = [
    {
        id: 1,
        title: 'HOME',
        hyperlink: "#home",
        CreateAccountClass: 'hvr-float-shadow hover:text-white mt-2 sm:ml-24 md:ml-12 text-xl',
    },
    {
        id: 2,
        title: 'ABOUT',
        hyperlink: "#about",
        CreateAccountClass: 'hvr-float-shadow hover:text-white mt-2 sm:ml-24 md:ml-12 text-xl',
    },
    {
        id: 3,
        title: 'SKILLS',
        hyperlink: '#skills',
        CreateAccountClass: 'hvr-float-shadow hover:text-white mt-2 sm:ml-24 md:ml-12 text-xl',
    },
    {
        id: 4,
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"></path></svg> ,
        title: "Let's Chat!",
        hyperlink: '#contact',
        CreateAccountClass: 'text-black bg-white py-2 sm:ml-32 md:ml-12 hvr-box-shadow-outset  px-4 rounded-[10px] ',
    }
]

const Navbar = () => {
    const linkComponents = navLinks.map(
        link =>
         <NavbarLink 
            key={link.id} 
            title={link.title} 
            hyperlink={link.hyperlink} 
            CreateAccountClass={link.CreateAccountClass}
            icon={link.icon}
        />
    )
  return (
    <div className=' fixed top-0 sm:w-[100%]'>
        <div className='bg-[#FFB6C1]'>
        <div className='2xl:container !mx-auto sm:flex md:flex justify-between hidden'>
            <a href='#home'><img src="images/Logo.png" className='h-24'/></a> 
            <div className="sm:p-7 flex">
                {linkComponents}
            </div>
        </div>

        <div className='navbar sm:hidden flex fixed '>
            <div className='bg-[#FFB6C1] flex container nav-container h-16 fixed'>
                <div className="logo ">
                    <a href='#home'><img src="images/Logo.png" className='h-24'/></a>        
                </div>
                <div> 
                <input type="checkbox" name="" id="" className='checkbox' />
                <div className="sm:hidden block hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>  
                <div className="sm:hidden block menu-items bg-gradient-to-r from-black to-[#FFB6C1]">
                    <a className='hvr-float-shadow text-white hover:text-#FFB6C1' href='#home'><li>HOME</li></a>
                    <a className='hvr-float-shadow text-white hover:text-#FFB6C1' href='#about'><li>ABOUT</li></a>
                    <a className='hvr-float-shadow text-white hover:text-#FFB6C1' href='#skills'><li>SKILLS</li></a>
                    <a className='hvr-float-shadow text-white hover:text-#FFB6C1' href='#contact'><li>LET'S CHAT</li></a>
                </div>
                </div>
            </div>
        </div>


        {/* <div className="navbar justify-between bg-[#FFB6C1]">

        <div className='sm:hidden block container nav-container'>
        <div className="logo">
          <a href='/'><img src="images/Logo.png" className='h-24'/></a>        
        </div>
        <input type="checkbox" name="" id="" className='checkbox' />
          <div className="sm:hidden block hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>  
        <div className="sm:hidden block menu-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">blogs</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">contact</a></li>
        </div>
      </div> */}
      {/* </div>
        {/* <a href='/'><img src="images/Logo.png" className='h-24'/></a> */}
         
  
    </div>
    </div>
)
}

export default Navbar