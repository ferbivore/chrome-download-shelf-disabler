chrome.downloads.setShelfEnabled(false);
chrome.windows.onCreated.addListener(function() {
	chrome.downloads.setShelfEnabled(false);
});
