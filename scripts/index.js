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

const cardAddBtn = document.querySelector(".profile__add-button");

const profileEditModal = document.querySelector("#edit-modal");
const profileCloseBtn = document.querySelector("#close-edit-modal");
const modalTitle = profileEditModal.querySelector("#name");
const modalDesc = profileEditModal.querySelector("#description");

const cardAddModal = document.querySelector("#add-modal");
const addCardCloseBtn = document.querySelector("#close-add-modal");
const cardTitle = cardAddModal.querySelector("#card-name");
const cardDesc = cardAddModal.querySelector("#card-description");

const imagePreviewModal = document.querySelector("#image-modal");
const imagePreviewCloseBtn = document.querySelector("#close-image-modal");
const imageElement = imagePreviewModal.querySelector(".image__preview");
const imageTitle = imagePreviewModal.querySelector(".image__preview-title");

const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");

function handleProfileEdit() {
  openModal(profileEditModal);
  modalTitle.value = profileTitle.textContent;
  modalDesc.value = profileDesc.textContent;
}

function closeModal(modal) {
  modal.classList.remove("modal__opened");
}

function openModal(modal) {
  modal.classList.add("modal__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDesc.textContent = modalDesc.value;
  closeModal(profileEditModal);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitle.value;
  const link = cardDesc.value;
  cardList.prepend(getCardElement({ name, link }));
  document.getElementById("add-modal-form").reset();
  closeModal(cardAddModal);
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.name;

  const likeBtn = cardElement.querySelector(".card__like-button");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-button_active");
  });

  const deleteBtn = cardElement.querySelector(".card__delete-button");
  deleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImg.addEventListener("click", () => {
    imageElement.src = data.link;
    imageElement.alt = data.name;
    imageTitle.textContent = data.name;
    openModal(imagePreviewModal);
  });

  return cardElement;
}

profileEditBtn.addEventListener("click", handleProfileEdit);
profileCloseBtn.addEventListener("click", () => closeModal(profileEditModal));
profileEditModal.addEventListener("submit", handleProfileFormSubmit);
cardAddBtn.addEventListener("click", () => openModal(cardAddModal));
addCardCloseBtn.addEventListener("click", () => closeModal(cardAddModal));
cardAddModal.addEventListener("submit", handleAddCardFormSubmit);
imagePreviewCloseBtn.addEventListener("click", () =>
  closeModal(imagePreviewModal)
);

initialCards.forEach((cardData) => cardList.append(getCardElement(cardData)));
