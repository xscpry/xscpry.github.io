// Initialize EmailJS
(function() {
  emailjs.init("ar2LHPVq5DrjfeLT8");
})();

// Form submission handler
function setupContactForm() {
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    
    const templateParams = {
      to_email: "sunshinecasido1@gmail.com",
      from_email: $('#email').val(),
      from_name: $('#name').val(),
      message: $('#message').val()
    };

    // Disable button during send
    const $btn = $('#submit-btn-1');
    $btn.prop('disabled', true)
      .html('Sending... <i class="fas fa-spinner fa-spin"></i>');

    emailjs.send("service_4hv1hnq", "template_48z1w1j", templateParams)
      .then(function() {
        $btn.html('<i class="fas fa-check"></i> Sent!');
        $('#contact-form')[0].reset();
        
        setTimeout(() => {
          $btn.prop('disabled', false)
            .html('Send <i class="fas fa-arrow-right ms-3"></i>');
        }, 3000);
      }, function(error) {
        console.error('Failed:', error);
        $btn.html('<i class="fas fa-exclamation-triangle"></i> Failed');
        
        setTimeout(() => {
          $btn.prop('disabled', false)
            .html('Retry <i class="fas fa-arrow-right ms-3"></i>');
        }, 3000);
      });
  });
}

// Wait for document ready
$(document).ready(setupContactForm);