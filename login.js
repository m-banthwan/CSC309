// LOGIN: Add a click event listener to the form
document.getElementById('login-submit').addEventListener('click', function(event) { //shold be submit but changed for P1
  event.preventDefault();
  window.location.href = 'calendar-list.html';  
});