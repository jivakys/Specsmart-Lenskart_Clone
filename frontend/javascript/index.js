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
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);
// .............Slide Show End.....................................//

// log in or not check
let myinOut = document.getElementById("inOut");
myinOut.addEventListener("click", () => {
  console.log("button click...");
  checkLoginOrNot();
});

function checkLoginOrNot() {
  if (localStorage.getItem("token").length > 10) {
    console.log("if run...");
    const myDiv = document.getElementById("signout");
    console.log("myDiv =", myDiv);
    myDiv.style.visibility = "visible";
  } else {
    console.log("else run...");
    window.location.href = "signup.html";
    // debugger;
  }
}

function signOut() {
  const myDiv = document.getElementById("signout");
  swal({
    title: "Log Out",
    text: "Log Out Successful!",
    icon: "success",
  });
  // console.log("sign out work");
  localStorage.setItem("token", "");
  localStorage.setItem("firstname", "");
  myDiv.style.visibility = "hidden";
  location.reload();
}

// SignUp Name Change //
let signBtn_Name = document.getElementById("inOut");
let firstname = localStorage.getItem("firstname");
if (localStorage.getItem("token").length > 10) {
  signBtn_Name.innerText = firstname;
} else {
  signBtn_Name.innerText = "Sign In & Sign up";
}

function goToProduct() {
  if (localStorage.getItem("token").length > 10) {
    window.location.href = "product.html";
  } else {
    alert("Please Login First");
    window.location.href = "signup.html";
  }
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

// responsive navbar

const mainMenu = document.querySelector(".signInLinks");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
  mainMenu.style.display = "none";
}
