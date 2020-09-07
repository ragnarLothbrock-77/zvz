import React from 'react'
import './Documents.scss'

function Documents() {
   return (
      <>
         <div className="documents">
            <div className="documents-body container">
               <div className="documents-header">
                  <h1 className="documents-header__title title">Правовая Информация</h1>
                  <ul className="documents-header-info-list">
                     <li className="documents-header-info-list__text">Документы и общая информация о Культурном центре «Вдохновение» на <a className="documents-header-info-list__text_link" href="/"> Официальном сайте для размещения информации о государственных учреждениях</a></li>
                     <li className="documents-header-info-list__text">Полное название: Государственное Бюджетное Учреждение Культуры Дом Культуры «Звёздный»</li>
                     <li className="documents-header-info-list__text">Сокращённое название МБУК ДК «Звёздный»</li>
                     <li className="documents-header-info-list__text">Год создания: 2000</li>
                  </ul>
               </div>
               <div className="documents-main">

               </div>
            </div>
         </div>
      </>
   )
}

export default Documents
