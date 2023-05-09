'use strict';
let lang = 'en';
let dayOfTheWeekRu = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let dayOfTheWeekEn =  'monday, tuesday, wendnesday, thursday, friday, saturday, sunday';

// if конструкция
if (lang=='ru') {
  console.log(dayOfTheWeekRu);
} else if (lang=='en') {
  console.log(dayOfTheWeekEn);
}

// конструкция switch case
switch(lang) {
  case 'ru':
    console.log(dayOfTheWeekRu);
    break
  case 'en':
    console.log(dayOfTheWeekEn);
    break
}

//  многомерный массив
const days = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(days[lang]);




// тернарные операторы
let namePerson = 'Александр';
namePerson=='Артем' ? console.log('директор'):
namePerson=='Александр' ? console.log('преподаватель') : console.log('студент');