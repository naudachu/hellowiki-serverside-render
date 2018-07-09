// логика работы плейсхолдера в две строки


// mask input field
$("#phone-field").mask("+7 (999)-999-99-99", {autoclear: false});

$("textarea").on('mousedown change keyup paste focusout', function(evt) {
	console.log(evt);
	var length = $(this).val().length;
	var value = $(this).val();
	// двойное выражение  сравнения value при mousedown
	if ($("textarea").is(":focus") || $("textarea").is(":active")) {
		console.log(value);
		$(this).addClass('data-edits');
		$('.textarea-placeholder:after').hide();
		console.log('if');
	}
	// при фокусауте есть length это маска. надо ее убирать а потом проверять
	//	сравнить с value маски плагина. -> 
	else if (value == "+7 (___)-___-__-__" && $("textarea").not(":focus")) {
		$(this).removeClass('data-edits');
		$('.textarea-placeholder:after').show();
		console.log('else mask');
	}	
	else if (length === 0 && $("textarea").not(":focus")) {
		$(this).removeClass('data-edits');
		$('.textarea-placeholder:after').show();
		console.log('else empty');
	}
});

// скрытие панели cookies

$(document).on('click', '.main-header__cookies-close', function() {
	$('.main-header__cookies').slideToggle();
});

// логика переноса навигации в блок демонстрации.
// нужно захватить блок и препенд сделать перенос при ресайзе таблета.

var $mainNavigation = $(".main-header__navigation");

if ($(document).width() <= 991) {
	$('.demo-section').prepend( $mainNavigation );
} else {
	$($mainNavigation).insertAfter( ".main-header__logo" );
}
$(window).resize(function () {
	var width = $(this).width();
	if ($(document).width() <= 991) {
		$('.demo-section').prepend( $mainNavigation );
	} else {
		$($mainNavigation).insertAfter( ".main-header__logo" );
	}
});

