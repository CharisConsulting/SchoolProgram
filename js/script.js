function runTypingEffect() {
	const text = 'Supporting Education in Kumasi, Ghana';
	const typingElement = document.getElementById('typing-text');
	const typingDelay = 100;

	typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			typingElement.textContent += text.charAt(i);
		}, delay * i);
	}
}

document.addEventListener('DOMContentLoaded', runTypingEffect);

document.addEventListener('DOMContentLoaded', function () {
	// Get the current year
	var currentYear = new Date().getFullYear();

	// Update the year in the HTML
	document.getElementById('year').textContent = currentYear;
});
