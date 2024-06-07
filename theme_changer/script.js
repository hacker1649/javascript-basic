document.getElementById('toggleSwitch').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    console.log("Switch is ON - Dark Theme");
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    console.log("Switch is OFF - Light Theme");
  }
});

// Set default theme based on switch state
window.onload = function() {
  const isChecked = document.getElementById('toggleSwitch').checked;
  if (isChecked) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
};
