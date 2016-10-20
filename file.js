$(document).ready(function() {
		
	/* click add item to add to shopping list */
	$('.data_add').click(function() {
		/*alert("clicked!");*/
		var test = $.trim($('input.data_box').val());
		$('.list_area').append(
		
		  '<li class="new_item">' +
		   	'<div class="item_box"></div>' +
			'<p class="test_item">' + test + '</p>' +
		  '</li>'
		);

		$.trim($('input.data_box').val(''));
		///$('.delete_img').hide();
	});


	/* hit enter in text box to add item*/
	$('.data_box').keydown(function(event){
		if(event.which == 13) {
			event.preventDefault();
			$.trim($('.data_add').click());
		};
	});

	/*cross off list items*/
	$('body').on('click', '.item_box', function(){
		$(this).closest('li').toggleClass('.new_item done_item');
		$(this).child().remove();
	});

	
});