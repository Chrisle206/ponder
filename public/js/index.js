// Posting doesn't reload the page yet! It passes the body of text and category id
// You'll have to guess what the ponder id is and look it up in insomnia

// TODO: find a way to check relative url instead of hardcoding it
//TODO: Try catch blcok to prevent crash
// if(window.location.href=="http://localhost:3001/") {


        const ponderInput = document.querySelector('.ponder-input');
        const categoryInput = document.querySelector('.category-input');
        const anonymousInput = document.querySelector('#anonymous-check');
        const castBtn = document.querySelector('.cast-btn');
        const goFishingBtn = document.querySelector('.go-fishing-btn');

    castBtn.onclick = async (event) => {
        event.preventDefault();

        let ponderText = ponderInput.value;
        let categoryPick = categoryInput.value;
        let anonymousCheck = anonymousInput.checked;
        // let ponderId = ""
        
        console.log(`Ponder text field value: ${ponderText}`);
        console.log(`Chosen category: ${categoryPick}`);
        console.log(`Checkbox is checked: ${anonymousCheck}`);
        // TODO: assign 1 to UserId if anonymousCheck is true
        // if false assign to req.session.user.id

        const response = await fetch('/api/ponder/', {
            method: 'POST',
            body: JSON.stringify({
              body: ponderText,
              CategoryId: categoryPick,
            }),
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
          })
          const postId = await response.json()
          // await fetch(`/api/ponder/specific/1}`, {
          //     method: 'GET',
          // },
          console.log(postId.id)
          location.replace(`/specific/${postId.id}`)
          // )
          // // .then(res => {
          //   if(res.ok){
          //     location.href="/api/ponder/specific/1"
          //   } else {
          //     alert("This alert means it didn't work")
          //   }
          // });
          // location.replace(`/api/ponder/specific/${data.UserId}`)

        };

    // goFishingBtn.onclick = () => {
    //   await fetch('/api/ponder/random', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    // }


// }