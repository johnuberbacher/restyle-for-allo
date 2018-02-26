chrome.storage.sync.get("darkMode", function(sync) {
  if (!(sync.darkMode == true)) {
		document.querySelector('body').classList.remove('darkMode');
	} else {
		document.querySelector('body').classList.add('darkMode');
	}
});
chrome.commands.onCommand.addListener(function(command) { 
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
	console.log('Command:', command);
});