let cart_data = JSON.parse(localStorage.getItem("Mycart"));


//     console.log("product.name", product.name)
let data_div = document.getElementById("data");
var total = 0;

cart_data.forEach(function(product) {
    let div = document.createElement("div");

    let p_name = document.createElement("p");
    p_name.innerText = product.name;

    let p_price = document.createElement("p");
    p_price.innerText = product.price;

    let image = document.createElement("img");
    image.src = product.image;


    div.append(image, p_name, p_price);
    data_div.append(div);

    total = total + Number(product.price);
});

let total_h1 = document.getElementById("total");

total_h1.innerText = `Total price - ${total}`;

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