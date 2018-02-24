function save_options() {
  var darkModeToggle = document.getElementById('darkMode').checked;
  chrome.storage.sync.set({ 'darkMode' : darkModeToggle }, function() {
	if (!(document.getElementById('darkMode').checked)) {
        chrome.tabs.executeScript({
		  file: 'vanilla.js'
		});
    } else {
        chrome.tabs.executeScript({
		  file: 'darkMode.js'
		}); 
    } 
    var status = document.getElementById('save');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = 'Save Settings';
    }, 1250);
  });
}
function load_options() {
	chrome.storage.sync.get('darkMode', function(items) {
		document.getElementById('darkMode').checked = items.darkMode;
		if (!(document.getElementById('darkMode').checked)) {
			chrome.tabs.executeScript({
				file: 'vanilla.js'
			});
		} else {
			chrome.tabs.executeScript({
				file: 'darkMode.js'
			}); 
		}
	});
}
var save = document.getElementById("save");
save.addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', load_options);