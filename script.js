let openModalButton = document.querySelector('.lead__edit-button'),
  modal = document.querySelector('.popup'),
  closeModalButton = document.querySelectorAll('.popup__close');

openModalButton.addEventListener('click', openModal);

closeModalButton.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});

function openModal() {
  modal.classList.add('popup_opened');
}

function closeModal() {
  modal.classList.remove('popup_opened');
}

let nameImput = document.querySelector('.popup__input-name');
let jobImput = document.querySelector('.popup__input-job');
let saveData = document.querySelector('.popup__button');
let showName = document.querySelector('.lead__title');
let showJob = document.querySelector('.lead__subtitle');

saveData.addEventListener('click', function() {
  showName.innerHTML = nameImput.value;
  showJob.innerHTML = jobImput.value;
  closeModal();
});


document.addEventListener('click', function(event) {
  let pushLikeButton = event.target.closest('.photo-grid__button');
  if (pushLikeButton) {
    pushLikeButton.classList.toggle('photo-grid__button-black');
  }
});
