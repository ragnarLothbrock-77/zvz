import React from 'react'

function HistoriAbout({ text, src }) {
   return (

      <>
         <div className="info-history-main__text">{text}</div>
         <div className="info-history-main__img-block">
            <img className="info-history-main__img " src={src} alt="" />
         </div>
      </>
   )
}

export default HistoriAbout
