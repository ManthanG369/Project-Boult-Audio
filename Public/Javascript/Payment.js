function makePayment() {

    setTimeout(function() {
        alert("Payment Successful");
        document.getElementById("payment").innerHTML = ""
        window.location = "cart.html"
            // window.location = "ProductDiscription.html"
        clearMycart()
    }, 2000);

}
makePayment()


function clearMycart() {
    //      alert("clearedMycart")
    let cart_data = JSON.parse(localStorage.getItem("Cart"));
    cart_data = [];
    console.log('cart_data:', cart_data)
    localStorage.setItem("Cart", JSON.stringify(cart_data));
    document.getElementById("data").innerHTML = ""



    //     claer the total
    let Total = JSON.parse(localStorage.getItem("Total"));
    console.log('Total:', Total)
    Total = [];
    localStorage.setItem("Total", JSON.stringify(Total));
    //     document.getElementById("total").innerText = 0
    updateCart()

    window.location = "cart.html"
}
updateCart()

function updateCart() {
    let cart_data = JSON.parse(localStorage.getItem("Cart"));
    let cart_len = cart_data.length
    document.getElementById("shopping-cart-count").innerText = cart_len
}