const element = document.querySelector('.slider');
const imgs = document.querySelectorAll('.frame')
const dots = document.querySelectorAll('.dot')
let rightPosition = "0px";
let i = 0;


const moveRight = function () { 
   if(element.classList.contains('active-left')){
      element.classList.remove('active-left')
   }
   element.classList.add('active-right')
   if(imgs[i+1]){
      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) - 700 )+"px"
      console.log(rightPosition)
      element.style.transform = `translateX(${rightPosition})`
      i++
   }
   imgs.forEach(el => el.classList.remove('on'))
   dots.forEach(el => el.classList.remove('clicked'))
   imgs[i].classList.add('on')
   dots[i].classList.add('clicked')
}
const moveLeft = function () {
   if(element.classList.contains('active-right')){
      element.classList.remove('active-right')
   }
   element.classList.add('active-left')
   if(imgs[i-1]){
      rightPosition = (parseInt(rightPosition == null ? 0 : rightPosition) + 700 )+"px"
      console.log(rightPosition)
      element.style.transform = `translateX(${rightPosition})`
      i--
   }
   imgs.forEach(el => el.classList.remove('on'))
   dots.forEach(el => el.classList.remove('clicked'))
   imgs[i].classList.add('on')
   dots[i].classList.add('clicked')
}

const dotNavigation = function () {
   if(document.querySelector('.clicked')){
      if(document.querySelector('.clicked').id < this.id){
         for (let b = document.querySelector('.clicked').id; b < this.id; b++) {
           moveRight()
           
         }
      }
      if(document.querySelector('.clicked').id > this.id){
         for (let b = document.querySelector('.clicked').id; b > this.id; b--) {
           moveLeft()
           
         }
      }
      

   }
   if(!document.querySelector('.clicked')){
      for (let b = 0; b < this.id; b++) {
           moveRight()
           
         }
   
   }

   dots.forEach(el => el.classList.remove('clicked'))
   this.classList.add('clicked')
      
}


const nextButton = document.querySelector('.next')
nextButton.addEventListener('click', moveRight)

const previousButton = document.querySelector('.previous')
previousButton.addEventListener('click', moveLeft)

dots.forEach(el => el.addEventListener('click', dotNavigation))