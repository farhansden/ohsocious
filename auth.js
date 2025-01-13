document.addEventListener('DOMContentLoaded', () => {
    const switchBtns = document.querySelectorAll('.switch-btn');
    const forms = document.querySelectorAll('.auth-form');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and forms
            switchBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked button and corresponding form
            btn.classList.add('active');
            const formType = btn.dataset.form;
            document.getElementById(`${formType}Form`).classList.add('active');
        });
    });

    // Form submission handling
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Add your API call here
        console.log('Form submitted:', data);
    };

    document.getElementById('loginForm').addEventListener('submit', handleSubmit);
    document.getElementById('signupForm').addEventListener('submit', handleSubmit);
}); 