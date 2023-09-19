const messageTextElement = document.getElementById("main_text");
const submitButton = document.getElementById("submit")

submitButton.onclick = function() {
    getChuckJoke()
}

const url = "https://api.chucknorris.io/jokes/random"
async function getChuckJoke() {
    const response = await fetch(url,
            {
                method: 'GET'
            }
        )
    const data = await response.json();
    console.log(data.value);
    messageTextElement.textContent = data.value;
}

/*  
    Hope you get a kick out of this, Dr. Locklair! 
    - Aidan
*/