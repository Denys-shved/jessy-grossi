document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

	// function to set a given theme/color-scheme
	function setTheme(themeName) {
		localStorage.setItem('theme', themeName);
		document.documentElement.className = themeName;
	}

	// function to toggle between light and dark theme
	function toggleTheme() {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-light');
		} else {
			setTheme('theme-dark');
		}
	}

	// Immediately invoked function to set the theme on initial load
	(function () {
		if (localStorage.getItem('theme') === 'theme-dark') {
			setTheme('theme-dark');
		} else {
			setTheme('theme-light');
		}
	})();

	let change = document.getElementById('change');
	change.addEventListener('click', function (evt) {
		toggleTheme()
	})

	// add music button
	function play() {
		var audio = document.getElementById('song');
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
			audio.currentTime = 0
		}
	}
	let audioWaves = document.querySelector('.podcasts__waves');
	let audioButton = document.getElementById('audio');
	audioButton.addEventListener('click', function (evt) {
		play();
		audioWaves.classList.toggle('active')
	})

	// Crete card 



	let list = document.querySelector('.podcasts__list');

	function addCard() {
		let card = document.createElement('div');
		card.classList.add('card');
		let cardName = document.createElement('div');
		cardName.classList.add('card__name');
		card.appendChild(cardName);

		let cardTitle = document.createElement('div');
		cardTitle.classList.add('card__title');
		cardName.appendChild(cardTitle);
		cardTitle.innerHTML = 'CreateElement example';

		let cardSignature = document.createElement('div');
		cardSignature.classList.add('card__signature');
		cardName.appendChild(cardSignature);

		let cardAutor = document.createElement('div');
		cardAutor.classList.add('card__autor');
		cardSignature.appendChild(cardAutor);
		cardAutor.innerHTML = 'hosted by John Doe';

		let cardDate = document.createElement('div');
		cardDate.classList.add('card__date');
		cardSignature.appendChild(cardDate);
		cardDate.innerHTML = '29 mar 2020';

		let cardDescription = document.createElement('div');
		cardDescription.classList.add('card__descriptions');
		card.appendChild(cardDescription);

		let cardItems = document.createElement('div');
		cardItems.classList.add('card__items');
		cardDescription.appendChild(cardItems);

		let cardItem = document.createElement('p');
		cardItem.classList.add('card__item');
		cardItems.appendChild(cardItem);
		cardItem.innerHTML = 'Il est très difficile de maintenir toute lannée des performances sur Facebook Ads toute, Il est très difficile de maintenir toute lannée des performances sur Facebook Ads toute, Il est très difficile de maintenir toute lannée des performances sur Facebook Ads toute';

		let cardLink = document.createElement('a');
		cardLink.classList.add('card__link');
		card.appendChild(cardLink);
		cardLink.innerHTML = 'open in new tab';

		list.appendChild(card)
	};


	let openBtn = document.querySelector('.opening');
	openBtn.addEventListener('click', function () {
		addCard();
	})
});
