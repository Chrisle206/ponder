const loginbtn = document.querySelector('#loginbtn');

const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#exampleInputEmail1');
    const passwordEl = document.querySelector('#exampleInputPassword1');
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/active');
    } else {
      alert('Failed to login');
    }
  };
  
loginbtn.addEventListener('click', loginFormHandler);
  