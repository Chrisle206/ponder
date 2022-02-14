const upvoteBtn = document.querySelector('.upvote-btn');
upvoteBtn.onclick = async (event) => {
  event.preventDefault();
  const ponderId = upvoteBtn.id;
  // console.log("upvote button works");
  await fetch(`/api/ponder/upvote/${ponderId}`, {
    method: 'PUT',
    // headers: { 'Content-Type': 'application/json' },
    // redirect: 'follow',
  })
  window.location.reload();
}