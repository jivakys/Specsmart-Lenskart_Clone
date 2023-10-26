let total_amt = localStorage.getItem("total_amt");
let pay_amount = document.getElementById("total");
pay_amount.innerText = total_amt;
var paymentBtn = document.getElementById("paymentBtn");

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

paymentBtn.addEventListener("click", () => {
  let cardNumber = document.getElementById("card_number").value;
  let cvv = document.getElementById("cvv").value;
  if (cardNumber.length !== 16) {
    swal({
      title: "Wrong Credential",
      text: "Plaese check your Card Number",
      icon: "error",
    });
  } else if (cvv.length !== 3) {
    swal({
      title: "Wrong Credential",
      text: "Plaese check your CVV Number",
      icon: "error",
    });
  } else {
    swal({
      title: "Payment Successful",
      text: "Continue your shopping",
      icon: "success",
    });
    window.location.href = "index.html";
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  window.location.href = "cart.html";
});
