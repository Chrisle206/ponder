// Posting doesn't reload the page yet! It passes the body of text and category id
// You'll have to guess what the ponder id is and look it up in insomnia

// TODO: find a way to check relative url instead of hardcoding it
if(window.location.href=="http://localhost:3001/") {
        const ponderInput = document.querySelector('.ponder-input');
        const categoryInput = document.querySelector('.category-input');
        const anonymousInput = document.querySelector('#anonymous-check');
        const castBtn = document.querySelector('.cast-btn');
        const goFishingBtn = document.querySelector('.go-fishing-btn');

    castBtn.onclick = async () => {

        let ponderText = ponderInput.value;
        let categoryPick = categoryInput.value;
        let anonymousCheck = anonymousInput.checked;
        
        console.log(`Ponder text field value: ${ponderText}`);
        console.log(`Chosen category: ${categoryPick}`);
        console.log(`Checkbox is checked: ${anonymousCheck}`);
        // TODO: assign 1 to UserId if anonymousCheck is true
        // if false assign to req.session.user.id

        await fetch('/api/ponder/', {
            method: 'POST',
            body: JSON.stringify({
              body: ponderText,
              UserId: 1,
              CategoryId: categoryPick,
            }),
            headers: { 'Content-Type': 'application/json' },
          })
    }

    goFishingBtn.onclick = () => {
    }
}