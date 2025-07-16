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

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

const profileEditModal = document.querySelector(".modal");
const profileCloseBtn = document.querySelector(".modal__close");
const modalTitle = document.querySelector("#name");
const modalDesc = document.querySelector("#description");

const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");

function handleProfileEdit() {
  profileEditModal.classList.add("modal__opened");
  modalTitle.value = profileTitle.textContent;
  modalDesc.value = profileDesc.textContent;
}

function handleProfileClose() {
  profileEditModal.classList.remove("modal__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDesc.textContent = modalDesc.value;
  handleProfileClose();
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.name;
  return cardElement;
}

profileEditBtn.addEventListener("click", handleProfileEdit);
profileCloseBtn.addEventListener("click", handleProfileClose);
profileEditModal.addEventListener("submit", handleProfileFormSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardList.append(cardElement);
});
