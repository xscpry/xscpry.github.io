// Initialize EmailJS
emailjs.init("ar2LHPVq5DrjfeLT8");

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = document.getElementById('submit-btn-1');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Send email with logo
  emailjs.send("service_4hv1hnq", "template_48z1w1j", {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    logo_url: "https://imgur.com/a/nFxxjgI" // direct link to logo
  })
  .then(function() {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  })
  .catch(function(error) {
    alert('Failed to send: ' + error);
  })
  .finally(function() {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send';
  });
});