/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
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

'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("How much movies you watched?", "");

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How much movies you watched?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// console.log(Object.keys(personalMovieDB.movies).length);

function rememberMyfilms() {
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
}

rememberMyfilms();

function detectPersonalLevel() {
	if (numberOfFilms < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
		console.log("Вы классический зритель");
	} else if (numberOfFilms > 30) {
		console.log("Вы киноман");
	} else {
		console.log("произошла ошибка");
	}
}

detectPersonalLevel();

function writeYourGenres() {
	for (let i =1; i < 4; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
	}
}

writeYourGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);


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