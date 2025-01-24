document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = "form.html"; // Redirect to the Details Form page
});

document.getElementById('detailsForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birthDate').value;

 
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('birthDate', birthDate);

    // Redirect to Profile Page
    window.location.href = "profile.html";
});

// Profile Page Logic
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('displayName')) {
        // Retrieve and display user details
        document.getElementById('displayName').textContent = localStorage.getItem('name');
        document.getElementById('displayPhone').textContent = localStorage.getItem('phone');
        document.getElementById('displayEmail').textContent = localStorage.getItem('email');
        document.getElementById('displayBirthDate').textContent = localStorage.getItem('birthDate');
    }
});
