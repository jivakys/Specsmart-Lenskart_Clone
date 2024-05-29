let url = `https://specsmart-backend.onrender.com/products/`;

// SignUp Name Change //
let signBtn_Name = document.getElementById("inOut");
let firstname = localStorage.getItem("firstname");
if (localStorage.getItem("token") == "") {
  signBtn_Name.innerText = "Sign In & Sign Up";
}
if (localStorage.getItem("token").length > 10) {
  signBtn_Name.innerText = firstname;
} else {
  signBtn_Name.innerText = "Sign In & Sign up";
}

let postData = document.getElementById("results");
let totalProductList = document.getElementById("totalPro");
let products = [];
function getproduct(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      products = res;
      totalProductList.innerText = res.length;
      postData = document.getElementById("results");
      let arr = res;
      let disp = displayData(arr);
      postData.innerHTML = disp;
      var elements = document.getElementsByClassName("addToCart");
      var myFunction = function () {
        var attribute = this.getAttribute("id");
        const carddata = arr.filter((item) => {
          return attribute == item._id;
        });
        addCardInList(carddata[0]);
      };

      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", myFunction, false);
      }
    })
    .catch((err) => console.log(err));
}
getproduct(url);

const addCardInList = (data) => {
  console.log(data);
  const token = localStorage.getItem("token");

  let tokenData = token.split(".")[1];
  let decodedTokenData = atob(tokenData);
  let userData = JSON.parse(decodedTokenData);

  fetch(`https://tiny-erin-adder-cuff.cyclic.app/cart/addCard`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      ...data,
      userId: userData.userId,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      swal("Product added to Cart!", "successful", "success");
    })
    .catch((err) => console.log(err));
};

function getFilterproduct(filterBy, byValue) {
  console.log(filterBy, byValue);
  getproduct(
    `https://tiny-erin-adder-cuff.cyclic.app/products/model?${filterBy}=${byValue}`
  );
}

function getSortProduct(byValue) {
  console.log(byValue);
  getproduct(
    `https://tiny-erin-adder-cuff.cyclic.app/products/sorting?sort=${byValue}`
  );
}

function displayData(data) {
  let ans = data.map((ele, i) => {
    return `
    <div class="card">
      <div>
       <img src="${ele.imageTsrc}" alt="img">
      </div>
      <div class="card-details">
        <div class="rating-det">
            <p><strong style="color: teal">✰</strong> ${ele.rating}</p>
        </div>
        <div class="card-info">
            <h4><b>${ele.name}</b></h4>
            <h4 class="shape" style="font-size:15px; font-weight:900">${ele.shape}</h4>
            <h4>₹ ${ele.price} <span style="color:grey"><s>₹${ele.mPrice}</s> (+Tax)</span></h4>    
        </div>
      </div>
      <div class="pOffer">
      <span class="offer_1">BUY 1 GET 1</span>
      <button class="addToCart" id="${ele._id}">Add To Cart</button>
      </div>
    </div> 
      `;
  });
  return ans.join("");
}

function clearPrevious(checkbox) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      if (i > 0) {
        checkboxes[i - 1].checked = false;
      }
      break;
    }
  }
}

const mySelect = document.getElementById("select");
mySelect.addEventListener("change", function () {
  const selectedOption = this.value;

  if (selectedOption === "asc") {
    getSortProduct("asc");
  } else if (selectedOption === "dsc") {
    getSortProduct("dsc");
  } else if (selectedOption === "lowtohigh") {
    getSortProduct("lowtohigh");
  } else if (selectedOption === "hightolow") {
    getSortProduct("hightolow");
  }
});
