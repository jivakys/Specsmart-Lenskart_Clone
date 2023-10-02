let url = `http://localhost:9900/products/`;
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
      // console.log("res = ", res);
      products = res;
      totalProductList.innerText = res.length;
      postData = document.getElementById("results");
      let arr = res;
      let disp = displayData(arr);
      postData.innerHTML = disp;
      // passCardData
      var elements = document.getElementsByClassName("addToCart");
      // console.log("elements =", elements);
      var myFunction = function () {
        var attribute = this.getAttribute("id");
        // console.log("attribute =", attribute);
        const carddata = arr.filter((item) => {
          return attribute == item._id;
        });
        // console.log("carddata =", carddata[0]);
        addCardInList(carddata[0]);
      };

      for (var i = 0; i < elements.length; i++) {
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
  // console.log("userData =", userData);

  fetch(`http://localhost:9900/cart/addCard`, {
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
      // console.log(res);
      swal("Product added to Cart!", "successful", "success");
      // alert("Product added to Cart");
    })
    .catch((err) => console.log(err));
};

function getFilterproduct(filterBy, byValue) {
  console.log(filterBy, byValue);
  getproduct(`http://localhost:9900/products/model?${filterBy}=${byValue}`);
}

function getSortProduct(byValue) {
  console.log(byValue);
  getproduct(`http://localhost:9900/products/sorting?sort=${byValue}`);
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
// Sorting By Various Method
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
