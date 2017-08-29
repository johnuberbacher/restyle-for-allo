function save_options() {
  var darkMode = document.getElementById('darkMode').checked;
  chrome.storage.sync.set({
    darkMode: darkMode
  }, 
  function() {
    var status = document.getElementById('save');
	if(document.getElementById('darkMode').checked){
		chrome.tabs.executeScript({
			file: 'darkMode.js'
		  }); 
		}else{
	  chrome.tabs.executeScript({
	    file: 'false.js'
	  }); 
	}   
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = 'Save Settings';
    }, 1250);
	setTimeout(function(){
	   window.close(); 
	}, 1250);
  });
}
function load_options() {
  chrome.storage.sync.get({
    darkMode: false
  }, function(items) {
    var status = document.getElementById('status');
    document.getElementById('darkMode').checked = items.darkMode;
	if(document.getElementById('darkMode').checked){
		chrome.tabs.executeScript({
			file: 'darkMode.js'
		  }); 
		}else{
	  chrome.tabs.executeScript({
	    file: 'false.js'
	  }); 
	}
  });
}

window.onload=function(){
     console.log("page load!");
}

document.addEventListener('DOMContentLoaded', load_options);
document.getElementById('save').addEventListener('click', save_options);
