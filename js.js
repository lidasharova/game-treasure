//получение случайного места на карте (где будут сокровища)
//от0 до 399 т.к размер карты 400 * 400 px 
function getRandomNumber (size) {
	return Math.floor(Math.random() * size);
};

//функция для вычисления расстояния от клика до клада
function getDistance (event, target){
	let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//ф-ция для выведения подсказки в зависимости от расстояния события
let getDistanceHint = function (distance) {
        if (distance < 10) {
          return "Обожжешься!";
        } else if (distance < 20) {
          return "Очень горячо";
        } else if (distance < 40) {
			alert("Осталось попыток : " + (clickMaxCounter - clicks));
          return "Горячо";
        } else if (distance < 80) {
          return "Тепло";
        } else if (distance < 160) {
          return "Холодно";
        } else if (distance < 320) {
			alert("Осталось попыток : " + (clickMaxCounter - clicks));
          return "Очень холодно";
        } else if (distance < 420){
			return "Очень-очень холодно";
		} else if (distance < 500){
			return "Очень-очень-очень холодно!";
		} else{
          return "Точно замерзнешь!";
        }
};


//задаем координаты случайной точки клада
let width = 600 ; 
let height = 600;
let target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
};

let clicks = 0;   //заводим счётчик кликов
let clickMaxCounter = 20  //количество всего попыток


// вешаем на картинку обработчик кликов во время игры
$('#map').click(function(event){
	clicks++;
	//получаем расстояние от события до клада и помещаем в переменную
	let distance = getDistance(event, target);
	// преобразуем расстояние в подсказку
	let distanceHint = getDistanceHint(distance);
	//выводим новую подсказку в тег
	$("#distance").text(distanceHint);
	//если клик был достаточно близко, поздравляем с победой
			if (distance < 8) {
				alert("Клад найден! Сделано кликов: " + clicks);
	};
	//если превысилось количество попыток - завершение игры!
	if(clicks > 20){
		alert("КОНЕЦ ИГРЫ! СДЕЛАНО КЛИКОВ:" + clicks);
	};

});