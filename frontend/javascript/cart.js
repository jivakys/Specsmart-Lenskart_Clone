let url = `https://tiny-erin-adder-cuff.cyclic.app/cart/show`;
let totalProductList = document.getElementById("tlp");
let products = [];
let cardArray = [];

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
      const token = localStorage.getItem("token");
      let tokenData = token.split(".")[1];
      let decodedTokenData = atob(tokenData);
      let userData = JSON.parse(decodedTokenData);
      let cData = res.filter((ele) => {
        return ele.userId === userData.userId;
      });
      cardArray = cData;

      products = cData;
      totalProductList.innerText = cData.length;
      postData = document.getElementById("shadow");
      let arr = cData;
      let disp = displayData(arr);
      postData.innerHTML = disp;
    })
    .catch((err) => console.log(err));
}
getproduct(url);

function changePrice(id, type) {
  cardArray = cardArray.map((item) => {
    if (item._id === id) {
      return {
        ...item,
        ...{
          quantity:
            type === "add"
              ? item.quantity + 1
              : item.quantity == 1
              ? item.quantity
              : item.quantity - 1,
        },
      };
    } else {
      return item;
    }
  });
  products = cardArray;
  totalProductList.innerText = cardArray.length;
  postData = document.getElementById("shadow");
  let arr = cardArray;
  let disp = displayData(arr);
  postData.innerHTML = disp;
}
function displayData(data) {
  let totalPrice = 0;
  cardArray.forEach((ele) => {
    totalPrice += ele.price * ele.quantity;
  });
  var total_amt = document.getElementById("total_cart_amt");
  var product_amt = document.getElementById("product_total_amt");
  product_amt.innerText = totalPrice;
  total_amt.innerText = parseInt(totalPrice) + 50;
  let ans = data.map((ele, i) => {
    return `
                <div class="card p-4 showCart">
                <div class="row">
                  <!-- Cart images div -->
                  <div
                    class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img"
                  >
                    <img
                      src="${ele.imageTsrc}"
                      alt="cart img"
                    />
                  </div>
                  <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div class="row">
                      <div class="col-6 card-title">
                        <h1 class="mb-4 product_name">${ele.name}</h1>
                        <p mb-2>SHAPE - ${ele.shape}</p>
                        <p mb-1>COLOR - ${ele.colors}</p>
                      </div>
                      <div class="col-6">
                        <ul class="pagination justify-content-end set_quantity">
                          <li class="page-item">
                            <button
                              class="page-link"
                              onclick="changePrice('${ele._id}','min')"
                            >
                              <i class="fa-solid fa-minus"></i>
                            </button>
                          </li>
                          <li class="page-item">
                            <input
                              type="text"
                              name=""
                              class="page-link"
                              value=${ele.quantity}
                              id="textbox"
                            />
                          </li>
                          <li class="page-item">
                            <button
                              class="page-link"
                              id="increaseBtn"
                              onclick="changePrice('${ele._id}','add')">
                              <i class="fa-solid fa-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="col-8 d-flex justify-content-between remove_wish">
                        <p><i class="fa-solid fa-trash"></i>REMOVE</p>
                        <p><i class="fa-solid fa-heart"></i>WISHLIST</p>
                      </div>
                      <div class="col-4 d-flex justify-content-end price_money">
                        <h3>₹<span id="itemval">${
                          ele.price * ele.quantity
                        }</span></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      `;
  });
  return ans.join("");
}

const discount_code = () => {
  var product_amt = document.getElementById("product_total_amt");
  var discountcode = document.getElementById("discount_code1").value;
  var total_amt = document.getElementById("total_cart_amt");

  if (product_amt.innerHTML == 0) {
    swal("first select any item", "Choose One", "warning");
  } else {
    if (
      total_amt.innerHTML <
      parseInt(product_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
    ) {
      swal("This code is already used", "Try Other", "success");
    } else {
      if (discountcode == "Jivak") {
        total_amt.innerHTML = parseInt(total_amt.innerHTML) - 550;
        error_trw.innerHTML = "Hurray! code is valid";
      } else {
        error_trw.innerHTML = "Try again! enter a correct code";
      }
    }
  }
};

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", () => {
  var total_amt = document.getElementById("total_cart_amt");
  let res = total_amt.innerHTML;
  localStorage.setItem("total_amt", res);
  window.location.href = "payment.html";
});
