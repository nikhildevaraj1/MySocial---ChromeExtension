chrome.storage.sync.get(['username'], function(result) {
    console.log('Value currently is ' + username);
    document.getElementById('usernamedisplay').innerHTML = "Hi " + username + "!";
  });

