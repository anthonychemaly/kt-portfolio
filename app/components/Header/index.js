import React from 'react'
import Navbar from './Navbar'
import Buttons from '../Buttons'
import HeaderSocials from './HeaderSocials';

const headerButton = [
  { 
    id: 1,
    name: "About Me", 
    href: "#about",
    buttonClass: 'hvr-shutter-out-vertical1 text-white'
  },
];

const Header = () => {
  const hButtons = headerButton.map (
    (button) => (
      <Buttons
          key={button.id}
          href={button.href}
          name={button.name}
          buttonClass={button.buttonClass}
      />
      
  ))
  
  return (
    <div id='home' className='bg-[black] text-white sm:pt-32 pt-12'>
     
        <Navbar />
        <div className='container mx-auto'>
        <div className='flex sm:flex-row flex-col justify-between sm:mt-20 sm:px-32'>
          <div className='sm:text-left md:text-left text-center'>
              <h1 className='text-2xl mt-12 flex flex-col '>Hi there! I'm<span className='sm:text-8xl text-5xl py-8'>Kathy El Khoury</span>        
              </h1>
              <div className='sm:flex hidden mt-12 sm:ml-0 ml-12'>
              
              <div className="hidden h-px animate-glow md:block animate-fade-right" />
                  <nav className=" animate-fade-in">
                     <ul className='flex items-center sm:pr-12 pr-8 sm:gap-4'>
                        <a
                            href='images/Catherina El Khoury CV.pdf' target='_blank'
                            className='text-xl duration-500 border border-white p-3 hvr-shutter-out-vertical1 text-white sm:px-6 rounded-md'
                        >
                            My Resume
                        </a>
                    </ul>
                  </nav>

                  <nav className=" animate-fade-in">
                     <ul className='flex items-center sm:pr-12 pr-8 sm:gap-4'>
                        <a
                            href='images/Internship Attestation Letter.pdf' target='_blank'
                            className='text-xl duration-500 border border-white p-3 hvr-shutter-out-vertical1 text-white sm:px-6 rounded-md'
                        >
                            Attestation Letter
                        </a>
                    </ul>
                  </nav>
                  {hButtons}

              </div>
          </div>
          <HeaderSocials />

          <div className="w-[22rem] h-[30rem] sm:mb-[79px] mb-[30px] overflow-hidden me sm:mt-0 mt-4 sm:ml-0 ml-4">
            <img src='images/me.png' alt="Kathy" />
          </div>

          <div className='sm:hidden flex sm:ml-0 ml-4 sm:mb-0 mb-12'>
          <div className="hidden flex flex-row h-px animate-glow md:block animate-fade-right" />
            <div>
              <div>
                    <nav className=" animate-fade-in">
                      <ul className='flex items-center sm:pr-12 pr-8 sm:gap-4'>
                          <a
                              href='images/Catherina El Khoury CV.pdf' target='_blank'
                              className='text-xl text-center duration-500 border border-white p-3 hvr-shutter-out-vertical1 text-white sm:px-6 rounded-md'
                          >
                              My Resume
                          </a>
                      </ul>
                    </nav>
                    </div>
                    
                <nav className=" animate-fade-in">
                        <ul className='flex items-center sm:pr-12 pr-8 mt-4 sm:gap-4'>
                            <a
                                href='images/Internship Attestation Letter.pdf' target='_blank'
                                className='text-xl text-center duration-500 border border-white p-3 hvr-shutter-out-vertical1 text-white sm:px-6 rounded-md'
                            >
                                Attestation Letter
                            </a>
                        </ul>
                </nav>
              
            </div>
            <div>
                    {hButtons}
                    </div>
              
              </div>
        </div>
        </div>
    </div>
  )
}

export default Header