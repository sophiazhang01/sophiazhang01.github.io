$(document).ready(function() {
  $("#form").on("submit",function(){
    //this variable is true when the form is validation
    var formValid = true;
    //we are storying the name input whether it is valid or not
    var nameIsValid = $("#userName").prop("validity").valid;
    // if the name is validity
    if(nameIsValid) {
      //hide the error;
      $("#userNameError").addClass("hidden");
    } else {
      //the form is invalid
      formValid = false;
      //show the error;
      $("#userNameError").removeClass("hidden");
    }

    var emailIsValid = $("#userEmail").prop("validity").valid;
    // if the email is validity
    if(emailIsValid) {
      //hidd the error;
      $("#userEmailError").addClass("hidden");
    } else {
      //the form is invalid
      formValid = false;
      //show the error;
      $("#userEmailError").removeClass("hidden");
    }


    //if the form is valid, we allow the user to submit (return true)
//if the form is invalid, we prevent submission (return false)
return formValid;
  });
});
