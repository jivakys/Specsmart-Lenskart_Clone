// REGISTER USER //

let url = `http://localhost:9900/users/register`;
let form = document.getElementById("form");
let signUpForm = document.getElementById("signUpForm");
let loginForm = document.getElementById("loginForm");

form.addEventListener("submit", () => {
  onSign();
});

function User(f, l, m, e, p) {
  this.firstname = f;
  this.lastname = l;
  this.mobile = m;
  this.email = e;
  this.password = p;
}
function onSign() {
  event.preventDefault();

  let firstname = document.getElementById("firstName").value;
  let lastname = document.getElementById("lastName").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let newUser = new User(firstname, lastname, mobile, email, password);
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("User Registered Successfully");
      signUpForm.style.display = "none";
      loginForm.style.display = "block";
    })
    .catch((err) => console.log(err));
}
// ........................................................................... //

// LOGIN USER
let login_Submit = document.getElementById("login_Submit");
const onLogin = () => {
  let payload = {
    email: document.getElementById("login_email").value,
    password: document.getElementById("login_password").value,
  };
  fetch(`http://localhost:9900/users/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("token", res.token);
        alert("Login Successfully!...");
        window.location.href = "index.html";
      } else {
        alert("ckeck your email password");
      }
    })
    .catch((err) => {
      console.log(err);
      alert({ error: err.message });
    });
};

let goToSignup = document.getElementById("goToSignup");
goToSignup.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
});

let goToSignin = document.getElementById("goToSignin");
goToSignin.addEventListener("click", () => {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

let backbtn = document.getElementById("back");
backbtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

let logBackbtn = document.getElementById("loginBack");
logBackbtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
