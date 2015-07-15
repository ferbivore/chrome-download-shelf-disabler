chrome.downloads.setShelfEnabled(false);
chrome.runtime.onStartup.addListener(function() {
	chrome.downloads.setShelfEnabled(false);
});