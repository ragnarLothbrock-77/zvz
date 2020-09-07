import React from 'react'
import ContactsItem from './ContactsItem'
import { contactsItems } from '../../../../data'
import './Contacts.scss'
import LinkList from '../../../Links/LinksList'
import { linksData } from '../../../../data'

function Contacts({ title }) {
   const infoList = contactsItems.map(i => {
      return (
         <ContactsItem
            key={i.id}
            infoTitle={i.title}
            infoText={i.text}
         />
      )
   })


   return (
      <>
         <div id="contacts" className="contacts">
            <div className="contacts__body">
               <div className="contacts__title title">Контакты</div>
               <div className="contacts__flex">
                  <div className="contacts-map">
                     <h1 className="contacts-map__head">{title}</h1>
                     <div className="contacts-map__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aca072e9bdf2f728de508ecd73657a748accc0f09ac4e55ffa1f1b5a0c0b71f6a&amp;source=constructor" width="100%" height="350px" frameBorder="0"></iframe>
                     </div>
                  </div>
                  <div className="contacts-info">
                     <ul className="contacts-info__box info-box">
                        {infoList}
                     </ul>
                  </div>
               </div>
               <div className="contacts-links">
                  <LinkList dataAr={linksData} />
               </div>
            </div>
         </div>
      </>
   )
}

export default Contacts
