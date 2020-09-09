import React from 'react'
import '../Documents.scss'

function Document({ href, text }) {




   return (
      <>
         <li className="documents-item-list__item">
            <a
               href={href}
               rel="noopener noreferrer"
               target="_blank"
               className="documents-item-list__item_link"
               onClick={() => console.log(href)}
            >
               <span className="documents-item-list__item_text">{text}</span>
            </a>
         </li>
      </>
   )
}

export default Document
