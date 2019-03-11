//Menu adaptive with target

$(document).mouseup(function (e){ // событие клика по веб-документу 
	var x = document.getElementById('myTopnav');
	var icon_menu = document.getElementById("icon_menu");
	var overlay = document.getElementById("main-overlay");
	var div = $(".sub-menu"); // тут указываем ID элемента 
	if (!div.is(e.target) // если клик был не по нашему блоку 
	&& div.has(e.target).length === 0) { // и не по его дочерним элементам 
		if (x.classList.contains("responsive")) {
			x.classList.remove("responsive");
			icon_menu.style.display = "block";
			overlay.style.opacity = "0";
			overlay.style.zIndex = "-1";
		} 
	} 
	});

//Header scroll

	window.onscroll = function () {
		var menu = document.getElementsByClassName("menu")[0];
	
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 0) {
			menu.style.backgroundColor = "#000";
		}
		else {
			menu.style.backgroundColor = "rgba(0, 0, 0, 0.526)";
		}
	}

// Menu adaptive (hide/show)

function hideMenu() {
	var x = document.getElementById('myTopnav');
	var icon_menu = document.getElementById("icon_menu");
	var overlay = document.getElementById("main-overlay");
	x.classList.toggle("responsive");

	if ($("body").width() <= 768) {
		if (x.classList.contains("responsive")) {
			overlay.style.opacity = ".5";
			overlay.style.zIndex = "2";
			icon_menu.style.display = "none";
		} 
		else {
			overlay.style.opacity = "0";
			overlay.style.zIndex = "-1";
			icon_menu.style.display = "block";
		}
	}
}

// Modal

$(".modal_1").animatedModal();
$(".modal_2").animatedModal();
$(".modal_3").animatedModal();
$(".modal_4").animatedModal();
$(".modal_5").animatedModal();
$(".modal_6").animatedModal();

let button = document.getElementsByClassName("but");
let information = document.getElementsByClassName("information");
let img = document.querySelectorAll(".but img")
let btnClose = document.getElementsByClassName("btn-close-modal");

for (let i = 0; i < btnClose.length; i++) {
	btnClose[i].addEventListener("click", function () {
			information[i].classList.remove("open");
			button[i].classList.remove("but-open");
	})
}

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function () {
		information[i].classList.toggle("open");
		this.classList.toggle("but-open");
	})
}


