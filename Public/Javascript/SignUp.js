   // updating cart value
   updateCart()

   function updateCart() {
       let cart_data = JSON.parse(localStorage.getItem("Mycart"));
       let cart_len = cart_data.length
       document.getElementById("shopping-cart-count").innerText = cart_len
   }


   // checking for user
   // if (localStorage.getItem("Users") === null) {
   //     localStorage.setItem("Users", JSON.stringify([]));
   // }

   function signup(e) {
       e.preventDefault();
       let myform = document.getElementById("myform");

       let F_name = myform.F_name.value;
       let Mobile = myform.Mobile.value;
       let email = myform.email.value;
       let password = myform.password.value;


       let user = {
           name: F_name,
           email: email,
           password: password,
           Mycart: []
       };

       if (localStorage.getItem("Users") === null) {
           localStorage.setItem("Users", JSON.stringify([]));
       }
       //get array from localstorage
       let arr = JSON.parse(localStorage.getItem("Users")); // existing users

       arr.push(user);

       localStorage.setItem("Users", JSON.stringify(arr));
       SignUpSucces(myform);
   }

   function SignUpSucces(myform) {
       alert("SignUpsuccessful")
       let data = document.getElementsByClassName("SignUp")
       data.remove()
           // window.location = "Product.html";
           // window.location = "index.html";
   }