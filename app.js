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
      const firstName = form.elements['firstName'].value;
      const lastName = form.elements['lastName'].value;
      const email = form.elements['email'].value;
      const phone = form.elements['phone'].value;

      if (!isValidName(firstName)) {
        alert('Please enter a valid first name');
        return false;
      }

      if (!isValidName(lastName)) {
        alert('Please enter a valid last name');
        return false;
      }

      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      if (!isValidPhone(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
      }

      return true;
    }

    function isValidName(name) {
      return /^[A-Za-z]+$/.test(name);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
      return /^\d{10}$/.test(phone);
    }
  });
