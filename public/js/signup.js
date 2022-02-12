const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#signupInputUsername1');
    const emailEl = document.querySelector('#signupInputEmail1');
    const passwordEl = document.querySelector('#signupInputPassword1');
  
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        email: emailEl.value,
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
  
const signupbtn = document.querySelector('#signupbtn');
signupbtn.addEventListener('click', signupFormHandler);
  