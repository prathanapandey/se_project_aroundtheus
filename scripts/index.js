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
const profileSaveBtn = document.querySelector(".modal__button");

profileEditBtn.addEventListener("click", function () {
  profileEditModal.classList.add("modal__opened");
  document.querySelector("#name").value = profileTitle.textContent;
  document.querySelector("#description").value = profileDesc.textContent;
});

profileCloseBtn.addEventListener("click", function () {
  profileEditModal.classList.remove("modal__opened");
});

profileSaveBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
});
