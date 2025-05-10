
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

// JavaScript code for the about page
      
function validateForm() {
  let x = document.forms["myform"]["fname"].value;
  let email = document.forms["myform"]["email"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (email.indexOf("@") == -1) {
    alert("Email must contain @");
    return false;
  }
  
   else if (x.length < 3) {
    alert("Name must be at least 3 characters long");
    return false;
  }
  else if (x.length > 30) {
    alert("Name must be less than 20 characters long");
    return false;
  } 

}
// JavaScript code for the login page
      function validateForm2() {
  let x = document.forms["myform"]["Password"].value;
  let email = document.forms["myform"]["Email"].value;

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }  
  else if (x == "") {
    alert("Password must be filled out");
    return false;
  }
  else if (email.indexOf("@") == -1) {
    alert("Email must contain @");
    return false;
  } 
   else if (x.length< 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  else if (x.length > 30) {
    alert("Password must be less than 20 characters long");
    return false;
  } 
 
  
  return true;
}
// JavaScript code for the signup page
      function validateForm3() {
  let FirstName = document.forms["myform"]["FirstName"].value;
  let email = document.forms["myform"]["Email"].value;
  let lastName = document.forms["myform"]["Last Name"].value;
  let Password = document.forms["myform"]["Password"].value;


  if (FirstName== "") {
    alert("First Name must be filled out");
    return false;
  }  
  else if (FirstName.length < 3) {
    alert("First Name must be at least 3 characters long");
    return false;
  }
  
  else if (lastName == "") {
    alert("Last Name must be filled out");
    return false;
  }  
  else if (lastName.length < 3) {
    alert("Last Name must be at least 3 characters long");
    return false;
  }

   else if (email == "") {
    alert("Email must be filled out");
    return false;
  }  
  else if (email.indexOf("@") == -1) {
    alert("Email must contain @");
    return false;
  } 

  else if (Password == "") {
    alert("Password must be filled out");
    return false;
  }

   
  else if (Password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  
  return true;
}