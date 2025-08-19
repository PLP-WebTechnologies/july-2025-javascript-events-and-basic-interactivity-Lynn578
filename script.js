// ===== DARK MODE TOGGLE =====
// This feature allows users to switch between light and dark themes
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Disable Dark Mode';
    }
    
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Disable Dark Mode';
        } else {
            localStorage.setItem('darkMode', null);
            darkModeToggle.textContent = 'Enable Dark Mode';
        }
    });
    
    // ===== INTERACTIVE COUNTER =====
    // This feature implements a counter with increment, decrement and reset functionality
    const counterDisplay = document.querySelector('.counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let count = 0;
    
    // Update counter display
    function updateCounter() {
        counterDisplay.textContent = `Count: ${count}`;
        
        // Change color based on value
        if (count > 0) {
            counterDisplay.style.color = '#38a169';
        } else if (count < 0) {
            counterDisplay.style.color = '#e53e3e';
        } else {
            counterDisplay.style.color = '';
        }
    }
    
    // Event listeners for counter buttons
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    // ===== FAQ ACCORDION =====
    // This feature creates a collapsible FAQ section
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('span');
            
            // Toggle answer visibility
            answer.classList.toggle('show');
            
            // Change icon
            if (answer.classList.contains('show')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });
    
    // ===== FORM VALIDATION =====
    // This feature validates form inputs before submission
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');
    
    // Validation functions
    function validateName() {
        const nameRegex = /^[a-zA-Z\s]{2,}$/;
        if (!nameRegex.test(nameInput.value.trim())) {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }
    
    function validatePassword() {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }
    
    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageError.style.display = 'block';
            return false;
        } else {
            messageError.style.display = 'none';
            return true;
        }
    }
    
    // Real-time validation as user types
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    messageInput.addEventListener('input', validateMessage);
    
    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isMessageValid = validateMessage();
        
        // If all valid, show success message
        if (isNameValid && isEmailValid && isPasswordValid && isMessageValid) {
            successMessage.style.display = 'block';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                successMessage.style.display = 'none';
            }, 2000);
        }
    });
});
