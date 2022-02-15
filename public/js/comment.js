// const { User } = require("../../models");

const commentbtn = document.querySelector('#commentbtn');

if (window.location.pathname=="/" || window.location.pathname=="/active" || window.location.pathname.includes("user")) {
    console.log("You are on the home page")
} else {
const commentSubmit = async function(event) {
    event.preventDefault();
    
    const downvoteBtn = document.querySelector('.downvote-btn')
    const commentEl = document.querySelector('#commentTextarea');
    const ponderId = downvoteBtn.id;
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        body: commentEl.value,
        ponder_id: ponderId
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      window.location.replace(`/specific/${ponderId}`)
    } else {
      alert('Failed to post comment');
    }
  };
  
commentbtn.addEventListener('click', commentSubmit);
}  