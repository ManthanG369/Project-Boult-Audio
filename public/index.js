// slide show js //
let images = [
    "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/Freedom-Desktop_1944x.png?v=1622647613",
    "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/HomeBanner-FX1_1944x.png?v=1620414395",
    "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/Kriti_1944x.png?v=1602509772"
];


let container = document.getElementById("mySlideshow");

function mySlideshow() {
    let img = document.createElement("img");
    img.src = images[0];
    container.append(img);

    let counter = 1;
    setInterval(function() {

        container.innerHTML = null
        if (counter === images.length) {
            counter = 0
                // setTimeout();
        }
        let img = document.createElement("img");
        img.src = images[counter];
        container.append(img);
        counter++;
    }, 3000);

}
mySlideshow()




//Product localstorge
const product = [{
        name: "AirBass XPods",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/24_1_copy_750x.jpg?v=1632483864",
    },
    {
        name: "AirBass FX1",
        OriginalPrice: "4999.00",
        price: "1499.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/FX1Black1copy_750x.jpg?v=1632289965",
    },
    {
        name: "AirBass ProPods",
        OriginalPrice: "7999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/Black5_bc2c75ae-e14b-48b8-9202-64d8d514893c_750x.jpg?v=1601558066",
    },
    {
        name: "AirBass Combuds",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/Thumbnail_ecae2ec7-e53d-4dab-ac91-18f1ea9d592d_750x.jpg?v=1604387067",
    },
    {
        name: "AirBass Q10",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/1copy_750x.jpg?v=1632294030",
    },


];

// covert to JSON          Important!
const product_json = JSON.stringify(product);

//store above data local stoarge Important!

localStorage.setItem("myproduct", product_json);


// display on webpage    Important!
let myproduct = localStorage.getItem('myproduct');


// convert into operatable format  Important!
myproduct = JSON.parse(myproduct);


function showProducts(product) {
    let data_div = document.getElementById("Product_data");

    myproduct.forEach(function(product) {
        let div = document.createElement("div");

        let p_name = document.createElement("h3");
        p_name.innerText = product.name;

        let price_div = document.createElement("span");


        let O_price = document.createElement("p");
        O_price.innerText = "₹" + product.OriginalPrice;

        let p_price = document.createElement("h3");
        p_price.innerText = "₹" + product.price;


        let image = document.createElement("img");
        image.src = product.image;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";

        div.onclick = function() {
            Clicked_Product(product);
        };
        price_div.append(O_price, p_price)
        div.append(image, p_name, price_div, btn);
        data_div.append(div);

    });
}

//show product
showProducts(product);

//clicked product
if (localStorage.getItem("ClickedProduct") === null) {
    localStorage.setItem("ClickedProduct", JSON.stringify([]));
}

function Clicked_Product(p) {
    let cart_data = JSON.parse(localStorage.getItem("ClickedProduct"));
    cart_data[0] = p;
    localStorage.setItem("ClickedProduct", JSON.stringify(cart_data));
    window.location = "ProductDiscription.html"
}