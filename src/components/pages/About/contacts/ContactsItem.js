import React from 'react'
import './Contacts.scss'

function ContactsItem({ infoTitle, infoText }) {
   return (
      <>
         <li className="info-box__item">
            <h2 className="info-box__item_title">{infoTitle}</h2>
            <p className="info-box__item_text">{infoText}</p>
         </li>
      </>
   )
}

export default ContactsItem
