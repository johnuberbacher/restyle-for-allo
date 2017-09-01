chrome.storage.sync.get("darkMode", function(sync) {
  if (!(sync.darkMode == true)) {
		document.querySelector('body').classList.remove('darkMode');
	} else {
		document.querySelector('body').classList.add('darkMode');
	}
});