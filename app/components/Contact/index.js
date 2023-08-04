'use client'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import ContactCard from './ContactCard';


const contactCard = [
    {
        id: 1,
        icon:  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" className='hvr-grow hover:fill-white cursor-pointer' aria-hidden="true" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
        contactType: 'Email',
        account: 'catherina_elkhoury@hotmail.com',
        hyperlink: 'mailto:catherina_elkhoury@hotmail.com'
    },

    {
        id: 2,
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className='hvr-grow hover:fill-white cursor-pointer' height="32" width="32" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg> ,
        contactType: 'Direct Message',
        account: '@kathyelkhoury',
        hyperlink: 'https://ig.me/m/kathyelkhoury'
    },

    {
        id: 3,
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="32" width="32" className='hvr-grow hover:fill-white cursor-pointer' xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>,
        contactType: 'LinkedIn',
        account: 'Catherina El Khoury',
        hyperlink: 'https://www.linkedin.com/in/catherina-el-khoury-73710123a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrwUQ7KzeSamv%2BqwtmRYEAA%3D%3D'
    }

]

const index = () => {

    const [message, setMessage] = useState('');

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dz0oy8e', 'template_cjfcaso', form.current, 'R0o_0Wt-yLddcrf0O')
      setMessage('Your Message has been sent successfully!');
    
      e.target.reset()
    };

    const cards = contactCard.map (
        card => <ContactCard  key={card.id} icon={card.icon} contactType={card.contactType} account={card.account} hyperlink={card.hyperlink} />
    )


return (
    
    <section id="contact" className="pt-12 2xl:container !mx-auto">
                    <div className='block sm:hidden text-center text-3xl sm:mb-2 cursor-pointer hover:text-[#FFB6C1]'>
                        <h5 className='p-4'>Let's Get In Touch</h5>
                        <h2>Contact Me</h2>
            </div>
        <div className='grid sm:grid-cols-4 sm:grid-rows-none grid-cols-none grid-rows-none sm:mt-20 mt-6'>

            <div className='sm:col-span-1 sm:row-span-none col-span-none row-span-1 sm:ml-8 ml-px mt-6'>
                {cards}
            </div>

            <div className='sm:col-span-3 sm:row-span-none col-span-none row-span-none sm:ml-24'>
                <div className='sm:block hidden text-center text-3xl mb-2 cursor-pointer hover:text-[#FFB6C1]'>
                    <h5 className='p-4'>Let's Get In Touch</h5>
                    <h2>Contact Me</h2>
                </div>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <p className='text-[#FFB6C1] italic text-sm p-3 text-center'>{message}</p> 
                    <input type="text" name="from_name" placeholder="Your Full Name" className='mx-7 p-3 border-2 border-solid rounded-lg' required/>
                    <input type="email" name="email" placeholder="Your email" className='m-7  p-3 border-2 border-solid rounded-lg' required/>
                    <textarea name="message" rows="7" placeholder="Your Message" className='mx-7 mt-4 mb-7  p-3 border-2 border-solid rounded-lg' required></textarea>
                    
                     <button type="submit" className="hvr-shutter-out-vertical2 inline-flex w-fit ml-7 mb-4 border-3 p-3 rounded-lg border-solid border-black bg-[#FFB6C1]">Send Message</button> 
                </form>
            </div>
        </div>

    </section>
  )
}

export default index