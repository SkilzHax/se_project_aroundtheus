const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditBtn = document.querySelector("#edit-cursor-pointer");
const profileAddBtn = document.querySelector("#add-cursor-pointer");

const profileEditModal = document.querySelector("#edit-modal");
const cardAddModal = document.querySelector("#add-card-modal");
const previewImg = document.querySelector("#image__modal");

const profileEditCls = profileEditModal.querySelector("#edit-close");
const cardClose = cardAddModal.querySelector("#card-edit-close");
const imgCls = previewImg.querySelector("#image-edit-close");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const addCardElement = cardAddModal.querySelector(".modal__form");
const imgPopout = previewImg.querySelector(".modal-pop-out");
const imgPopoutDesc = previewImg.querySelector(".modal__description");

const profileNameInput = document.querySelector("#profile-name-input");
const profileJobInput = document.querySelector("#profile-job-input");
const cardTitleInput = addCardElement.querySelector(".modal__name");
const cardImgInput = addCardElement.querySelector(".modal__URL");

const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEL = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData, cardListEL) {
  const cardElement = getCardElement(cardData);
  cardListEL.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardImgInput.value;

  renderCard({ name, link }, cardListEL);
  closePopup(cardAddModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEL = cardElement.querySelector(".card__image");
  const cardTitleEL = cardElement.querySelector(".card__description");
  const likeBtn = cardElement.querySelector(".card__like-button");
  const trashBtn = cardElement.querySelector(".trash__icon");

  trashBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEL.addEventListener("click", () => {
    imgPopout.src = cardImageEL.src;
    imgPopoutDesc.textContent = cardTitleEL.innerText;
    openModal(previewImg);
  });

  imgCls.addEventListener("click", () => closePopup(previewImg));

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_active");
  });

  cardTitleEL.textContent = cardData.name;
  cardImageEL.src = cardData.link;
  cardTitleEL.alt = cardData.name;

  return cardElement;
}

profileEditBtn.addEventListener("click", () => {
  openModal(profileEditModal);
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});

profileAddBtn.addEventListener("click", () => openModal(cardAddModal));

profileEditCls.addEventListener("click", () => closePopup(profileEditModal));
cardClose.addEventListener("click", () => closePopup(cardAddModal));

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup(profileEditModal);
});

addCardElement.addEventListener("submit", handleAddCardFormSubmit);

initialCards.forEach((cardData) => renderCard(cardData, cardListEL));
