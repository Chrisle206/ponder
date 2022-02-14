const downvoteBtn = document.querySelector('.downvote-btn');
downvoteBtn.onclick = async (event) => {
  event.preventDefault();
  const ponderId = downvoteBtn.id;
  // console.log("downvote id= " + ponderId);
  await fetch(`/api/ponder/downvote/${ponderId}`, {
    method: 'PUT',
    // headers: { 'Content-Type': 'application/json' },
    // redirect: 'follow',
  })
  window.location.reload();
}