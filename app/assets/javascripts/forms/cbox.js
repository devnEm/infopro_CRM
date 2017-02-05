$(document).ready(function(){
	$('.ckbox label').on('click', function () {
		var targetId;
		var cbox;

		targetId = $(this).prop('for');
		cbox = $(this).parent().find(targetId);

		console.log(targetId);
		// $(this).parents('tr').toggleClass('selected');
		console.log($(this).parent().html());
		console.log(cbox.checked);
	});
});
