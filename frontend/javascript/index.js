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
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex = (n + slides.length) % slides.length;
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

setInterval(nextSlide, 3000);
// .............Slide Show End.....................................//

// SignUp Name Change //
let signBtn_Name = document.getElementById("inOut");
if (token == "") {
  signBtn_Name.innerText = "Sign In & Sign Up";
} else {
  // fetch()
}

// Eyeglasses Corousel.........................//

let corousel_slideIndex = 0;
const corousel_slides = document.querySelectorAll(".eye_slideshow img");
const corousel_prevBtn = document.querySelector(".previous");
const corousel_nextBtn = document.querySelector(".nextt");

corouselShowSlides();

function corouselShowSlides() {
  const maxSlides = corousel_slides.length - 2;
  corousel_slideIndex++;

  if (corousel_slideIndex > maxSlides) {
    corousel_slideIndex = 0;
  }

  const scrollPos = corousel_slideIndex * corousel_slides[0].clientWidth;
  document.querySelector(".eye_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
  setTimeout(corouselShowSlides, 2000);
}

corousel_prevBtn.addEventListener("click", () => {
  corousel_slideIndex--;

  if (corousel_slideIndex < 0) {
    corousel_slideIndex = corousel_slides.length - 3;
  }

  const scrollPos = corousel_slideIndex * corousel_slides[0].clientWidth;
  document.querySelector(".eye_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

corousel_nextBtn.addEventListener("click", () => {
  corousel_slideIndex++;

  if (corousel_slideIndex > corousel_slides.length - 3) {
    corousel_slideIndex = 0;
  }

  const scrollPos = corousel_slideIndex * corousel_slides[0].clientWidth;
  document.querySelector(".eye_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

// SUN corousel slideshow ..................//
let suncorousel_slideIndex = 0;
const suncorousel_slides = document.querySelectorAll(".sun_slideshow img");
const suncorousel_prevBtn = document.querySelector(".previous1");
const suncorousel_nextBtn = document.querySelector(".nextt1");

sunCorouselShowSlides();

function sunCorouselShowSlides() {
  const maxSlides = suncorousel_slides.length - 2;
  suncorousel_slideIndex++;

  if (suncorousel_slideIndex > maxSlides) {
    suncorousel_slideIndex = 0;
  }

  const scrollPos = suncorousel_slideIndex * suncorousel_slides[0].clientWidth;
  document.querySelector(".sun_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });

  setTimeout(sunCorouselShowSlides, 2000);
}

suncorousel_prevBtn.addEventListener("click", () => {
  suncorousel_slideIndex--;

  if (suncorousel_slideIndex < 0) {
    suncorousel_slideIndex = suncorousel_slides.length - 3;
  }

  const scrollPos = suncorousel_slideIndex * suncorousel_slides[0].clientWidth;
  document.querySelector(".eye_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

suncorousel_nextBtn.addEventListener("click", () => {
  suncorousel_slideIndex++;

  if (suncorousel_slideIndex > suncorousel_slides.length - 3) {
    suncorousel_slideIndex = 0;
  }

  const scrollPos = suncorousel_slideIndex * suncorousel_slides[0].clientWidth;
  document.querySelector(".eye_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

//  ..............  Power blu lenses ..................... //

let lenses_slideIndex = 0;
const lenses_slides = document.querySelectorAll(".blu_slideshow img");
const lenses_prevBtn = document.querySelector(".previous2");
const lenses_nextBtn = document.querySelector(".nextt2");

powerLensShowSlides();

function powerLensShowSlides() {
  const maxSlides = lenses_slides.length - 2;
  lenses_slideIndex++;

  if (lenses_slideIndex > maxSlides) {
    lenses_slideIndex = 0;
  }

  const scrollPos = lenses_slideIndex * lenses_slides[0].clientWidth;
  document.querySelector(".blu_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
  setTimeout(powerLensShowSlides, 2000);
}

lenses_prevBtn.addEventListener("click", () => {
  lenses_slideIndex--;

  if (lenses_slideIndex < 0) {
    lenses_slideIndex = lenses_slides.length - 3;
  }

  const scrollPos = lenses_slideIndex * lenses_slides[0].clientWidth;
  document.querySelector(".blu_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

lenses_nextBtn.addEventListener("click", () => {
  lenses_slideIndex++;

  if (lenses_slideIndex > lenses_slides.length - 3) {
    lenses_slideIndex = 0;
  }

  const scrollPos = lenses_slideIndex * lenses_slides[0].clientWidth;
  document.querySelector(".blu_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

//  ..............  Zero Power blu lenses ..................... //

let zeroPower_slideIndex = 0;
const zeroPower_slides = document.querySelectorAll(".zero_slideshow img");
const zeroPower_prevBtn = document.querySelector(".previous3");
const zeroPower_nextBtn = document.querySelector(".nextt3");

zeroPowerShowSlides();

function zeroPowerShowSlides() {
  const maxSlides = zeroPower_slides.length - 2;
  zeroPower_slideIndex++;

  if (zeroPower_slideIndex > maxSlides) {
    zeroPower_slideIndex = 0;
  }

  const scrollPos = zeroPower_slideIndex * zeroPower_slides[0].clientWidth;
  document.querySelector(".zero_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
  setTimeout(zeroPowerShowSlides, 2000);
}

zeroPower_prevBtn.addEventListener("click", () => {
  zeroPower_slideIndex--;

  if (zeroPower_slideIndex < 0) {
    zeroPower_slideIndex = zeroPower_slides.length - 3;
  }

  const scrollPos = zeroPower_slideIndex * zeroPower_slides[0].clientWidth;
  document.querySelector(".zero_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});

zeroPower_nextBtn.addEventListener("click", () => {
  zeroPower_slideIndex++;

  if (zeroPower_slideIndex > zeroPower_slides.length - 3) {
    zeroPower_slideIndex = 0;
  }

  const scrollPos = zeroPower_slideIndex * zeroPower_slides[0].clientWidth;
  document.querySelector(".zero_slideshow").scrollTo({
    left: scrollPos,
    behavior: "smooth",
  });
});
