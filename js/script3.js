/* Задание на урок:

1) Создать переменную personalMovieDB.count и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок 2 :

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

	start: function() {
		personalMovieDB.count = +prompt("How much movies you watched?", "");
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("How much movies you watched?", "");
		}
	},

	rememberMyfilms: function() {
		for (let i = 1; i < 3; i++) {
			let lastMovie = prompt('One of the latest films you watched', ''),
				lastMovieRate = prompt('Please rate this film', '');
				if (lastMovie != "" && lastMovie != null && lastMovie.length < 10) {
					personalMovieDB.movies[lastMovie] = lastMovieRate;
				} else {
					i--;
					console.log('error');
				}
		}
	},

	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("произошла ошибка");
		}
	},

	writeYourGenres: function() {
		for (let i = 1; i < 4; i++) {
			let genre  = prompt(`Ваш любимый жанр под номером ${i}`, "");

			if (genre != "" && genre != null && isNaN(genre)) {
				personalMovieDB.genres[i - 1] = genre;
			} else {
				i--;
				console.log('error');
			}
		}

		personalMovieDB.genres.forEach((val, index) => {
			console.log(`Любимый жанр ${index + 1} - это ${val}`);
		});
	},

	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function(privat) {
		if (!privat) {
			personalMovieDB.privat = true;
		} else {
			personalMovieDB.privat = false;
		}
	}
};

personalMovieDB.start();

personalMovieDB.rememberMyfilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);


// console.log(Object.keys(personalMovieDB.movies).length);

/* while (Object.keys(personalMovieDB.movies).length < 2) {
	let lastMovie = prompt('One of the latest films you watched', ''),
		lastMovieRate = prompt('Please rate this film', '');
		if (lastMovie != "" && lastMovie != null && lastMovie.length < 10) {
			personalMovieDB.movies[lastMovie] = lastMovieRate;
		} else {
			console.log('error');
		}
} */

/* do {
	let lastMovie = prompt('One of the latest films you watched', ''),
	lastMovieRate = prompt('Please rate this film', '');
	if (lastMovie != "" && lastMovie != null && lastMovie.length < 10) {
		personalMovieDB.movies[lastMovie] = lastMovieRate;
	} else {
		console.log('error');
	}
} while (Object.keys(personalMovieDB.movies).length < 2); */

/* const	lastMovie2 = prompt('One of the latest films you watched too', ''),
	lastMovieRate2 = prompt('Please rate this film', '');

personalMovieDB.movies[lastMovie] = lastMovieRate;
personalMovieDB.movies[lastMovie2] = lastMovieRate2;
 */
// console.log(personalMovieDB);