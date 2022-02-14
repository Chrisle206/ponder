// const profileBtn = document.querySelector('#profilebtn');

// profileBtn.onclick = async (event) => {
//     event.preventDefault();
//     var element = event.target;
//     const userId =  element.getAttribute("userId");
//     console.log(userId)

//     const response = await fetch(`/user/${userId}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });
//     console.log(response);
//     //   const postId = await response.json()
//     //   console.log(postId.id)
//     //   location.replace(`/specific/${postId.id}`)

// }