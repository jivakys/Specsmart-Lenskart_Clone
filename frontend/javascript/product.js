let url = `http://localhost:9900/products/`;
// let url = `http://localhost:9900/products/sorting?sort=hightolow`;

let postData = document.getElementById("results");
let totalProductList = document.getElementById("totalPro");
function getproduct(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      //    authorization: localStorage.getItem("token"),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      //   console.log(res);
      totalProductList.innerText = res.length;
      postData = document.getElementById("results");
      let arr = res;
      let disp = displayData(arr);
      postData.innerHTML = disp;
    })
    .catch((err) => console.log(err));
}
getproduct(url);

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
      <button class="addToCart" id="addToCart">Add To Cart</button>
      </div>
    </div>
      
      `;
  });
  return ans.join("");
}

// Checkbox...........
function clearPrevious(checkbox) {
  // get all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // loop through all checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    // if checkbox is checked
    if (checkboxes[i].checked) {
      // uncheck previous checkbox
      if (i > 0) {
        checkboxes[i - 1].checked = false;
      }
      // break out of loop
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
