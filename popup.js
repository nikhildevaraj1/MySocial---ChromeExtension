chrome.storage.sync.get(['facebook'], function(result) {
    console.log('Value currently is ' + result.facebook);
    document.getElementById('facebooklinkicon').href = result.facebook;
  });


  chrome.storage.sync.get(['instagram'], function(result) {
    console.log('Value currently is ' + result.instagram);
    document.getElementById('instagramlinkicon').href = result.instagram;
  });

  chrome.storage.sync.get(['tiktok'], function(result) {
    console.log('Value currently is ' + result.tiktok);
    document.getElementById('tiktoklinkicon').href = result.tiktok;
  });

  chrome.storage.sync.get(['twitter'], function(result) {
    console.log('Value currently is ' + result.twitter);
    document.getElementById('twitterlinkicon').href = result.twitter;
  });

  chrome.storage.sync.get(['linkedin'], function(result) {
    console.log('Value currently is ' + result.linkedin);
    document.getElementById('linkedinlinkicon').href = result.linkedin;
  });

  chrome.storage.sync.get(['username'], function(result) {
    console.log('Value currently is ' + result.username);
    document.getElementById('hellotext').innerHTML = "Hi " + result.username + "!";
  });





