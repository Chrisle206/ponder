const upvoteBtn = document.querySelector('#upvoteBtn');
const loginFormHandler = async function(event) {
    event.preventDefault();
    const response = await fetch('/api/users/login', {
      method: 'PUT',
      body: JSON.stringify({
        upvote: upvote++,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      window.location.reload();
    } else {
      alert('Incorrect username/password.');
    }
  };
loginbtn.addEventListener('click', loginFormHandler);