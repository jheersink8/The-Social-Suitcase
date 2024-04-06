// Validate username and password to database 
const loginForm = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const responseData = await response.json();
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(responseData.message);
        }
    }
};


// Add email and password from signup form to database
const signupForm = async (event) => {
    event.preventDefault();
    const first_name = document.querySelector('#firstName').value.trim(); 
    const last_name = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#enterEmail').value.trim();
    const password = document.querySelector('#createPassword').value.trim();

    if (first_name && last_name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const responseData = await response.json();
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(responseData.message);
        }
    }
};


document.querySelector('.login-form').addEventListener('submit', loginForm);
document.querySelector('.signup-form').addEventListener('submit', signupForm);


