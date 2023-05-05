let nameImput = document.querySelector('.popup__input_type_name');
let jobImput = document.querySelector('.popup__input_type_job');
let saveData = document.querySelector('.popup__container');
let showName = document.querySelector('.lead__title');
let showJob = document.querySelector('.lead__subtitle');

let openModalButton = document.querySelector('.lead__edit-button'),
  modal = document.querySelector('.popup'),
  closeModalButton = document.querySelectorAll('.popup__button-close');

function openModal() {
  modal.classList.add('popup__opened');
  nameImput.value = showName.textContent;
  jobImput.value = showJob.textContent;
}

function closeModal() {
  modal.classList.remove('popup__opened');
}

function saveModal(event) {
  event.preventDefault();
  showName.innerHTML = nameImput.value;
  showJob.innerHTML = jobImput.value;
  closeModal();
}

saveData.addEventListener('submit', saveModal);

// document.addEventListener('click', function(event) {
//   let pushLikeButton = event.target.closest('.photo-grid__button');
//   if (pushLikeButton) {
//     pushLikeButton.classList.toggle('photo-grid__button_black');
//   }
// });

openModalButton.addEventListener('click', openModal);

closeModalButton.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});