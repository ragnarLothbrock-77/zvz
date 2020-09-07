import React from 'react'
import PersonalItem from './PersonalItem'
import { personalData } from '../../../../data'
import './Personal.scss'
import template from '../../../../assets/img/personalPhoto/template.jpg'

function Personal({ listName }) {
   const lists = personalData.map(i => {
      return (<PersonalItem
         key={i.id}
         src={i.src || template}
         name={i.name}
         position={i.position}
      />
      )
   })


   return (
      <>
         <div id="team" className="personal">
            <div className="personal__body container">
               <h1 className="personal__title title">{listName}</h1>
               <div className="personal__list">
                  {lists}
               </div>
            </div>
         </div>
      </>
   )
}

export default Personal
