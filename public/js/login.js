const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#exampleInputEmail1');
    const passwordEl = document.querySelector('#exampleInputPassword1');
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);
  