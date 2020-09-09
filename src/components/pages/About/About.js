import React from 'react'
import './About.scss'
import InfoAbout from './info/InfoAbout'
import Personal from './personal/Personal'
import Contacts from './contacts/Contacts'
import Documents from './Documents/Documents'

function About() {
   return (
      <>
         <div className="bg"></div>
         <InfoAbout />
         <Personal listName={'Наша Команда'} />
         <Documents />
         <Contacts
            title={'Муниципальное Бюджетное Учреждение Культуры Дом Культуры "Звёздный"'}
         />
      </>
   )
}

export default About
