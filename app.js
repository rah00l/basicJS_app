document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  // Additional Event Handlers
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      console.log(`${checkbox.value} checkbox is ${checkbox.checked ? 'checked' : 'unchecked'}`);
    });
  });

  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
      console.log(`${radio.value} radio button is selected`);
    });
  });

  const messageInput = form.querySelector('textarea');
  messageInput.addEventListener('input', function () {
    console.log('Message input has been updated:', messageInput.value);
  });

  const firstNameInput = form.querySelector('#firstName');
  firstNameInput.addEventListener('focus', function () {
    console.log('Focus on the First Name input');
  });

  const lastNameInput = form.querySelector('#lastName');
  lastNameInput.addEventListener('blur', function () {
    console.log('Blur on the Last Name input');
  });

  function validateForm() {
    // Validation logic remains the same
    // ...
  }
});
