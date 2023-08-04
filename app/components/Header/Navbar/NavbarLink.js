import Link from "next/link"

const NavbarLink = (props) => { 
  
  return (
    <div className="text-black sm:text-xl text-xs hidden sm:block">
    <Link href={props.hyperlink}
    className={`flex inline-block flex-nowrap ${props.CreateAccountClass} ` }
          >
            {props.icon}{props.title}</Link>
    </div>
  )
}

export default NavbarLink