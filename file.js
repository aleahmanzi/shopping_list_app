$(document).ready(function() {
	//$('.delete_img').hide();
		
	/* click add item to add to shopping list */
	$('.data_add').click(function() {
		/*alert("clicked!");*/
		var test = $('input.data_box').val();
		$('.list_area').append(
		'<div class="item_wrap">' +
		  '<div class="new_item" id="' + test + '">' +
		    '<div class="done_box"></div>' +
			'<div class="item_text">' + test + '</div>' +
			'<div class="delete_wrap">' +
			  '<img class="delete_img" src="../pics/delete_icon.png" alt="delete_icon"/>' +
			'</div>' +
		   '</div>' +
		  '</div><!-- item_wrap -->');

		$('input.data_box').val("");
		///$('.delete_img').hide();
	});

	/* hit enter in text box to add item*/
	$('.data_box').keydown(function(event){
		if(event.which == 13) {
			event.preventDefault();
			$('.data_add').click();			
		};
	});

	/*hover and show delete img -- keep list stationary??
	$('.list_area').on('mouseenter', 'li', function(){
		$(this).children('.delete_img').show();
	});
	$('.list_area').on('mouseleave', 'li', function(){
		$(this).children('.delete_img').hide();
	});*/

	/*cross off list items*/
	$('.new_item').on('click', '.item_box', function(){
		/*console.log("done");*/
		$(this).closest('li').toggleClass('.new_item done_item');
		$(this).remove();
	});
	/* delete item by clicking delete icon -- doesn't work for new li*/
	$('.item_wrap').on('click', '.delete_wrap', function(event){
		/*console.log("delete");*/
		event.preventDefault();
		$(this).parent().remove()
	});
	
});