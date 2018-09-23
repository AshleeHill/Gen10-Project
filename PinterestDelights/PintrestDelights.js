$(document).ready(function() {
    $("input[name=Name]").change(function() {
      var input = $(this);
      var label = $("#nameContant");
	    var is_name = input.val();
	    if(is_name){
        label.text("Input is Valid  ");
        label.removeClass("invalid").removeClass("hidden").addClass("valid");
      } else{
        label.text("Input is Invalid");
          label.removeClass("valid").removeClass("hidden").addClass("invalid");
        }
    });

    $("input[name=Email]").change(function() {
      var input = $(this);
      var label = $("#emailContact");
	    var emailText = input.val();
	    if(isEmail(emailText)){
        label.text("Input is Valid  ");
        label.removeClass("invalid").removeClass("hidden").addClass("valid");
      } else{
        label.text("Input is Invalid");
          label.removeClass("valid").removeClass("hidden").addClass("invalid");
        }
    });

    $("input[name=PhoneNumber]").change(function() {
      var input = $(this);
      var label = $("#phoneNumberContact");
	    var phoneNumber = input.val();
	    if(validatePhone(phoneNumber)){
        label.text("Input is Valid  ");
        label.removeClass("invalid").removeClass("hidden").addClass("valid");
      } else{
        label.text("Input is Invalid");
          label.removeClass("valid").removeClass("hidden").addClass("invalid");
        }
    });
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function validatePhone(txtPhone) {
    var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return regex.test(txtPhone);
}
