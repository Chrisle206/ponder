const downvoteBtn = document.querySelector('.downvote-btn');
downvoteBtn.onclick = async (event) => {
  event.preventDefault();
  const ponderId = downvoteBtn.id;
  // console.log("downvote id= " + ponderId);
  const response = await fetch(`/api/ponder/downvote/${ponderId}`, {
    method: 'PUT',
    // headers: { 'Content-Type': 'application/json' },
    // redirect: 'follow',
  });

  if(window.location.pathname=="/" || window.location.pathname=="/active" ) {
    //This is a catch so that upvoting/downvoting on the recent ponders aside does not redirect you to its specific page.
    window.location.reload();
  } else {
    if (response.ok) {
      window.location.replace(`/specific/${ponderId}`)
    } else {
      alert('Failed to downvote');
    };
  };
}