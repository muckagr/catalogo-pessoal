function Slideshow(buttonObject) {
  buttonClass = buttonObject.getAttribute("id");
  buttonNumber = buttonClass.charAt(buttonClass.length - 1);
  slidesContainer = document.getElementById("slide-container-" + buttonNumber);
  prevButton = document.getElementById("btn-prev-" + buttonNumber);
  nextButton = document.getElementById("btn-next-" + buttonNumber);

  let click = 0;

  if (click == 0) {
    slidesContainer.scrollLeft += 340;
  }

  nextButton.addEventListener("click", () => {
    slidesContainer.scrollLeft += 340;
    click += 1;
  });
  prevButton.addEventListener("click", () => {
    slidesContainer.scrollLeft -= 340;
    click += 1;
  });
}
