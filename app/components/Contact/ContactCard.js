import React from 'react'

const ContactCard = (props) => {
  return (
    <div>
        <article className="group border-2 cursor-pointer border-dotted border-black mb-6 bg-[#FFB6C1] rounded-lg p-4">
                {props.icon}
                <h4 className='pt-4'>{props.contactType}</h4>
                <h5 className='text-white cursor-pointer'>{props.account}</h5>
                <a href={props.hyperlink} target="_blank" rel="noreferrer"><p className='pt-4 font-semibold hvr-float-shadow'>Send a message </p></a>
        </article>
    </div>
  )
}

export default ContactCard