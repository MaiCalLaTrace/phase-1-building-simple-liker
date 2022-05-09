// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHeart = document.querySelectorAll('like-glyoh')
emptyHeart.forEach(item => {
  item.addEventListener('click', likeCallBack)
})

function likeCallBack(e) {

  mimicServerCall()
  .then(data => {
    if(data && e.target.innerHTML === EMPTY_HEART){
      e.target.className = 'activated-heart'
      e.target.innerHTML = FULL_HEART
    }else if (data || e.target.innerHTML === FULL_HEART){
      e.target.className = 'like-glyph'
      e.target.innerHTML = EMPTY_HEART
    }
  })

  .catch(function(error){
    const modal = document.querySelector('#modal')
    modal.className = ''
    const p = document.querySelector(['#modal-message'])
    p.innerHTML = error
    setTimeout(function () {
      return modal.className = 'hidden'
    }, 3000)
  })
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
