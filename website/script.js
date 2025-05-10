document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollmentForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            handleFormSubmission();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name === '' || email === '' || password === '') {
            alert('All fields are required.');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function handleFormSubmission() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const formData = {
            name: name,
            email: email,
            password: password
        };

        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    }
});
