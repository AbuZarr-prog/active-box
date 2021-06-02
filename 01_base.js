////////////////// Переменные
//const lastName = 'Abu' - такая форма не поддаётся изменениям, и приходится только для чтения
//let age = 22 - данная форма переменная позволяет менять в ней всё

//camelCase - два слова, первое словое начинается с маленькой, а второе с большой буквы но без лишних символов

// Для переменных можно использовать символы такие как:
//const _ = 'private'
//const $ = 'some value'

// но нельзя добавлять "if"
// const if = 'mkef' // err 	

// можно добавлять цифру в переменную
//const withNum5 = '5'
// но нельзя начинать переменную с цифры
// const 5withNum = '5' // err

//////// 2 Мутирование

//console.log('Имя человека' + firstName + ', а возраст человека: ' + age) // строчный элемент, и цифры в нём тоже выходят как строчные
//alert('Имя человека: ' + firstName + ', а возраст человека:' + age) // всплывающее окно

//const lastName = promt('Введите фамилию') // даёт возможность ввести что-либо в строку, тем самым сохраняя её в значение переменной
// alert(firstName + '' + lastName) // а эта концепция выводит прошлую переменную

//////// 3 Операторы
//a = 15
//b = 10
//c = 32
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(currentYear++)
//console.log(currentYear--)

//////// 4 Типы данных
// Чтобы вычислить какой тип данных вы используете, есть такое оператор как "typeof", он позволяет вывести в консоле определение.
//const isProgammer = true
//const name = 'Zarr'
//const age = 22
//let x
//console.log(typeof isProgammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)

//////// 5 Приоритет операторов
// Приоритет начинается от 20 до 0, тем самым какая операция приоритетней, та и выполняется первой
// + - > < >= <=
// const fullAge = 21
// const birthYear = 1999
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

//////// 6 Условные операторы
// Условные операторы выполняются в последовательсти if if_else else
// const courseStatus = 'ready' // ready, fail, pending

// if (courseStatus === 'ready') {
// 	console.log('Курс уже готов')
// } else if (courseStatus === 'pending') {
// 	console.log('Курс пока находится на процессе разработки')
// } else {
// 	console.log('Курс не получается')
// }

//////// 7 Булевая логика



//////// 8 Функции 
// function calculateAge(year) {
// 	return 2020 - year
// }

// console.log(calculateAge(1993))
// console.log(calculateAge(2019))
// console.log(calculateAge(1999))

// function logInfoAbout(name , year) {
// 	const age = calculateAge(year)

// 	if (age > 0) {
// 		console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// 	} else {
// 		console.log('Вообще-то это уже будущее!')
// 	}
// }

// logInfoAbout('Тимоха', 1999)
// logInfoAbout('Рахима', 1998)
// logInfoAbout('Дося', 1996)

//////// 9 Массивы
//const cars = ['Мазда', 'Mersedec', 'Ford']

// console.log(cars.length)
// console.log(cars[3]) 
// console.log(cars[2])
// console.log(cars[0])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

//////// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i]
// 	console.log(car)
// }

// for (let car of cars) {
// 	console.log(car)
// }

//////// 11 Объекты
// const person = {
// 	firstName: 'Abu',
// 	lastName: 'Zarr',
// 	year: 1999,
// 	language: ['Ru', 'En', 'Ar'],
// 	hasWife: false,
// 	greet: function() {
// 		console.log('greet form person')
// 	}
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgammer = true
// console.log(person)

// person.greet()




