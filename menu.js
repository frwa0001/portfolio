const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener("click", function () {
  links.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  let slides = document.getElementsByClassName("slide");

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
  }

  window.changeSlide = function (n) {
    showSlide(slideIndex + n);
  };

  showSlide(slideIndex);
});
