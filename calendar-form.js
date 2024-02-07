function calendartype() {

    var dropdown = document.getElementById('meetingtype');
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    var input = document.getElementById('date');
    
    if (selectedOption == "enabled") {
      input.removeAttribute('disabled');
    } else {
      input.setAttribute('disabled', 'disabled');
    }
  }