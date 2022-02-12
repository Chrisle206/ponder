const logout = async function() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('Logout successful!');
    } else {
      alert('Failed to log out');
    }
  };
  
  document.querySelector('#logoutbtn').addEventListener('click', logout);
  