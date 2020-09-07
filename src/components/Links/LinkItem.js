import React from 'react'

function LinkItem({ href, src, alt }) {
   return (
      <li className="links-list__item">
         <a href={href} className="links-list__item_link">
            <img className="links-list__item_img" src={src} alt={alt} />
         </a>
      </li>
   )
}

export default LinkItem
