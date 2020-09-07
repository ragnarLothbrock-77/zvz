import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { listData } from '../../data'
import NavbarList from './navbarList/NavbarList'
import Dropdown from './dropdown/Dropdown'


function Navbar() {
   const list = listData.map(item => {
      return (
         <NavbarList
            to={item.to}
            text={item.text}
            key={item.id}
            isDrop={item.isDrop}
            dropdown={
               item.drop.map(i => {
                  return (
                     <Dropdown
                        text={i.text}
                        to={i.to}
                        key={i.id}
                     />
                  )
               })
            }
         />
      )
   })


   return (
      <>
         <div className="navbar">
            <div className="navbar-container container">
               <Link to="/" className="navbar-logo">
                  <img className="navbar-logo__img" src={logo} alt="Звёздный" />
               </Link>
               <ul className="navbar-list">
                  {list}
               </ul>
            </div>
         </div>
      </>
   )
}

export default Navbar
