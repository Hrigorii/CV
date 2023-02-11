
////////////////////////////// On Load ///////////////////////////////////////////////////


////////////////////////////// Get elements from Page ////////////////////////////////////

const button = document.querySelector('.button__contact');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const stars = document.querySelectorAll('img');
const container = document.querySelector('.skills__items');
const classImage = [...str.querySelectorAll('.item')];


////////////////////////////// draw Stars ////////////////////////////////////////////////


stars.forEach(star => {
	if (star.className == 'full__star') {
		star.src = "./img/star_full.png";
	}
	if (star.className == 'empty__star') {
		star.src = "./img/star_empty.png";
	}
})

function createStar(className, source, target) {
	const currentImage = document.createElement('img');
	currentImage.className = className;
	currentImage.src = source;
	target.append(currentImage);
}

function drawStar(full, empty, target) {
	for (let i = 0; i < full; i++) {
		createStar("full__star", './img/star_full.png', target);
	}
	for (let i = 0; i < empty; i++) {
		createStar('empty__star', './img/star_empty.png', target);
	}
}

const mySkills = {
	responsibility: {
		f: 5,
		e: 0,
	},
	attentiveness: {
		f: 4,
		e: 1,
	},
	communication: {
		f: 4,
		e: 1,
	},
	abilitytolearn: {
		f: 5,
		e: 0,
	},
	nonconflict: {
		f: 5,
		e: 0,
	},
	withoutbadhabits: {
		f: 5,
		e: 0,
	},
}

classImage.forEach(image => {
	const currentSkill = image.querySelector('p').textContent.toLocaleLowerCase().replace(/\s/g, '');
	const currentTarget = image.querySelector('.image');
	drawStar(mySkills[currentSkill].f, mySkills[currentSkill].e, currentTarget)
})


////////////////////////////// Open/Close  modal ////////////////////////////////////


function showModal() {
	modal.classList.add('active');
	document.body.classList.add('stop_scroll');

}

function close() {
	modal.classList.remove('active');
	document.body.classList.remove('stop_scroll');
}

function closeModal(event) {
	if (event.target.className == 'modal__body') {
		close();
	}
	if (event.target.className == 'ok-button') {
		close();
	}
}

button.addEventListener('click', showModal);
modal.addEventListener('click', closeModal);
document.querySelector('.ok-button').addEventListener('click', closeModal);


////////////////////////////// Klick on star ////////////////////////////////////


function toggle(event) {
	if (event.target.nodeName == 'IMG') {
		if (event.target.className == 'full__star') {
			event.target.className = 'empty__star';
			event.target.src = './img/star_empty.png';
		} else
			if (event.target.nodeName == 'IMG') {
				if (event.target.className == 'empty__star') {
					event.target.className = 'full__star';
					event.target.src = './img/star_full.png';
				}
			}
	}
}

container.addEventListener('click', toggle);



