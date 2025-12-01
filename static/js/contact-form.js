(function() {
	'use strict';

	var form = document.getElementById('contact-form');
	if (!form) return;

	var emailInput = document.getElementById('email_address');
	var nameInput = document.getElementById('name');
	var messageInput = document.getElementById('message');
	var submitBtn = form.querySelector('.submit-btn');

	// Validation patterns
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Error messages
	var errors = {
		email: {
			required: 'Please enter your email address',
			invalid: 'Please enter a valid email address'
		},
		name: {
			required: 'Please enter your name'
		},
		message: {
			required: 'Please enter a message'
		}
	};

	function showError(input, message) {
		var errorSpan = document.getElementById(input.id + '-error');
		if (errorSpan) {
			errorSpan.textContent = message;
			input.classList.add('input-error');
		}
	}

	function clearError(input) {
		var errorSpan = document.getElementById(input.id + '-error');
		if (errorSpan) {
			errorSpan.textContent = '';
			input.classList.remove('input-error');
		}
	}

	function validateEmail() {
		var value = emailInput.value.trim();
		if (!value) {
			showError(emailInput, errors.email.required);
			return false;
		}
		if (!emailPattern.test(value)) {
			showError(emailInput, errors.email.invalid);
			return false;
		}
		clearError(emailInput);
		return true;
	}

	function validateName() {
		var value = nameInput.value.trim();
		if (!value) {
			showError(nameInput, errors.name.required);
			return false;
		}
		clearError(nameInput);
		return true;
	}

	function validateMessage() {
		var value = messageInput.value.trim();
		if (!value) {
			showError(messageInput, errors.message.required);
			return false;
		}
		clearError(messageInput);
		return true;
	}

	function setLoading(loading) {
		if (loading) {
			submitBtn.classList.add('is-loading');
			submitBtn.disabled = true;
		} else {
			submitBtn.classList.remove('is-loading');
			submitBtn.disabled = false;
		}
	}

	// Real-time validation on blur
	emailInput.addEventListener('blur', validateEmail);
	nameInput.addEventListener('blur', validateName);
	messageInput.addEventListener('blur', validateMessage);

	// Clear errors on input
	emailInput.addEventListener('input', function() { clearError(emailInput); });
	nameInput.addEventListener('input', function() { clearError(nameInput); });
	messageInput.addEventListener('input', function() { clearError(messageInput); });

	// Form submission
	form.addEventListener('submit', function(e) {
		var isValid = true;

		if (!validateEmail()) isValid = false;
		if (!validateName()) isValid = false;
		if (!validateMessage()) isValid = false;

		if (!isValid) {
			e.preventDefault();
			// Focus first invalid field
			var firstError = form.querySelector('.input-error');
			if (firstError) firstError.focus();
			return;
		}

		// Show loading state
		setLoading(true);
	});
})();
