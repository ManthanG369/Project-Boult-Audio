let cart_data = JSON.parse(localStorage.getItem("Mycart"));


//     console.log("product.name", product.name)
let data_div = document.getElementById("data");
var total = 0;

cart_data.forEach(function(product) {
    let div = document.createElement("div");

    let p_name = document.createElement("h3");
    p_name.innerText = product.name;

    let p_price = document.createElement("p");
    p_price.innerText = "₹" + product.price;

    let image = document.createElement("img");
    image.src = product.image;

    let input = document.createElement("input");

    input.setAttribute("type", "number");
    input.setAttribute("value", "1");
    input.setAttribute("id", "quantiy");
    // image.src = product.image;
    input.type = 1
    let P_total = document.createElement("h4")
        // P_total.setAttribute("id", "all_total");
    P_total = "₹" + product.price;

    div.append(image, p_name, p_price, input, P_total);
    data_div.append(div);






    total = total + Number(product.price);
});

let qunat = document.getElementById("quantiy").value
console.log('qunat:', qunat)

let total_h1 = document.getElementById("total");

total_h1.innerText = `SUBTOTAL - ₹${total}`;

function makePayment() {

    setTimeout(function() {
        alert("Payment Successful");
        clearMycart()
    }, 2000);

}



function clearMycart() {
    //      alert("clearedMycart")
    let cart_data = JSON.parse(localStorage.getItem("Mycart"));
    cart_data = [];
    console.log('cart_data:', cart_data)
    localStorage.setItem("Mycart", JSON.stringify(cart_data));
    document.getElementById("data").innerHTML = ""
    document.getElementById("total").innerText = 0
    updateCart()
}

updateCart()

function updateCart() {
    let cart_data = JSON.parse(localStorage.getItem("Mycart"));
    let cart_len = cart_data.length
    document.getElementById("shopping-cart-count").innerText = cart_len
}


function makePayment() {
    window.location = "payment.html"
}