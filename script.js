/////анимация при скролле
/////окна заявки и вопросов
AOS.init({
 //  Global settings:
 disable:  false, //  accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
 startEvent:  'DOMContentLoaded', //  name of the event dispatched on the document, that AOS should initialize on
 initClassName:  'aos-init', //  class applied after initialization
 animatedClassName:  'aos-animate', //  class applied on animation
 useClassNames:  false, //  if true, will add content of `data-aos` as classes on scroll
 disableMutationObserver:  false, // disables automatic mutations' detections (advanced)
 debounceDelay:  50, //  the delay on debounce used while resizing window (advanced)
 throttleDelay:  99, //  the delay on throttle used while scrolling the page (advanced)
  

  //  Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
 offset:  120, //  offset (in px) from the original trigger point
 delay:  0, //  values from 0 to 3000, with step 50ms
 duration:  1000, //  values from 0 to 3000, with step 50ms
 easing:  'ease', //  default easing for AOS animations
 once:  false, // wether animation should happen only once - while scrolling down
 mirror:  false, //  whether elements should animate out while scrolling past them
 anchorPlacement:  'bottom', //  defines which position of the element regarding to window should trigger the animation

});
function clickLeaveRequest(num) { //фцнкция для появления модального окна
	let el = 0;
	for (let i = 0; i < 2; i++)
		document.querySelectorAll(".mbat2")[i].style.display = "block";
	if (num == 2) { // окна страницы с вопросом
		el = document.querySelector(".asks-bg");
		el.classList.add("modal-windows2");
		document.querySelector(".menu-button-and-text").classList.add("dispnone");
	}
	if (num == 1) { // окна страницы с заявкой
		el = document.querySelector("#headers");
		el.classList.add("modal-windows2");
		document.querySelector(".menu-button-and-text").classList.add("dispnone");
		document.querySelector(".phone-part").classList.add("dispnone");
		document.querySelector(".refServ").classList.add("dispnone");
	}
	el.style.background = "rgba(0,0,0,0.9)";
	document.body.style.overflowY = 'hidden';
}
function clickOnExit(num) { // крестик, выход из модального окна
	for (let i = 0; i < 2; i++)
		document.querySelectorAll(".mbat2")[i].style.display = "none";
	if (num == 1) {// окна страницы с заявкой
		let el = document.querySelector("#headers");
		el.classList.remove("modal-windows2");
		document.querySelector(".menu-button-and-text").classList.remove("dispnone");
		document.querySelector(".phone-part").classList.remove("dispnone");
		document.querySelector(".refServ").classList.remove("dispnone");
		el.style.background = "url(../img/headers/bg.jpg) no-repeat";
	}
	if (num == 2) { // окна страницы с вопросом
		let el = document.querySelector(".asks-bg");
		el.classList.remove("modal-windows2");
		el.style.background = "url(../img/asks/bg.jpg) no-repeat";
	}
	document.body.style.overflowY = 'scroll';
	window.location.reload();
}
///////////////menu btn
let counts = 0;
function clickOnMenu() { //кнопка меню
	let el = document.querySelector(".menu-btn");
	let list = document.querySelector(".ref-list");
	let el2 = document.querySelector(".menu-oll");
	let el3 = document.querySelectorAll('.content');
	if (counts == 0) {
		el.classList.add("menu-btn-active");
		list.style.display = "block";
		counts++;
		el2.classList.add("menu-oll-active");
		for (let i = 0; i < 2; i++)
			el3[i].classList.add('content-active');
	}
	else {
		el.classList.remove("menu-btn-active");
		list.style.display = "none";
		counts = 0;
		el2.classList.remove("menu-oll-active");
		for (let i = 0; i < 2; i++)
			el3[i].classList.remove('content-active');
	}

}
/////// рассчиатть стоимость
let metresCv = 0; // квадратных метров
let summaCalcPrice = 0; // сумма
let oldEl = 0; // тсарый элемент для цвета кнопки
let oldPoint = 0;
let Differ = 0;
function clickOnPoint(num) {
	let el = document.querySelector(".p" + num);
	let small_point = document.querySelector(".sp" + num);
	if (oldPoint != 0 || oldPoint == el)  {
		oldPoint.style.background = "#fff";
	}
	if (num == 1) 
		metresCv = 100;
	else if (num == 2) 
		metresCv = 10000;
	else if (num == 3)
		metresCv = 250000;
	else if (num == 4)
		metresCv = 500000;
	el.style.background = '#19b5fe';
	oldPoint = el;
	Proverka();
}
function clickOnDif(num) {
	let el = document.getElementById(num + "-" + "dif");
	if (oldEl != 0)  {
		oldEl.style.background = "none";
		oldEl.style.border = "1px solid #fff";
	}
	el.style.background = "#19b5fe";
	el.style.border = "1px solid #19b5fe";
	if (num == 1) 
		Differ = 10
	else if (num == 2) 
		Differ = 20
	else if (num == 3)
		Differ = 30
	oldEl = el;
	Proverka();
}
function Proverka() {
	if (Differ != 0 && metresCv != 0) {
		summaCalcPrice = Differ * metresCv;
		document.querySelector(".summ1").innerHTML = "Количество квадратных метров: " + metresCv;
		document.querySelector(".summ2").innerHTML = "Уровень отделки: " + Differ;
		document.querySelector(".summ3").innerHTML = "Общая стоимость: " + summaCalcPrice + " рублей";
		document.querySelector(".modal-windows").style.display = "flex";
	}
}
function prov2() {
	Differ = 0;
	metresCv = 0;
	oldPoint.style.background = "#fff";
	oldEl.style.border = "1px solid #fff";
	oldEl.style.background = "none";
	document.querySelector(".modal-windows").style.display = "none";
}
///////////////ПОртфолио
function criter(value) {
	let el1 = document.querySelectorAll(".cr1");
	let el2 = document.querySelectorAll(".cr2");
	let el3 = document.querySelectorAll(".cr3");
	let img_port = document.querySelector(".img-port");
	for (let i = 0; i < 2; i++) 
	{
		el1[i].style.display = "none";
		el2[i].style.display = "none";
		el3[i].style.display = "none";
		img_port.classList.remove("img-port2");
	}
	if (value == 0) 
	{
		for (let i = 0; i < 2; i++) 
		{
			el1[i].style.display = "block";
			el2[i].style.display = "block";
			el3[i].style.display = "block";
		}
	}
	if (value == 1 || value == 2 || value == 3) 
	{
		if (value == 1)
			value = el1;
		if (value == 2)
			value = el2;
		if (value == 3)
			value = el3;
		for (let i = 0; i < 2; i++) 
		{
			img_port.classList.add("img-port2");
			value[i].style.display = "block";
		}
	}
}
let countClickOnImg = 0;
function ishod_pol() {
	let el = document.querySelector(".img-port")
	if (countClickOnImg == 0 || countClickOnImg == 2) {
		el.classList.add("img-port-notactive");
		el.classList.remove("img-port-notactive2");
		countClickOnImg++;
	}
	else if (countClickOnImg == 1) {
		el.classList.remove("img-port-notactive");
		el.classList.add("img-port-notactive2");
		countClickOnImg++;
	}
	else if (countClickOnImg == 3) {
		el.classList.remove("img-port-notactive");
		el.classList.remove("img-port-notactive2");
		countClickOnImg = 0;
	}
}
/////////////////Карусель
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 7,
  	margin: 40,
    responsive:{
    	0:{
    		items: 2,
    		dots: false,
    	},
        500:{
            items:3
        },
        1024:{
            items:5
        },
        1700:{
            items:7
        }
    }
  });
});