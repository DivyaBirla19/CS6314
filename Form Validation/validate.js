window.onload = function() {

  //there will be one span element for each input field
  // when the page is loaded, we create them and append them to corresponding input element
  // they are initially hidden

  var span1 = document.createElement("span");
  span1.style.display = "none"; //hide the span element

  var username = document.getElementById("username");
  username.parentNode.appendChild(span1);


  username.onfocus = function() {

    span1.innerHTML = "Username should be alphanumeric";
    span1.className = "info";
    span1.style.display = "inline";

  }

  username.onblur = function() {
    if (username.value == "") {
      span1.style.display = "none";
    } else {
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      if (usernameRegex.test(username.value)) {
        span1.innerHTML = "OK";
        span1.style.display = "inline";
        span1.className = "ok";



      } else {
        span1.innerHTML = "Error";
        span1.style.display = "inline";
        span1.className = "error";

      }


    }


  }

  var span2 = document.createElement("span");
  span2.style.display = "none";

  var password = document.getElementById("password");
  password.parentNode.appendChild(span2);

  password.onfocus = function() {
    span2.innerHTML = "Password should include at least six characters";
    span2.className = "info";
    span2.style.display = "inline";
  }

  password.onblur = function() {
    if (password.value == "") {
      span2.style.display = "none";
    } else {
      if (password.value.length < 6) {
        span2.innerHTML = "Error";
        span2.style.display = "inline";
        span2.className = "error";
      } else {
        span2.innerHTML = "OK";
        span2.style.display = "inline";
        span2.className = "ok";
      }
    }
  }


  var span3 = document.createElement("span");
  span3.style.display = "none";

  var email = document.getElementById("email");
  email.parentNode.appendChild(span3);

  email.onfocus = function() {
    span3.innerHTML = "Enter a valid email address";
    span3.className = "info";
    span3.style.display = "inline";
  }

  email.onblur = function() {
    if (password.value == "") {
      span3.style.display = "none";
    } else {
      var emailRegex = /\S+@\S+\.\S+$/;
      if (emailRegex.test(email.value)) {
        span3.innerHTML = "OK";
        span3.style.display = "inline";
        span3.className = "ok";
      } else {
        span3.innerHTML = "Error";
        span3.style.display = "inline";
        span3.className = "error";
      }
    }
  }


}
