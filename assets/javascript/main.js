jQuery.noConflict();
 
jQuery( document ).ready(function( $ ) {
    
	

	$('.menu_content').click(function(){
		$('.hamburger_lines,.menu_items,.menu_content_lines,.menu_content,.logo_menu').toggleClass('active')
		$('header,body').toggleClass('open')
	});

});