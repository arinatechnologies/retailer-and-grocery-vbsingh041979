document.addEventListener('DOMContentLoaded', function() {
  // Add click event to all Learn More buttons
  const learnMoreButtons = document.querySelectorAll('.learn-more');
  
  learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
      alert(`Thanks for your interest in our "${serviceTitle}" service! A representative will contact you shortly.`);
    });
  });
});