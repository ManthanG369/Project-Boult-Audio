let clicked_data = JSON.parse(localStorage.getItem("ClickedProduct"));
console.log('clicked_data:', clicked_data)
console.log("y", clicked_data.name);
console.log("y");

function showProducts(clicked_data) {
    let data_div = document.getElementById("Product_data");

    clicked_data.forEach(function() {
        let div = document.createElement("div");

        let p_name = document.createElement("h3");
        p_name.innerText = clicked_data.name;
        console.log('  p_name.innerText:', p_name.innerText)

        let price_div = document.createElement("span");


        let O_price = document.createElement("p");
        O_price.innerText = "₹" + clicked_data.OriginalPrice;

        let p_price = document.createElement("h3");
        p_price.innerText = "₹" + clicked_data.price;


        let image = document.createElement("img");
        image.src = clicked_data.image;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";

        // div.onclick = function() {
        //     Clicked_Product(product);
        // };
        price_div.append(O_price, p_price)
        div.append(image, p_name, price_div, btn);
        data_div.append(div);

    });
}

//show product
showProducts(clicked_data);