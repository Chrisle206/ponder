// Posting doesn't reload the page yet! It passes the body of text and category id
// You'll have to guess what the ponder id is and look it up in insomnia

// TODO: find a way to check relative url instead of hardcoding it
//TODO: Try catch blcok to prevent crash

// const formText = document.querySelector('#floatingTextArea');
prompts = ["Why should you pour cereal before milk?", "Start the conversation.", "You know you want to!", "Get it off your chest.", "...does a fish know it's wet?", "Float along in a stream of thoughts...", "See what the world thinks.", "Just say it!", "Cast your thoughts into the Pond!"]


if(window.location.pathname=="/" || window.location.pathname=="/active" ) {
        const ponderInput = document.querySelector('.ponder-input');
        const categoryInput = document.querySelector('.category-input');
        const anonymousInput = document.querySelector('#anonymous-check');
        const castBtn = document.querySelector('.cast-btn');
        const goFishingBtn = document.querySelector('.go-fishing-btn');
        const AnonymousProfileId = 1;
        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        //Random prompt in form text field on page load. 
        document.querySelector('#floatingTextarea').placeholder = randomPrompt;
        

    castBtn.onclick = async (event) => {
        event.preventDefault();

        let ponderText = ponderInput.value;
        let categoryPick = categoryInput.value;
        let anonymousCheck = anonymousInput.checked;
        
        console.log(`Ponder text field value: ${ponderText}`);
        console.log(`Chosen category: ${categoryPick}`);
        console.log(`Checkbox is checked: ${anonymousCheck}`);

      if (!ponderText) {
        alert('Empty input field');
        return;
      } else {
        if (anonymousCheck) {
          const response = await fetch('/api/ponder/anonymous', {
              method: 'POST',
              body: JSON.stringify({
                body: ponderText,
                CategoryId: categoryPick,
              }),
              headers: { 'Content-Type': 'application/json' },
              redirect: 'follow',
            })
            const postId = await response.json()
            console.log(postId.id)
            location.replace(`/specific/${postId.id}`)
          } else {
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
          console.log(postId.id)
          location.replace(`/specific/${postId.id}`)
        }
      }
    };

//TODO: Logic for gofishing click may need to be reinstated if we are to allow the user to go fishing by category. Currently, the user can only fish randomly because there is an anchor tag around the button which redirects the user directly towards   /  random.
    // goFishingBtn.onclick = () => {
    //   await fetch('/api/ponder/random', {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    // }

    const categoryCheck = document.querySelector("#category-check");
const categorySelect = document.querySelector("#categoryselect")


  if (categoryCheck.checked==true){
    categorySelect.style.display = "block";
    console.log("checked")
  }


}
