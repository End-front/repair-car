'use script';
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();
let time = 500;

function  autoHeightSection() {
	$('.section-3__row.big').height($('.section-3__row').height() + $('.section-3__row').outerHeight());
	$('.section-3__row-button').height($('.section-3__row').height());
	if ($(window).width() > 765) {
		$('.section-3__form').height($('.section-3__row').eq(1).outerHeight() * 3);
	} else if ($(window).width() <= 765 && $(window).width() > 575 ) {
		let q = $('.section-3__form').children().length + 1;
		if (q % 2 == 1) {q += 1};
		q /= 2;
		$('.section-3__form').height($('.section-3__row').outerHeight() * q);
	} else {
		$('.section-3__form').attr('style', '');
	}
}

$(document).ready(function() {
	let mainButtonWidth = 0; 
	let mainImgHeight = 0;
	for (i = 0;; i++) {
		let j = $('.main-section__col').eq(i).children('.main-section__button').outerWidth();
		if (j == undefined) {break};
		if (mainButtonWidth < j) {mainButtonWidth = j};
	}
	$('.main-section__col').width(mainButtonWidth).children('.main-section__button').outerWidth(mainButtonWidth);
	for (i = 0;; i++) {
		let j = $('.main-section__wrapper').eq(i).children('img').outerHeight();
		if (j == undefined) {break};
		if (mainImgHeight < j) {mainImgHeight = j};
	}
	$('.main-section__wrapper').height(mainImgHeight); 
	autoHeightSection();
	$(window).resize(function() {
		$('.main-section__col').width(mainButtonWidth).children('.main-section__button');
		$('.main-section__wrapper').height(mainImgHeight);
		autoHeightSection();
	});

	$('.header__right__link, a, button').click(function() {
		let attr = $(this).attr('data-window');
		if (attr) {
			$("#"+attr).addClass('active');
			$('.window-back').addClass('active');
		}
	});
	$('.window-back, .window__return').click(function() {
		if ($('.window').hasClass('ready')) {
			$('.window-back').removeClass('active');
			$('.window').css('opacity', '0').removeClass('ready active');
			setTimeout(function() { $('.window').attr('style', '') }, time);
		} else {
			$('.window, .window-back').removeClass('active');
		}
	});
	$('.window__form button').click(function() {
		$('.window__form, .window__form__row').removeClass('not');
		let j = $(this).parent().children('.window__form__row').length;
		for (i = 0; i <= j; i++) {
			let input = $(this).parent().children('.window__form__row').eq(i).children('input').val();
			if (!input) {
				$(this).parent().children('.window__form__row').eq(i).addClass('not');
			};
		};
		if ($(this).parent().children('.window__form__row').hasClass('not')) {
			$(this).parent().addClass('not');
		} else {
			$(this).parent().parent().addClass('ready');
			$('#window-thanks').addClass('ready');
		}
	});
	$('.section-3__button').click(function() {
		$('.section-3__row .input').removeClass('not');
		let j = $('.section-3__form').children('.section-3__row').length;
		for (i = 0; i <= j; i++) {
			let input = $('.section-3__row .input').eq(i).val();
			if (!input) {
				$('.section-3__row .input').eq(i).addClass('not');
			};
		};

	});
});
