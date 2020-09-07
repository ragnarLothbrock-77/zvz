
export const listData = [
   {
      type: 'about',
      id: 1,
      to: '/',
      text: 'О Нас',
      icon: true,
      isDrop: true,
      drop: [
         {
            id: 1,
            to: '/#team',
            text: 'Наша Команда'
         },
         {
            id: 3,
            to: '/#contacts',
            text: 'Контакты'
         },
         {
            id: 2,
            to: '/',
            text: 'Фотогалерея'
         },
      ]
   },
   {
      type: 'items',
      id: 2,
      to: '/items',
      text: 'События',
      icon: true,
      isDrop: true,
      drop: [
         {
            id: 4,
            to: '/',
            text: 'Мероприятия'
         },
         {
            id: 5,
            to: '/',
            text: 'Летний Творческий Клуб'
         },
         {
            id: 6,
            to: '/',
            text: 'Встречи С Главой Района'
         }
      ]
   },
   {
      type: 'clubs',
      id: 3,
      to: '/clubs',
      text: 'Клубные Формирования',
      icon: true,
      isDrop: true,
      drop: [
         {
            id: 7,
            to: '/',
            text: 'Студия АЛ'
         },
         {
            id: 8,
            to: '/',
            text: 'Цирк'
         },
         {
            id: 9,
            to: '/',
            text: 'Дошкольное Образование'
         }
      ]
   },
   {
      type: 'services',
      id: 4,
      to: '/services',
      text: 'Услуги',
      icon: true,
      isDrop: true,
      drop: [
         {
            id: 10,
            to: '/',
            text: 'Аренда Зала'
         },
         {
            id: 11,
            to: '/',
            text: 'Студия Звукозаписи'
         },
         {
            id: 12,
            to: '/',
            text: 'Проведение Мероприятий'
         }
      ]
   }
]

export const historyData = {
   about: {
      id: 1,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat necessitatibus distinctio magni vel, tempora iure animi eveniet et eum ipsa temporibus quasi alias dolor amet veritatis molestias iusto cumque commodi recusandae repudiandae voluptatibus ratione! Inventore voluptatem sapiente modi minima hic! Eveniet, est ex suscipit consequatur eius veniam tenetur fugiat obcaecati voluptatum cum esse, ad praesentium facilis magni harum numquam, ratione illo explicabo! Molestiae animi, quaerat quod rem porro optio! Sit, quibusdam explicabo asperiores repudiandae optio iure fugiat natus, eaque tempore voluptatem itaque odit. Quam id ullam necessitatibus ab veritatis, velit asperiores voluptas excepturi aliquid suscipit maxime perspiciatis mollitia nobis!',
      src: require('./assets/img/zvz.jpeg')
   },
   history: {
      id: 2,
      text: 'Это текст истории Дома Культуры!',
      src: ' '
   },
}



export const personalData = [
   {
      id: 1,
      src: '',
      name: 'Матвеева Надежда Владимировна',
      position: 'Директор'
   },
   {
      id: 2,
      src: '',
      name: 'Горемыкина Екатерина Евгеньевна',
      position: 'Заместитель Директора'
   },
   {
      id: 3,
      src: require('./assets/img/personalPhoto/helena.jpg'),
      name: 'Мирошниченко Елена Сергеевна',
      position: 'Начальник Отдела Клубных Формирований'
   },
   {
      id: 4,
      src: '',
      name: 'Михайлина Елена Дмитриевна',
      position: 'Художественный руководитель'
   },
   {
      id: 5,
      src: '',
      name: 'Рышняну Ктото Там',
      position: 'Главный Бухгалтер'
   },
   {
      id: 6,
      src: require('./assets/img/personalPhoto/semen.jpeg'),
      name: 'Мирошниченко Семен Тимурович',
      position: 'Автор Сайта'
   }
]


export const contactsItems = [
   {
      id: 1,
      title: 'Адрес',
      text: '108828, Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20 '
   },
   {
      id: 2,
      title: 'Телефон',
      text: '+7 (495)850-80-53'
   },
   {
      id: 3,
      title: 'Адрес',
      text: '108828, Москва, п.Краснопахорское, с.Красная Пахра, ул.Заводская, д.20 '
   },
   {
      id: 4,
      title: 'Режим Работы Учреждения',
      text: 'Ежедневно с 10.00 до 20.00 без перерыва на обед '
   },
   {
      id: 5,
      title: 'EMAIL',
      text: 'zvezdnii45@list.ru'
   }
]

export const linksData = [
   {
      id: 1,
      alt: 'Instagram',
      src: require('./assets/img/con/instagram.png'),
      to: 'https://www.instagram.com/'
   },
   {
      id: 2,
      alt: 'YouTube',
      src: require('./assets/img/con/youtube.png'),
      to: 'https://www.youtube.com/'
   },
   {
      id: 3,
      alt: 'VK',
      src: require('./assets/img/con/vk.png'),
      to: 'https://vk.com/'
   },
   {
      id: 4,
      alt: 'Twitter',
      src: require('./assets/img/con/twitter.png'),
      to: 'https://twitter.com/'
   }
]