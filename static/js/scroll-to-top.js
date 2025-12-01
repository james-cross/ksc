(function() {
	'use strict';

	var btn = document.querySelector('.scroll-up-button');
	if (!btn) return;

	// Show/hide button based on scroll position
	function toggleButton() {
		if (window.scrollY > 300) {
			btn.classList.add('is-visible');
		} else {
			btn.classList.remove('is-visible');
		}
	}

	window.addEventListener('scroll', toggleButton);
	toggleButton(); // Check initial state

	btn.addEventListener('click', function() {
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
})();
