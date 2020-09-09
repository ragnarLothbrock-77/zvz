import React from 'react'
import './Documents.scss'
import Document from './document/Document'
import DocItem from './docItem/DocItem'
import { docsData } from './docsData'

function Documents() {

   const list = docsData.map(item => {
      return (
         <DocItem
            key={item.id}
            mainText={item.text}
            drop={
               item.drop.map(i => {
                  return (
                     <Document
                        key={i.id}
                        text={i.text}
                        href={i.href}
                     />
                  )
               })
            }
         />
      )
   })




   return (
      <>
         <div id="info" className="documents">
            <div className="documents-body container">
               <div className="documents-header">
                  <h1 className="documents-header__title title">Правовая Информация</h1>
                  <ul className="documents-header-info-list">
                     <li className="documents-header-info-list__text">Документы и общая информация о Доме Культуры «Звёздный» на <a className="documents-header-info-list__text_link" href="/"> Официальном сайте для размещения информации о государственных учреждениях</a></li>
                     <li className="documents-header-info-list__text">Полное название: Государственное Бюджетное Учреждение Культуры Дом Культуры «Звёздный»</li>
                     <li className="documents-header-info-list__text">Сокращённое название МБУК ДК «Звёздный»</li>
                     <li className="documents-header-info-list__text">Год создания: 2000</li>
                  </ul>
               </div>
               <div className="documents-main">
                  <div className="documents-main__body">
                     <ul className="documents-list">
                        {list}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Documents
