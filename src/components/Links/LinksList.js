import React from 'react'
import LinkItem from './LinkItem'
import './Links.scss'

function Links({ dataAr }) {
   const linksList = dataAr.map(i => {
      return (
         <LinkItem
            key={i.id}
            href={i.to}
            src={i.src}
            alt={i.alt}
         />
      )
   })


   return (
      <div className="links-body">
         <div className="links-title">Присоединяйтесь к нам :</div>
         <ul className="links-list">
            {linksList}
         </ul>
      </div>
   )
}

export default Links
