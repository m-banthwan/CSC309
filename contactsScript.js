document.addEventListener("DOMContentLoaded", function () {
  const contactsButton = document.getElementById("add-contacts-btn");
  const contactPopup = document.getElementById("new-contact-popup");
  const contactCloseButton = document.getElementById("contactCloseButton");

  contactsButton.addEventListener("click", function () {
    contactPopup.style.display = "flex";
  });

  contactCloseButton.addEventListener("click", function () {
    contactPopup.style.display = "none";
  });
});