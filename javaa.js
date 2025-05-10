
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