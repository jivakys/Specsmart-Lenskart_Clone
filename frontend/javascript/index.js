// NAV BAR HOVER DROPDOWN EFFECT JS
let boxDropdown = document.querySelectorAll(".boxDropdown");
for (let x = 0; x < document.querySelectorAll("li.categoryName").length; x++) {
  let list = document.querySelectorAll("li.categoryName")[x];
  let boxDropdown_list = document.querySelectorAll(".boxDropdown")[x];
  list.addEventListener("mouseenter", () => {
    boxDropdown_list.style.display = "block";
  });
  list.addEventListener("mouseleave", () => {
    boxDropdown_list.style.display = "none";
  });
}
for (let x = 0; x < boxDropdown.length; x++) {
  const box = boxDropdown[x];
  box.addEventListener("mouseenter", () => {
    box.style.display = "block";
  });
  box.addEventListener("mouseleave", () => {
    box.style.display = "none";
  });
}

// /.............MAIN SLIDE SHOW.......................
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let slideIndex = 0;

function showSlide(n) {
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // set slideIndex within bounds
  slideIndex = (n + slides.length) % slides.length;

  // show current slide
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// show first slide initially
showSlide(slideIndex);

// handle next and prev button clicks
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// set interval for auto slideshow
setInterval(nextSlide, 5000);

// .............Slide Show End.....................................//
