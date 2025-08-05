const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfilDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-btn");
const editImageLinkInput = document.querySelector("#profile-imagelink-input");
const editCaptionInput = document.querySelector("#profile-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfilDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});
editCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

NewPostBtn.addEventListener("click", function () {

  NewPostModal.classList.add("modal_is-opened");
});
NewPostCloseBtn.addEventListener("click", function () {
  NewPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfilDescriptionInput.value;
  console.log("submitting");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);