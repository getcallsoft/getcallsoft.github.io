document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Normally, you would send this data to a server. Example:
    // window.location.href = `https://formspree.io/f/{your_id}?email=${encodeURIComponent(email)}`;
    alert('Thank you for signing up, ' + email);
});
