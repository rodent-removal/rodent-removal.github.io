// Typing animation
(() => {
  const textElement = document.getElementById("animated-text");
  const cursorElement = document.getElementById("cursor");
  const words = ["Services...", "Rodents", "Cleaning"];
  let wordIndex = 0;
  let charIndex = 0;
  const charDelay = 75;
  const wordDelay = 2500;

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


