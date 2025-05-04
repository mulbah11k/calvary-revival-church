$(document).ready(function () {
    //$("#loading").hide()

  });

function is_email(email) {
  var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailReg.test(email);
}

function is_valid_church_size(church_size) {
  return /^[\d$]/.test(church_size);
}

function is_valid_phone_no(phone_no) {
  var phone_no_reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,8}$/;
  return phone_no_reg.test(phone_no);
}

function is_valid_name(name) {
  var regex = /^[a-zA-Z- ]+$/;
  return regex.test(name);
}

function is_valid_website(website) {
  return /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{2,7}$/.test(website);
}

var apiBaseUrl = 'https://devapi.asoriba.com/api/v1.0/';
// var apiBaseUrl = 'http://api.asoriba-local.com:8000/api/v1.2/';
//on the signin.
$('#send_request').click(function (e) {
    e.preventDefault();
     $('#success_message').text('Sending Request...');

    //disable button after click
    $("#send_request").prop('value', 'Sending Request...');
    $('#send_request').prop('disabled', true);

    var name = $('#name').val();
    var phone_no = $('#phone_no').val();
    var church_size = $('#church_size').val();
    var email = $('#email').val();
    var website = $('#website').val();
    var church_name = $('#church_name').val();
    var church_location = $('#church_location').val();

    inputs_valid = true;

    if (inputs_valid) {
      var mydata = {
        phone_no: phone_no,
        email: email,
        website: website,
        church_size: church_size,
        name: name,
        church_name: church_name,
        church_location: church_location,
      };
      
      // $(alert).hide();
      $(this).text('Sending request ');
      $(this).append("<i id='loading' class='fa fa-spinner fa-spin'>");
      $('#success_message').css("color", "green")
      var self = this;

      var loader = $('#loading');
      
      $.ajax({
          url: apiBaseUrl + 'admin/pricing/quotes/',
          type: 'POST',
          dataType: 'json',
          data: mydata,
          success: function (data) {
              // debugger;
              $('#name').val('');
              $('#phone_no').val('');
              $('#church_size').val('');
              $('#email').val('');
              $('#website').val('');
              $('#church_name').val('');
              $('#church_location').val('');
              $('#success_message').text('Your request was sent successfully. Expect a response soon.');
              $("#send_request").prop('value', 'Send Request Now');
              $('#send_request').prop('disabled', false);
            
            },

          error: function (data) {
              var error_data = JSON.parse(data.responseText);
              console.log(error_data);
              $('#success_message').text('Your request could not be performed at this time. Please' +
              ' ensure all inputs are correct and try again.');
              $('#success_message').css("color", "red")
              $("#send_request").prop('value', 'Send Request Now');
              $('#send_request').prop('disabled', false);
            },
        });
    }
  });
