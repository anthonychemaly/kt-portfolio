import React from 'react'
import Link from "next/link";


const Buttons = (props) => {
  return (
    <div>
        <div className="hidden h-px animate-glow md:block animate-fade-right" />
            <nav className=" animate-fade-in">
                <ul className='flex items-center sm:pr-12 pr-8 sm:gap-4'>
                        <Link
                            key={props.id}
                            href={props.href}
                            className={`text-xl duration-500 border border-white p-3 ${props.buttonClass} sm:px-6 rounded-md`}
                        >
                            {props.name}
                        </Link>
                   
                </ul>
            </nav>
    </div>
  )
}

export default Buttons