(function() {
	'use strict';

	var btn = document.querySelector('.scroll-up-button');
	if (btn) {
		btn.addEventListener('click', function() {
			document.documentElement.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	}
})();
