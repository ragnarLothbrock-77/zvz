import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.scss'


function NavbarList(props) {

   const [isDrop, setisDrop] = useState(false)

   const handelDropdown = () => {
      setisDrop(!isDrop)
   }

   return (
      <li onMouseEnter={handelDropdown} onMouseLeave={handelDropdown} key={props.id} className="navbar-item">
         <Link to={props.to} className="navbar-item__link">
            <span className="navbar-item__link_text">{props.text}</span>
         </Link>
         {
            isDrop
               ? <div className="dropdown">
                  <div className="dropdown__body">
                     <ul className="dropdown-list">
                        {props.dropdown}
                     </ul>
                  </div>
               </div>
               : null
         }
      </li>
   )
}

export default NavbarList
