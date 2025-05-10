
// JavaScript code for the places page

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

// JavaScript code for the contact page
      
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
      function validateForm2() {
  let x = document.forms["myform"]["Password"].value;
  let email = document.forms["myform"]["Email"].value;

  if (email == "") {
    alert("Email must be filled out");
    return false;
  } 
  if (email.indexOf("@") == -1) {
    alert("Email must contain @");
    return false;
  } 
   if (x> 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  return true;
}