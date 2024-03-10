// accessing plus, minus buttons, and ans
const faqSections = document.querySelectorAll(".faq-section");

faqSections.forEach(function (faqSection) {
	const plusButton = faqSection.querySelector(".plus-button");
	const minusButton = faqSection.querySelector(".minus-button");
	const ans = faqSection.nextElementSibling;

	// Added a click event on plus button
	plusButton.addEventListener("click", function () {
		plusButton.classList.toggle("hidden");
		minusButton.classList.toggle("hidden");
		ans.classList.toggle("hidden");
	});

	// Added a click event on minus button
	minusButton.addEventListener("click", function () {
		plusButton.classList.remove("hidden");
		minusButton.classList.add("hidden");
		ans.classList.add("hidden");
	});
});
