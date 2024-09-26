import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        // <div>
        //     <ul>

        //         <li>
        //             <NavLink to={'/'}>
        //                 Home
        //             </NavLink>
        //         </li>



        //         <li>
        //             <NavLink to={'about'}>
        //                 About
        //             </NavLink>
        //         </li>



        //         <li>
        //             <NavLink to={'contact'}>
        //                 Contact
        //             </NavLink>
        //         </li>

        //     </ul>
        // </div>

        <nav className="bg-[#343a40] shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-white" to="/">
          MyWebsite
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white hover:text-orange-800" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-orange-800" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-orange-800" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    )
}

export default Header
