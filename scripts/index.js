const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-btn");


editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});
editCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened")
});

NewPostBtn.addEventListener("click", function () {
  NewPostModal.classList.add("modal_is-opened");
});
NewPostCloseBtn.addEventListener("click", function () {
  NewPostModal.classList.remove("modal_is-opened");
});
