document.addEventListener("DOMContentLoaded", function () {
  const contactsButton = document.getElementById("add-contacts-btn");
  const contactPopup = document.getElementById("new-contact-popup");
  const contactCloseButton = document.getElementById("contact-close-button");

  contactsButton.addEventListener("click", function () {
    contactPopup.style.display = "flex";
  });

  contactCloseButton.addEventListener("click", function () {
    contactPopup.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const groupsButton = document.getElementById("add-groups-btn");
  const groupsPopup = document.getElementById("new-group-popup");
  const groupsCloseButton = document.getElementById("groups-close-button");

  groupsButton.addEventListener("click", function () {
    groupsPopup.style.display = "flex";
  });

  groupsCloseButton.addEventListener("click", function () {
    groupsPopup.style.display = "none";
  });
});

// for smaller screens
document.addEventListener('DOMContentLoaded', function () {
  adjustContent(); 
  window.addEventListener('resize', adjustContent); 
});

function adjustContent() {
  var contacts = document.getElementById('contacts-list'); 
  var newContent = `
    <table>
      <tr><td><img src="assets/profile1.png" class="img-profile"></img>
      <label spellcheck="false" contenteditable="true" class="editable-text">David Gorospe</label></td></tr>
      <tr><td><label contenteditable="true" class="editable-text">david.gorospe@mail.utoronto.ca</label></td></tr>

      <tr><td><img src="assets/profile2.png" class="img-profile"></img>
      <label spellcheck="false" contenteditable="true" class="editable-text">Emily Du</label></td></tr>
      <tr><td><label contenteditable="true" class="editable-text">emily.du@mail.utoronto.ca</label></td></tr>

      <tr><td><img src="assets/profile3.png" class="img-profile"></img>
      <label spellcheck="false" contenteditable="true" class="editable-text">Happy Nasit</label></td></tr>
      <tr><td><label contenteditable="true" class="editable-text">happy.nasit@mail.utoronto.ca</label></td></tr>

      <tr><td><img src="assets/profile4.png" class="img-profile"></img>
      <label spellcheck="false" contenteditable="true" class="editable-text">Mugdha Banthwan</label></td></tr>
      <tr><td><label contenteditable="true" class="editable-text">mugdha.banthwan@mail.utoronto.ca</label></td></tr>
    </table>
  `;

  if(window.innerWidth < 500) {
    contacts.innerHTML = newContent; 
  }
}