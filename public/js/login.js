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

document.querySelector('.login-form').addEventListener('submit', loginForm);

