const upvoteBtnArr = document.querySelectorAll('.upvote-btn');

// declares function
const upvoteBtnClick = (upvoteBtn) => {
  upvoteBtn.onclick = async (event) => {
    event.preventDefault();
    const ponderId = upvoteBtn.id;
    // console.log("upvote button works");
    const response = await fetch(`/api/ponder/upvote/${ponderId}`, {
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
        alert('Failed to upvote');
      };
    };
  }
}

// adds event listener to each upvotebtn in array
upvoteBtnArr.forEach(button => upvoteBtnClick(button));