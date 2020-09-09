import React from 'react'
import './Footer.scss'
import logo from '../../assets/img/logo.png'
import { linksFooterData } from '../../data'

function Footer() {
   return (
      <>
         <div className="footer">
            <div className="footer__body">
               <div className="footer__body_item">
                  <div className="footer-info">
                     <div className="footer-info__text">
                        <h1>Работаем ежедневно с 10.00 до 20.00</h1>
                     </div>
                  </div>
               </div>
               <div className="footer__body_item">
                  <div className="footer-logo">
                     <img src={logo} alt="Звёздный" className="footer-logo__img" />
                  </div>
               </div>
               <div className="footer__body_item">
                  <div className="footer-links">
                     <div className="footer-links__body">
                        <ul className="footer-links-list">
                           {linksFooterData.map(item => (
                              <li key={item.id} className="footer-links-list__item">
                                 <a href={item.to} className="footer-links-list__item_link">
                                    <img className="footer-links-list__item_img" src={item.src} alt={item.alt} />
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Footer
