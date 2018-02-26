function load_window() {
 chrome.windows.getCurrent(function(win) {
	var width = 860;
	var height = 630;
	var left = ((screen.width / 2) - (width / 2)) + win.left;
	var top = ((screen.height / 2) - (height / 2)) + win.top;

	chrome.windows.create({
		url: 'https://allo.google.com/web',
		width: width,
		height: height,
		top: Math.round(top),
		left: Math.round(left),
		type: 'popup'
	});
 });
}

function save_options() {
  var darkModeToggle = document.getElementById('darkMode').checked;
  var floatingWindowToggle = document.getElementById('floatingWindow').checked;
  
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
		status.textContent = 'Save Settings ';
    }, 1250);
  });
  chrome.storage.sync.set({ 'floatingWindow' : floatingWindowToggle }, function() {
	if ((document.getElementById('floatingWindow').checked)) {
			load_window();
			window.close();   
	}
    var status = document.getElementById('save');
    status.textContent = 'Options saved.';
    setTimeout(function() {
		status.textContent = 'Save Settings ';
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
	chrome.storage.sync.get('floatingWindow', function(item) {
		document.getElementById('floatingWindow').checked = item.floatingWindow;
		if ((document.getElementById('floatingWindow').checked)) {
			load_window();
		}
	});
}
var save = document.getElementById("save");
save.addEventListener('click', save_options);
document.addEventListener('DOMContentLoaded', load_options);