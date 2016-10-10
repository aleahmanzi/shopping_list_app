$(document).ready(function() {
		
	/* click add item to add to shopping list */
	$('.data_add').click(function() {
		/*alert("clicked!");*/
		var test = $('input.data_box').val();
		$('.list_area').append(
		
		  '<li class="new_item">' +
		   	'<div class="item_box"></div>' +
			'<p class="test_item">' + test + '</p>' +
		  '</li>'
		);

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

	/*cross off list items*/
	$('body').on('click', '.item_box', function(){
		/*console.log("done");*/
		$(this).closest('li').toggleClass('.new_item done_item');
		$(this).child().remove();
	});

	
});