// Typing animation
(() => {
  const textElement = document.getElementById("animated-text");
  const cursorElement = document.getElementById("cursor");
  const words = [
    "Services...",
    "Hunting",
    "Trapping",
    "Baiting",
    "Repealing",
    "Carpentry",
    "Disease Control"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  const charDelay = 75;
  const wordDelay = 1500;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    textElement.textContent = currentText;

    cursorElement.style.visibility = "visible"; // Show cursor while typing

    if (charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, charDelay);
    } else {
      setTimeout(() => {
        cursorElement.style.visibility = "hidden"; // Hide cursor after typing
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        type();
      }, wordDelay);
    }
  }

  type();
})();

// Swiper
const swiper = new Swiper("#servicesCarousel", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

