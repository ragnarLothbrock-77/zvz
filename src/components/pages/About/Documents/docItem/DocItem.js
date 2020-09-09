import React, { useState } from 'react'
import '../Documents.scss'

function DocItem({ drop, mainText }) {
   const cls = ["documents-list__item"]

   const handleClass = () => {
      cls.push("active")
      console.log(cls);
      return cls.join(' ')
   }

   const [isDrop, setisDrop] = useState(false)

   const handelDropdown = () => {
      setisDrop(!isDrop)
   }
   return (
      <>
         <li onClick={handleClass} className={cls.join('')} >
            <div onClick={handelDropdown} className="documents-list-block">
               <span>{mainText}</span>
            </div>
            {
               isDrop
                  ? <div className="dropDocList">
                     <div className="dropDocList__body">
                        <ul className="documents-item-list">{drop}</ul>
                     </div>
                  </div>
                  : null
            }
         </li>
      </>
   )
}

export default DocItem
