const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

function ondn(){
  ofdk()

  document.querySelector(".container").style.transform = "translateX(0)";
}


function ondk(){
  ofdn()
  
  document.querySelector(".container1").style.transform = "translateX(0)";
}



function ofdn(){
  document.querySelector(".container").style.transform = "translateX(-100%)";
}


function ofdk(){
  document.querySelector(".container1").style.transform = "translateX(-100%)";
}

function onindex2(){
  document.location = 'index2.html';
}
function onformsp(){
  document.location = 'formsp.html';
}

function onformspnam(){
  document.location = 'formspnam.html';
}
function onformspnu(){
  document.location = 'formspnu.html';
}
function onformspsaleof(){
  document.location = 'formspsaleof.html';
}






