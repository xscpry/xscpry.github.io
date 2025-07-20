// Initialize EmailJS with proper configuration
document.addEventListener('DOMContentLoaded', function() {
  emailjs.init({
    publicKey: "ar2LHPVq5DrjfeLT8", // Using newer initialization method
    blockHeadless: true // Extra security against bots
  });

  // Form submission handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const templateParams = {
        to_email: "sunshinecasido1@gmail.com",
        from_email: document.getElementById('email').value,
        from_name: document.getElementById('name').value,
        message: document.getElementById('message').value
      };

      // Disable button during send
      const submitBtn = document.getElementById('submit-btn-1');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';

      emailjs.send("service_4hv1hnq", "template_48z1w1j", templateParams)
        .then(function() {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
          contactForm.reset();
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send <i class="fas fa-arrow-right"></i>';
          }, 3000);
        }, function(error) {
          console.error('Failed:', error);
          submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed';
          
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Retry <i class="fas fa-arrow-right"></i>';
          }, 3000);
        });
    });
  }
});