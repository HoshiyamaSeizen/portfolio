const scrollToSlide = (k) => {
	document.querySelectorAll('.slide')[k].scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'start',
	});
};
