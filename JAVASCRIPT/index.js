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
        setInterval(function () {

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



const detergents = [
        {
                name: "Nirma",
                price: "10",
                image: "Images/1_9f55897e-3e6a-4ae1-a493-9fdcceaad040_1_750x.jpg",
        },

        {
                name: "Surf excel",
                price: "20",
                image: "https://m.media-amazon.com/images/I/61rDJVoKpeL._SL1000_.jpg",
        },
        {
                name: "Tide",
                price: "30",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tide_logo.svg/1200px-Tide_logo.svg.png",
        },
        {
                name: "wheel",
                price: "60",
                image: "https://5.imimg.com/data5/QV/MX/MY-8609988/wheel-powder-500x500.jpg",
        },
        {
                name: "ghadi",
                price: "40",
                image: "https://m.media-amazon.com/images/I/61SZYb3O-wL._SL1399_.jpg",
        },
        {
                name: "ariel",
                price: "50",
                image: "https://5.imimg.com/data5/HE/VA/SO/SELLER-46615966/111-500x500.jpg",
        },
];

// covert to JSON
const detergents_json = JSON.stringify(detergents);

//store above data local stoarge

localStorage.setItem("myDetergents", detergents_json);


// display on webpage
let myDetergents = localStorage.getItem('myDetergents');


// convert into operatable format
myDetergents = JSON.parse(myDetergents);


function showProducts() {
        let data_div = document.getElementById("Product_data");

        myDetergents.forEach(function (product) {
                let div = document.createElement("div");

                let p_name = document.createElement("p");
                p_name.innerText = product.name;

                let p_price = document.createElement("p");
                p_price.innerText = product.price;

                let image = document.createElement("img");
                image.src = product.image;

                let btn = document.createElement("button");
                btn.innerText = "Add to Cart";


                btn.onclick = function () {
                        addtocart(product);
                };

                div.append(image, p_name, p_price, btn);
                data_div.append(div);

        });
}

//show product
showProducts();
if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", JSON.stringify([]));
}

function addtocart(p) {


        let cart_data = JSON.parse(localStorage.getItem("cart"));

        cart_data.push(p);

        localStorage.setItem("cart", JSON.stringify(cart_data));

}