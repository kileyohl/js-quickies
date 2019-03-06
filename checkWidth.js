	// FUNCTION START:  Body classname of bs-(viewport) to body to assist in responsiveness.
		function checkWidth() {
			var windowsize = $(window).width();
		
			if (windowsize > 1200) {
				$('body').removeClass('bs-xs bs-sm bs-md bs-lg bs-xl').addClass('bs-xl');
			}
			else if (windowsize > 992 && windowsize < 1199) {
				$('body').removeClass('bs-xs bs-sm bs-md bs-lg bs-xl').addClass('bs-lg');
			}
			else if (windowsize > 768 && windowsize < 991) {
				$('body').removeClass('bs-xs bs-sm bs-md bs-lg bs-xl').addClass('bs-md');
			}
			else if (windowsize > 576 && windowsize < 767) {
				$('body').removeClass('bs-xs bs-sm bs-md bs-lg bs-xl').addClass('bs-sm');
			}
			else {
				$('body').removeClass('bs-xs bs-sm bs-md bs-lg bs-xl').addClass('bs-xs');
			}
		}
		// --> (Run checkWidth function on page load)
			checkWidth();
		// --> (Rerun checkWidth function on window resize)
			$(window).resize(checkWidth);
	// END //
