document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Clear error messages
    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
    }

    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate form
    function validateForm() {
        clearErrors();
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Nama tidak boleh kosong';
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email tidak boleh kosong';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Format email tidak valid';
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Pesan tidak boleh kosong';
            isValid = false;
        }

        return isValid;
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Show success message
            successMessage.textContent = 'Pesan Anda berhasil dikirim! Terima kasih.';
            successMessage.classList.add('show');

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }
    });

    // Real-time validation on input
    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Nama tidak boleh kosong';
        } else {
            nameError.textContent = '';
        }
    });

    emailInput.addEventListener('blur', function() {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email tidak boleh kosong';
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Format email tidak valid';
        } else {
            emailError.textContent = '';
        }
    });

    messageInput.addEventListener('blur', function() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Pesan tidak boleh kosong';
        } else {
            messageError.textContent = '';
        }
    });
});