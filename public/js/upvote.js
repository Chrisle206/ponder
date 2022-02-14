const upvoteBtn = document.querySelector('.upvote-btn');
upvoteBtn.onclick = async (event) => {
  event.preventDefault();
  const ponderId = upvoteBtn.id;
  // console.log("upvote button works");
  const response = await fetch(`/api/ponder/upvote/${ponderId}`, {
    method: 'PUT',
    // headers: { 'Content-Type': 'application/json' },
    // redirect: 'follow',
  });

  if(window.location.pathname=="/" || window.location.pathname=="/active" ) {
    console.log("Updoot successful");
  } else {
    if (response.ok) {
      window.location.replace(`/specific/${ponderId}`)
    } else {
      alert('Failed to post comment');
    };
  };
}