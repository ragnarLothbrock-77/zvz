import React, { useState } from 'react'
import HistoriAbout from './HistoriAbout'
import { historyData } from '../../../data'



function Compon() {
   const [tab, setTab] = useState(true)

   const handleTabe = (event) => {
      if (event.target.id === "1") {
         if (tab === true) {
            setTab(tab)
         } else {
            setTab(!tab)
         }
      }
      if (event.target.id === "2") {
         if (tab === true) {
            setTab(!tab)
         } else {
            setTab(tab)
         }
      }
   }

   return (
      <>
         <div className="info container">
            <div className="info__body">
               <div className="info-item-list">
                  <div className="info-item">
                     <h1 className="info-item__prev">Более</h1>
                     <div className="info-item__number">42</div>
                     <div className="info-item__text">Кружков</div>
                  </div>
                  <div className="info-item">
                     <h1 className="info-item__prev">Более</h1>
                     <div className="info-item__number">230</div>
                     <div className="info-item__text">Мироприятий</div>
                  </div>
                  <div className="info-item">
                     <h1 className="info-item__prev">Более</h1>
                     <div className="info-item__number">1000</div>
                     <div className="info-item__text">Посещений</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="info-history">
            <div className="info-history-tabs">
               <ul className="tabs-list">
                  <li id="1" onClick={handleTabe} className="tabs-list__item">О Доме Культуры</li>
                  <li id="2" onClick={handleTabe} className="tabs-list__item">Историческая справка</li>
               </ul>
            </div>
            <div className="info-history-main">
               {
                  tab
                     ? <HistoriAbout
                        text={historyData.about.text}
                        src={historyData.about.src}
                     />
                     : <HistoriAbout
                        text={historyData.history.text}
                        src={historyData.history.src}
                     />
               }
            </div>
         </div>


      </>
   )
}

export default Compon
