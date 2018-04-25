var stateToggle = document.getElementById('toggleOnOff');

chrome.storage.sync.get('state', function(data) {
  stateToggle.style.backgroundColor = (data.state == 'off') ? '#000' : '#0f0';
  stateToggle.setAttribute('state', data.state);
});

stateToggle.onclick = function(element) {
  var state = element.target.value;
  var newState = (state == 'on') ? 'off' : 'on';
  stateToggle.style.backgroundColor = (newState == 'off') ? '#000' : '#0f0';
  chrome.storage.sync.set({state: newState}, function() {
    console.log("State is " + newState);
  });
};