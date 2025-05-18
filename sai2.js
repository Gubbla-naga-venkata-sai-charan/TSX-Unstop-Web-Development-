document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-signin');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Fetch input values
        const username = form.querySelector('input[name="username"]').value;
        const password = form.querySelector('input[name="password"]').value;
        
        // Perform client-side validation
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return; // Prevent further execution
        }
        
        // Simulate form submission (replace this with actual AJAX call or form submission logic)
        console.log("Username:", username);
        console.log("Password:", password);
        
        // Redirect to the next page after successful login (replace 'next-page.html' with your actual page)
        localStorage.setItem('username', username);
        window.location.href = 'next-page.html';
    });
});
