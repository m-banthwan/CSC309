// CREATE ACCOUNT: Reveals success message
document.getElementById('input-submit').addEventListener('click', function(event) { 
  var successText = document.getElementById('profile-changes-hidden'); 
  successText.style.color = 'black';
  successText.style.marginTop = '20px';
}); 