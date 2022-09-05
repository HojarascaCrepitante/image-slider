const element = document.querySelector('.slider');
let rightPosition = "0px";

const moveRight = function () { 
   if (rightPosition !== "2100px"){
      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) + 700 )+"px"
      element.style.right = rightPosition
   }
}
const moveLeft = function () {
   if(rightPosition !== "0px"){
      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) - 700 )+"px"
      console.log(rightPosition)
      element.style.right = rightPosition
   }
}

const nextButton = document.querySelector('.next')
nextButton.addEventListener('click', moveRight)

const previousButton = document.querySelector('.previous')
previousButton.addEventListener('click', moveLeft)