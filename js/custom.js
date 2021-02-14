$(function () {
	$('.works__btns button, .works__btns a').on('focus', function (e) {
		$(this).parents('.works__element').addClass('works__element--active'); // берем текущий элемент, ищем у его родителя класс works__element
	});

	$('.works__btns button, .works__btns a').on('blur', function (e) {
		$(this).parents('.works__element').removeClass('works__element--active');
	});

	function moveProgressBar(node, nodeline, tooltip, animationlength = 1500) { // node - название класса, где присутствует data-атрибут, второй параметр - название класса линии, третий - название класса для подсказки, 4-й параметр - скорость анимации, которая будет равна по умолчанию 1.5с
			const progressElement = $(node); // в эту переменную положим выгрузку из элементов
		  // далее перебериаем каждый элемент при помощи функции each
			progressElement.each(function (index, item) {
				// console.log(item) // элемент
				$(item).find(nodeline).animate({ // внутри progress__element ищем progress__line и когда находим выполняем метод animate
					 																 // анимируем свойство width
					width: item.dataset.progressPercent + '%' // в качестве значения свойства width подставляем значение из data атрибута, добаляем к считанному значению проценты
				}, animationlength); // время анимации 1.5 с
				// после этого мы подсказываем подсказку tooltip через 1.5 s
				$(item).find(tooltip).show(animationlength); // показываем через 1.5 s
			})
	}

  let animate = true;
	
	$(window).scroll(function () { // скролл страницы
		// определяем позицию нахождения блока skills
		// $('.skills').offset().top; // Метод offset возвращает координаты относительно начала страницы до нужного элемента
		// дальеш мы должны сравнить это значение с текущей прокруткой
			if($('.skills').offset().top <= $(window).scrollTop() + 150 ){ // т.е. если значение прокрутки $(window).scrollTop) будет больше или равно значению от верехнего края элемента, то мы будем запускать нашу функцию
				if(animate){ // если анмация еще не выполнялась - то мы запускаем функцмю
					moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip')
				}
				animate = false; // после того, как функция выпонилась, мы перезаписываем переменную animate
		}
	})


	$('.carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		navText: [], // чтобы отключить стрелки влево - вправо, и тега span в button не будет
		items: 5,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			980:{
				items:5
			}
		}
	})

	

})