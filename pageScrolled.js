// Adds pageScrolled class to body if distance to top is under 55px
		var topDistance = 55;
		var inside = false;
		$(window).scroll(function() {
			position = $(window).scrollTop();
			if(position > topDistance && !inside) {
				$('body').addClass('pageScrolled');
				inside = true;
			}
			else if (position < topDistance){
				$('body').removeClass('pageScrolled');
				inside = false;
			}
		});
