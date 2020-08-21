let submit = document.getElementById('submit')
let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

})

submit.onclick = newname

function newname()
{
  swal("Updates Confirmed!", "Your links have been changed", "success");
	facebookvalue = document.getElementById("FacebookInput").value;
	if(facebookvalue !== ""){
  var facebook = document.getElementById("FacebookInput").value;
  chrome.storage.sync.set({facebook: facebook}, function() {
	  console.log('Value is set to ' + facebook);
	});
  }
  instagramvalue = document.getElementById("InstaInput").value;
	if(instagramvalue !== ""){
  var instagram = document.getElementById("InstaInput").value;
  chrome.storage.sync.set({instagram: instagram}, function() {
		console.log('Value is set to ' + instagram);
    });
  }
  tiktokvalue = document.getElementById("TiktokInput").value;
	if(tiktokvalue !== ""){
  var tiktok = document.getElementById("TiktokInput").value;
  chrome.storage.sync.set({tiktok: tiktok}, function() {
		console.log('Value is set to ' + tiktok);
      });
  }
  
  twittervalue = document.getElementById("TwitterInput").value;
	if(twittervalue !== ""){
  var twitter = document.getElementById("TwitterInput").value;
  chrome.storage.sync.set({twitter: twitter}, function() {
		console.log('Value is set to ' + twitter);
      });
  }
  linkedinvalue = document.getElementById("LinkedInInput").value;
	if(linkedinvalue !== ""){
  var linkedin = document.getElementById("LinkedinInput").value;
  chrome.storage.sync.set({linkedin: linkedin}, function() {
		console.log('Value is set to ' + linkedin);
      });
    }
  whatsappvalue = document.getElementById("WhatsappInput").value;
  if(whatsapp !== ""){
	var whatsapp = document.getElementById("WhatsappInput").value;
	chrome.storage.sync.set({whatsapp: whatsapp}, function() {
		console.log('Value is set to ' + whatsapp);
          });
        }
  redditvalue = document.getElementById("RedditInput").value;
  if(redditvalue !== ""){
	var reddit = document.getElementById("RedditInput").value;
	chrome.storage.sync.set({reddit: reddit}, function() {
	console.log('Value is set to ' + reddit);
              });
            }
  githubvalue = document.getElementById("GithubInput").value;
  if(githubvalue !== ""){
  var github = document.getElementById("GithubInput").value;
  chrome.storage.sync.set({github: github}, function() {
  console.log('Value is set to ' + github);
              });
            }
    mywebsitevalue = document.getElementById("MyWebsiteInput").value;
    if(mywebsitevalue !== ""){
		var mywebsite = document.getElementById("MyWebsiteInput").value;
		chrome.storage.sync.set({mywebsite: mywebsite}, function() {
		console.log('Value is set to ' + mywebsite);
              });
            }


      }

