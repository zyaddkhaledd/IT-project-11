// JavaScript code for the login page and register

// var errorEl = document.getElementById("error");
// var form1 = document.getElementById("form1");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var name1 = document.getElementById("name1");
// var name2 = document.getElementById("name2");

// form1.addEventListener("submit", function (event) {
//     let error = [];
//     if (name1.value == "" || name1.value == null) {
//     error.push("First name is required");     
//     }
// if (name2.value == "" || name2.value == null) {
//     error.push("Last name is required");     
//     }
// if (error.length > 0) {
// if (email.value == "" || email.value == null) {
//    error.push("Email is required and Please include an '@' in the email address. ");     
// }
// if (password.value == "" || password.value == null) {
//    error.push("password is required");     
// }

//     event.preventDefault();
//     errorEl.innerHTML = error.join("<br>"); 
// }

// });

// JavaScript code for the product page   

   function goPage() {
      var selectedPage = document.getElementById("page").value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    }

// JavaScript code for the shopping page

    function addToCart() {
    alert("Product added to cart!");
  }

// javaScript code for the checkout page

       document.addEventListener("DOMContentLoaded", function () {
          const form1 = document.getElementById("form1");
          const form2 = document.getElementById("form2");

          form1.addEventListener("submit", function (event) {
              event.preventDefault();
              form2.classList.add("show");
          });
      });

      function validateForm() {
  let x = document.forms["myform"]["fname"].value;
  let email = document.forms["myform"]["email"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email.indexOf("@") == -1) {
    alert("Email must contain @");
    return false;
  }
}