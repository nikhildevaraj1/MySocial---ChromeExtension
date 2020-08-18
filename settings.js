let submit = document.getElementById('submit')
let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

})

submit.onclick = newname


function newname()
{
  swal("Updates Confirmed!", "Your links have been changed", "success");

var facebook = document.getElementById("FacebookInput").value;
chrome.storage.sync.set({facebook: facebook}, function() {
    console.log('Value is set to ' + facebook);
  });
var instagram = document.getElementById("InstaInput").value;
chrome.storage.sync.set({instagram: instagram}, function() {
      console.log('Value is set to ' + instagram);
    });
var tiktok = document.getElementById("TiktokInput").value;
chrome.storage.sync.set({tiktok: tiktok}, function() {
      console.log('Value is set to ' + tiktok);
        });
var twitter = document.getElementById("TwitterInput").value;
chrome.storage.sync.set({twitter: twitter}, function() {
      console.log('Value is set to ' + twitter);
        });
var linkedin = document.getElementById("LinkedinInput").value;
chrome.storage.sync.set({linkedin: linkedin}, function() {
      console.log('Value is set to ' + linkedin);
        });


      }

