let nameImput = document.querySelector('.popup__input_type_name');
let jobImput = document.querySelector('.popup__input_type_job');
let saveData = document.querySelector('.popup__container_profile');
let showName = document.querySelector('.lead__title');
let showJob = document.querySelector('.lead__subtitle');
const blockPlace = document.querySelector('.photo-grid');
const savePlaces = document.querySelector('.popup__container_places');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

let openModalButton = document.querySelector('.lead__edit-button'),
  popupProfile = document.querySelector('.popup_profile'),
  popupPlaces = document.querySelector('.popup_places'),
  openModalPlaces = document.querySelector('.lead__caption'),
  closeModalButton = document.querySelectorAll('.popup__button-close'),
  closePopup = document.querySelectorAll('.popup__button'),
  popupImage = document.querySelector('.picture-popup');

function openModal(modal, profile=true) {
  modal.classList.add('popup_opened');
  if (profile) {
    nameImput.value = showName.textContent;
    jobImput.value = showJob.textContent;
  }
}



function closeModal(...modals) {
  modals.forEach(modal => modal.classList.remove('popup_opened'));
}

function saveModal(event) {
  event.preventDefault();
  showName.textContent = nameImput.value;
  showJob.textContent = jobImput.value;
  // closeModal();
}

saveData.addEventListener('submit', saveModal);

savePlaces.addEventListener('submit', savePlace);

function savePlace(event) {
  event.preventDefault();
  const place = {
    name: event.target[0].value,
    link: event.target[1].value,
  }
  creatNewPlace(place, blockPlace);
  // closeModal();
}

document.addEventListener('click', function(event) {
  let pushLikeButton = event.target.closest('.photo-grid__button');
  if (pushLikeButton) {
    pushLikeButton.classList.toggle('photo-grid__button_black');
  }
  let deletePictureButton = event.target.closest('.photo-grid__trash-button');
  if (deletePictureButton) {
    let parent = deletePictureButton.closest('.photo-grid__element');
    parent.remove();
  }
  let openImage = event.target.closest('.photo-grid__item');
  if (openImage) {
    let imageSrc = openImage.src;
    let popupPicture = popupImage.querySelector('.picture-popup__image');
    popupPicture.src = imageSrc;
    openModal(popupImage, false);
  }
});

openModalButton.addEventListener('click', ()=>openModal(popupProfile));
openModalPlaces.addEventListener('click', ()=>openModal(popupPlaces, false));

closeModalButton.forEach(closeBtn => {
  closeBtn.addEventListener('click', ()=>closeModal(popupProfile, popupPlaces, popupImage));
});

closePopup.forEach(closeBtn => {
  closeBtn.addEventListener('click', ()=>closeModal(popupProfile, popupPlaces, popupImage));
});


function creatNewPlace(obj, container) {
  const node = `<div class="photo-grid__element">
  <img class="photo-grid__item" src="${obj.link}" alt="${obj.name}">
  <button type="button" class="photo-grid__trash-button"></button>
<div class="photo-grid__footer">
  <h2 class="photo-grid__title">${obj.name}</h2>
  <button type="button" class="photo-grid__button"></button>
</div>
</div>`;
  return container.insertAdjacentHTML('afterbegin', node);
}

for(let item of initialCards) {
  creatNewPlace(item, blockPlace);
  // console.log(item);
}