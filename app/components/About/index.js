import React from 'react'
import Buttons from '../Buttons'

const AboutButton = [
	{ 
    id: 1,
    name: "Contact Me", 
    href: "#contact" ,
    buttonClass: 'hvr-shutter-out-vertical2 text-black'
  },
]
const index = () => {

    const aboutBut = AboutButton.map (
        (button) => (
          <Buttons
              key={button.id}
              href={button.href}
              name={button.name}
              buttonClass={button.buttonClass}
          />
        ))

  return (
    <div id='about'>

        <div className='pt-32 flex flex-col items-center text-center'>
            <a href='#home'>
                <svg stroke="currentColor" stroke-width="0" viewBox="0 0 32 32" color="white" className="hvr-grow fill-[#FFB6C1] hover:fill-black cursor-pointer sm:mx-0 mx-auto sm:h-[150px] h-[130px] sm:w-[150px] w-[130px]" xmlns="http://www.w3.org/2000/svg"><path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path></svg>
                
            </a>
            <p className='sm:px-64 px-8 pt-12'>
            I'm a 21-year-old Computer Engineering Student with a passion for tackling challenges and striving for excellence. My dedication to personal and professional growth makes me a valuable asset for any project that demands hard work and enthusiasm.
            <br /><br/>
            My technology journey began as an intern in ERP, where I continued working as a full-timer for about six months. However, I later transitioned to the <span className='bg-[#FFB6C1]'> web development field </span>, and since then,<b> I has been continuously expanding my knowledge and skills in both ERP and web development domain, always ready to embrace new challenges.</b><br/><br />

            I firmly believes in the power of learning and adapting, approaching each opportunity as a chance to grow. With a positive and open mindset, I eagerly looks forward to collaborating with like-minded professionals on meaningful projects that push the boundaries of technology.<br /><br/>

           <span className='text-[#FFB6C1] bg-black'> Feel free to contact me if you have any inquiries or wish to discuss potential collaborations.</span>
            </p>
            <div className='sm:mt-16 mt-8 ml-16'>
            {aboutBut}
            </div>
        </div>
    </div>
  )
}

export default index