'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//removes the hidden class from the modal element so that it is visible
const openModal = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//adds hidden class back to elements so they are 'closed'/not visible
const closeModal = function (){
  //refactored the two lines below into one function
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//logs the buttons text content to the console
//this for-loop can be used to manipulate all three buttons at once.
for (let i = 0; i < btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
 * the event that happens when a key is pressed is passed into the parameters
 * of the function as argument ('event' - or any other name you use). This allows
 * us to see what key has been pressed.
 */
document.addEventListener('keydown', function(event){
  console.log(event.key);
  if(event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});