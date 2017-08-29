function save_options() {
  var disableSticker = document.getElementById('disableSticker').checked;
  chrome.storage.sync.set({
    disableSticker: disableSticker
  }, 
  function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 150);
  });
}
function load_options() {
  chrome.storage.sync.get({
    disableSticker: false
  }, function(items) {
    var status = document.getElementById('status');
    document.getElementById('disableSticker').checked = items.disableSticker;
  });
}
document.addEventListener('DOMContentLoaded', load_options);
document.getElementById('save').addEventListener('click', save_options);
