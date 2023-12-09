// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

console.log(document.getElementById("modal").style.visibility = "hidden")
const heartButtons = document.getElementsByClassName("like-glyph")

for(let i = 0; i < heartButtons.length; i++){
  let heartButton = heartButtons[i]
  heartButton.addEventListener("click", clickHeart)
  function clickHeart(){
    mimicServerCall()
    .then(() => {
      if (heartButton.textContent ==  FULL_HEART) {
        heartButton.textContent = EMPTY_HEART
      } else {
        heartButton.textContent = FULL_HEART
      }
      if (heartButton.textContent == FULL_HEART){
      }
      if(heartButton.textContent == FULL_HEART){
        heartButton.classList.add('activated-heart')
      }
      if(heartButton.textContent == EMPTY_HEART){
        heartButton.classList.remove('activated-heart')
      }
    })
    .catch(() => {
      document.getElementById("modal").style.visibility = "visible"
      document.getElementById("modal-message").textContent = "Random Server Error. Try again."
      setTimeout(() => {
        document.getElementById("modal").style.visibility = "hidden";
      }, "3000");
      
    })
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
