import React from 'react'
import './Home.scss'
import Compon from './Compon'
import Personal from './personal/Personal'
import Contacts from './contacts/Contacts'

function Home() {
   return (
      <>
         <div className="bg"></div>
         <Compon />
         <Personal listName={'Администрация'} />
         <Contacts
            title={'Муниципальное Бюджетное Учреждение Культуры Дом Культуры "Звёздный"'}
         />
      </>
   )
}

export default Home
