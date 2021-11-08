// slide show js //
// let images = [
//     "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/Freedom-Desktop_1944x.png?v=1622647613",
//     "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/HomeBanner-FX1_1944x.png?v=1620414395",
//     "https://cdn.shopify.com/s/files/1/0378/5968/8492/files/Kriti_1944x.png?v=1602509772"
// ];


// let container = document.getElementById("mySlideshow");

// function mySlideshow() {
//     // let img = document.createElement("img");
//     // img.src = images[0];
//     // container.append(img);

//     let counter = 0;
//     setInterval(function() {

//         container.innerHTML = null
//         if (counter === images.length) {
//             counter = 0
//                 // setTimeout();
//         }
//         let img = document.createElement("img");
//         img.src = images[counter];
//         container.append(img);
//         counter++;
//     }, 2000);

// }
// mySlideshow()



var slide=document.getElementById("slider")
var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var btn3=document.getElementById("btn3")

btn1.addEventListener("click",slider1)
btn2.addEventListener("click",slider2)
btn3.addEventListener("click",slider3)

function slider1(){
        slide.style.transform="translateX(0px)"
        btn1.classList.add("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
    }

function slider2 (){
        slide.style.transform="translateX(-33.33%)"
        btn2.classList.add("active")
        btn1.classList.remove("active")
        btn3.classList.remove("active")
    }

function slider3(){
        slide.style.transform="translateX(-66.66%)"
        btn3.classList.add("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
    }

// interval=


// for initial two sec
setTimeout(slider2,2000)
setTimeout(slider3,4000)


// for infinite side slideshow
setInterval(slideshow,6000)
function slideshow(){
    setTimeout(slider1,)
    setTimeout(slider2,2000)
    setTimeout(slider3,4000)
}


//Product localstorge
const product = [{
        name: "AirBass XPods",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/24_1_copy_750x.jpg?v=1632483864",
        discription: "24h Playtime, IPX5 Water resistant, Touch controls, Built-in Low latency for gaming "
    },
    {
        name: "AirBass FX1",
        OriginalPrice: "4999.00",
        price: "1499.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/FX1Black1copy_750x.jpg?v=1632289965",
        discription: "24h Playtime, IPX5 Water resistant, Touch controls, Built-in Low latency for gaming "
    },
    {
        name: "AirBass ProPods",
        OriginalPrice: "7999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/Black5_bc2c75ae-e14b-48b8-9202-64d8d514893c_750x.jpg?v=1601558066",
        discription: "24h Playtime, IPX5 Water resistant, Touch controls, Built-in Low latency for gaming "
    },
    {
        name: "AirBass Combuds",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/Thumbnail_ecae2ec7-e53d-4dab-ac91-18f1ea9d592d_750x.jpg?v=1604387067",
        discription: "24h Playtime, IPX5 Water resistant, Touch controls, Built-in Low latency for gaming "
    },
    {
        name: "AirBass Q10",
        OriginalPrice: "4999.00",
        price: "1299.00",
        image: "https://cdn.shopify.com/s/files/1/0378/5968/8492/products/1copy_750x.jpg?v=1632294030",
        discription: "24h Playtime, IPX5 Water resistant, Touch controls, Built-in Low latency for gaming "
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


function showProducts() {
    let data_div = document.getElementById("Product_data");

    myproduct.forEach(function(product) {
        let div = document.createElement("div");

        let p_name = document.createElement("h3");
        p_name.innerText = product.name;
        // console.log('p_name.innerText:', p_name.innerText)

        let price_div = document.createElement("span");


        let O_price = document.createElement("p");
        O_price.innerText = "₹" + product.OriginalPrice;

        let p_price = document.createElement("h3");
        p_price.innerText = "₹" + product.price;


        let image = document.createElement("img");
        image.src = product.image;

        // let btn = document.createElement("button");
        // btn.innerText = "Add to Cart";

        div.onclick = function() {
            Clicked_Product(product);
        };
        // btn.onclick = function() {
        //     addtocart(product);
        // };
        price_div.append(O_price, p_price)
        div.append(image, p_name, price_div);
        data_div.append(div);

    });
}

//show product
showProducts();

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

// if (localStorage.getItem("cart") === null) {
//     localStorage.setItem("cart", JSON.stringify([]));
// }

// function addtocart(p) {
//     // alert("yes")
//     let cart_data = JSON.parse(localStorage.getItem("cart"));

//     cart_data.push(p);

//     localStorage.setItem("cart", JSON.stringify(cart_data));
//     let cart_len = cart_data.length
//     console.log('cart_len:', cart_len)
//     updateCart()
// }
updateCart()

function updateCart() {
    let cart_data = JSON.parse(localStorage.getItem("Cart"));
    let cart_len = cart_data.length
    document.getElementById("shopping-cart-count").innerText = cart_len
}