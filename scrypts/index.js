function Slideshow(buttonObject) {
  buttonInstruction = buttonObject.getAttribute("class");
  buttonNumber = buttonObject
    .getAttribute("id")
    .charAt(buttonObject.getAttribute("id").length - 1);
  slidesContainer = document.getElementById("slide-container-" + buttonNumber);

  if (buttonInstruction == "next") {
    slidesContainer.scrollLeft += 340;
  } else {
    slidesContainer.scrollLeft -= 340;
  }
}
