function SignIn(e) {
    e.preventDefault();
    console.log("y");
    let myform = document.getElementById("myform")
    let email = myform.email.value;
    let password = myform.password.value;


    console.log("data", email, password);
    let all_users = JSON.parse(localStorage.getItem("Users"));
    console.log('all_users:', all_users)

    flag = false
    let myuser = [];
    all_users.forEach(function(Users) {
        if (email === Users.email) {
            // alert("successful ")
            // flag = true
            myuser = Users
        }
    });
    console.log('myuser:', myuser)

    myuser.forEach(function() {
        if (email === myuser.email && password === myuser.password) {
            alert("successful")
        }
    });

    // if (flag === false) {
    //     alert("Please Enter correct Email And Passw ")
    // }


}
updateCart()

function updateCart() {
    let cart_data = JSON.parse(localStorage.getItem("Cart"));
    let cart_len = cart_data.length
    document.getElementById("shopping-cart-count").innerText = cart_len
}