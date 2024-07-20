passwordField.attr('type', 'text');
passwordField.attr('type', 'password');

$(this).val('Hide');
$(this).val('Show');

$(document).ready(function(){

  $('#showPassword').on('click', function(){

    var passwordField = $('#password');
    var passwordFieldType = passwordField.attr('type');

    if(passwordFieldType == 'password')
    {
        passwordField.attr('type', 'text');
        $(this).val('Hide');
    } else {
        passwordField.attr('type', 'password');
        $(this).val('Show');
    }
  });
});
