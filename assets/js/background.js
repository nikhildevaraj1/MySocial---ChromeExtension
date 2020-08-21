var isInstalled = false;


chrome.runtime.onInstalled.addListener(function (details) {
  isInstalled = true;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.storage.sync.set({ username: "" });
    chrome.storage.sync.set({ facebook: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ instagram: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ tiktok: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ twitter: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ linkedin: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ whatsapp: "https://mysocialextension.tech/notlinked.html" });
    chrome.storage.sync.set({ youtube: "https://www.youtube.com/" })
    chrome.storage.sync.set({ reddit: "https://mysocialextension.tech/notlinked.html" })
    chrome.storage.sync.set({ github: "https://mysocialextension.tech/notlinked.html" })
    chrome.storage.sync.set({ mywebsite: "https://mysocialextension.tech/notlinked.html" })
    if ((details.reason == "install")) {
      username = ""
      chrome.tabs.create({
        url: 'http://mysocialextension.tech/setup.html',
        active: true
      });
  
    }
  });
});
