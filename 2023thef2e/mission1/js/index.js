AOS.init();

var swiper = new Swiper("#news_swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 3000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )

function openDonatePlan() {
    document.getElementById("donate_front").style.display= "none";
    document.getElementById("donate_back").style.display= "block";
}

function closeDonatePlan() {
    document.getElementById("donate_back").style.display= "none";
    document.getElementById("donate_front").style.display= "block";
}

const donate_plan = document.getElementsByClassName('donate_plan_item')

for (var i = 0; i < donate_plan.length; i++) {
    donate_plan[i].addEventListener('click', function() {
        for (var j = 0; j < donate_plan.length; j++) {
            if (donate_plan[j] == this) {
                donate_plan[j].classList.add('active');
            } else {
                donate_plan[j].classList.remove('active');
            }
        }
    });
}

function replyCommend() {
    document.getElementById("replyCommend").style.display= "block";
    document.body.classList.add('hide');
}

function closeCommend() {
    document.getElementById("replyCommend").style.display= "none";
    document.getElementById("service_form").reset();
    document.body.classList.remove('hide');
}

function replyDonate() {
    document.getElementById("replyDonate").style.display= "block";
    document.body.classList.add('hide');
}

function closeDonate() {
    document.getElementById("replyDonate").style.display= "none";
    document.getElementById("Donate_form").reset();
    document.body.classList.remove('hide');
    closeDonatePlan()
}

function openMenu() {
    document.getElementById("button_donate").classList.add('btn-line');
    let a = document.getElementsByClassName("header_menu")[0].style.display= "block";

    const header_menu_item = document.getElementsByClassName('header_menu_item');
    console.log(header_menu_item)
    for (var i = 0; i < header_menu_item.length; i++) {
        header_menu_item[i].addEventListener('click', () => closeMenu());
    }

}

function closeMenu() {
    document.getElementById("button_donate").classList.remove('btn-line');
    document.getElementsByClassName("header_menu")[0].style.display= "none";
}