var isInstalled = false;
chrome.runtime.onInstalled.addListener(function (details) {
  isInstalled = true;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  });
}

  // redirect to thankyou page on install 
  if((details.reason == "install")) {
    chrome.tabs.create({
      url: 'https://useoneline.com/thankyou/',
      active: true
    });
}