function Slideshow(buttonObject) {
  buttonClass = buttonObject.getAttribute("class");
  buttonNumber = buttonClass.charAt(buttonClass.length - 1);
  slidesContainer = document.getElementsByClassName(
    "slide-container-" + buttonNumber
  )[0];
  prevButton = document.getElementsByClassName("btn-prev-" + buttonNumber)[0];
  nextButton = document.getElementsByClassName("btn-next-" + buttonNumber)[0];

  nextButton.addEventListener("click", () => {
    slidesContainer.scrollLeft += 340;
  });
  prevButton.addEventListener("click", () => {
    slidesContainer.scrollLeft -= 340;
  });
}
