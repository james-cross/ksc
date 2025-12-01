(function() {
	'use strict';

	var navToggle = document.querySelector('.nav-toggle');
	var navMenu = document.querySelector('.nav-menu');

	if (!navToggle || !navMenu) {
		return;
	}

	navToggle.addEventListener('click', function() {
		var isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', !isExpanded);
		navMenu.classList.toggle('is-open');
	});

	// Close menu when clicking outside
	document.addEventListener('click', function(event) {
		if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
			navToggle.setAttribute('aria-expanded', 'false');
			navMenu.classList.remove('is-open');
		}
	});

	// Close menu on escape key
	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
			navToggle.setAttribute('aria-expanded', 'false');
			navMenu.classList.remove('is-open');
			navToggle.focus();
		}
	});
})();
