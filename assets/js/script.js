$(function(){
	//Scroll
	// top of page (action)
	$('.scroller').click(function(e) {
		e.preventDefault();
		var targetScroll = $(this).attr('href');
		var documentBody = $('html, body');
	    $(documentBody).stop().animate({scrollTop: $(targetScroll).offset().top}, 1000, 'swing');
	    return false;
	});

	//Sidebar height
	function sidebarHeight(){
		var height = $('#main-content').height();
		$('#sidebar .sidebar-nav').height(height);
	}
	sidebarHeight();

	$('#main-content').resize(function() {
		sidebarHeight();
	});

	//
	// //viewport listener : load script regarding viewport height
	// viewportWidth = $(window).width();
	// if(viewportWidth >= 768){viewPortContext = "desktop";}else{viewPortContext = "mobile";}
	//
	// function conditionalScripts(viewPortContext) {
	//
	// 	newViewportWidth = $(window).width();
	// 	if(newViewportWidth >= 768){newViewPortContext = "desktop";}else{newViewPortContext = "mobile";}
	//
	// 	if(viewPortContext != newViewPortContext){
	//
	// 		if(newViewPortContext == 'desktop'){ 	//scripts for desktop only
	//
	// 			//Add Tooltips
	// 			$('.tips').tooltip();
	// 			$('.lightbox').unbind("click").prettyPhoto();
	//
	// 		}else{ 									//scripts for mobile only
	//
	// 			//Remove Tooltips
	// 			$('.tips').tooltip('destroy');
	// 			// $('.lightbox').unbind("click").photoSwipe();
	//
	// 		}
	// 	}
	//
	// 	viewPortContext = newViewPortContext;
	// }
	// conditionalScripts(); //first execution
	//
	// $(window).resize(function() { //execution on window resizing
	// 	conditionalScripts();
	// });
});
