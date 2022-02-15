const downvoteBtnArr = document.querySelectorAll('.downvote-btn');

// declares function
const downvoteBtnClick = (downvoteBtn) => {
  downvoteBtn.onclick = async (event) => {
    event.preventDefault();
    const ponderId = downvoteBtn.id;
    // console.log("downvote button works");
    const response = await fetch(`/api/ponder/downvote/${ponderId}`, {
      method: 'PUT',
      // headers: { 'Content-Type': 'application/json' },
      // redirect: 'follow',
    });

    let relativeUrl = window.location.pathname;
    if(relativeUrl == "/" || relativeUrl == "/active" || relativeUrl.includes("/specific/") ) {
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
}

// adds event listener to each downvotebtn in array
downvoteBtnArr.forEach(button => downvoteBtnClick(button));