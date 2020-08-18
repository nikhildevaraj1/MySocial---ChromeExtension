/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

let updatename = document.getElementById('updatename')
let updatingname = document.getElementById('updatingname')

updatingname.addEventListener('updatename', function(e){
    e.preventDefault();

})

updatename.onclick = createnewname


function createnewname()
{
var username = document.getElementById("updatenewnameform").value;
chrome.storage.sync.set({username: username}, function() {
	console.log('Value is set to ' + username);
	document.getElementById('hellotext').innerHTML = "Hi " + username + "!";

  });

  let submit = document.getElementById('submit')
  let form = document.getElementById('form')
  
  form.addEventListener('submit', function(e){
	  e.preventDefault();
  
  })
  
  submit.onclick = newname
  
  
  function newname()
  {
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

}
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);