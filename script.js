document.addEventListener('DOMContentLoaded', function () {
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        function toggleBackToTop() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }

        // Run once on load
        toggleBackToTop();

        // Add scroll event listener
        window.addEventListener('scroll', toggleBackToTop);

        // Click handler
        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    }


});

// Countdown Timer Functionality
function updateCountdown() {
    // Set the target date (January 20, 2026)
    const targetDate = new Date('January 20, 2026 00:00:00');

    // Get current date
    const now = new Date();

    // Calculate difference in milliseconds
    const diff = targetDate - now;

    // If event has passed
    if (diff <= 0) {
        document.querySelector('.timer-title').textContent = 'EVENT IN PROGRESS';
        clearInterval(countdownInterval);
        return;
    }

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update display
    updateDisplay('days', days);
    updateDisplay('hours', hours);
    updateDisplay('minutes', minutes);
    updateDisplay('seconds', seconds);

    // Check if countdown ended
    if (diff <= 0) {
        document.querySelector('.timer-title').textContent = 'EARLY BIRD OFFER ENDED';
        clearInterval(countdownInterval);
    }
}

function updateDisplay(id, value) {
    const element = document.getElementById(id);
    if (!element) return;

    // Format with leading zero
    const formattedValue = value.toString().padStart(2, '0');

    // Only animate if value changed
    if (element.textContent !== formattedValue) {
        element.textContent = formattedValue;
        element.classList.add('flipping');
        setTimeout(() => {
            element.classList.remove('flipping');
        }, 500);
    }
}

// Initialize and update every second
let countdownInterval;
document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
});

/*function validateForm() {
    const requiredFields = [
        'companyName',
        'contactPerson',
        'email',
        'phone',
        'boothType',
        'termsAgreement'
    ];

    let isValid = true;

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;

        if (field.type === 'checkbox' && !field.checked) {
            isValid = false;
            field.classList.add('is-invalid');
        } else if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
        }
    });

    // Validate email format
    const email = document.getElementById('email');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        isValid = false;
        email.classList.add('is-invalid');
    }

    if (!isValid) {
        const errorElement = document.createElement('div');
        errorElement.className = 'alert alert-danger mt-3';
        errorElement.textContent = 'Please fill in all required fields correctly.';
        if (!document.querySelector('.alert-danger')) {
            boothApplicationForm.appendChild(errorElement);
        }
    }
    return isValid;
}     */


    