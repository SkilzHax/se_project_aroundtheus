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
const profileEditModal = document.querySelector(".modal");
const profileEditCls = document.querySelector("#edit-close");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const profileNameInput = document.querySelector("#profile-name-input");
const profileJobInput = document.querySelector("#profile-job-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEL = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEL = cardElement.querySelector(".card__image");
  const cardTitleEL = cardElement.querySelector(".card__description");

  cardTitleEL.textContent = cardData.name;
  cardImageEL.src = cardData.link;
  cardImageEL.alt = cardData.name;

  return cardElement;
}

profileEditBtn.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;

  profileEditModal.classList.add("modal_opened");
});

profileEditCls.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileJob.textContent = profileJobInput.value;
  closePopup();
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEL.append(cardElement);
});
