$(document).ready(function() {
	$('div.colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr, hsb, hex, rgb) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onSubmit: function (hsb, hex, rgb, el) {
			blockColorId = $(el).attr('id');
			fieldId = 'ezcoa-'+blockColorId;
			$('#'+blockColorId+' div').css('backgroundColor', '#' + hex);
			$('#'+fieldId).val('#' + hex);
			$(el).ColorPickerHide();
		}
	})
	
	$('input.sqlicolorpicker').keyup(function(){
		var fieldId = $(this).attr('id');
		if($(this).val().length == 7)
		{
			var blockColorId = fieldId.split('-');
			$('#'+blockColorId[1]+' div').css('backgroundColor', $(this).val());
			$('#'+blockColorId[1]).ColorPickerSetColor($(this).val());
		}
	});
	
	$(document).bind('keyup', function(e) {
		if(e.keyCode == 27)
		{
			$('div.colorpicker:visible').fadeOut(500);
		}
		if(e.keyCode == 13)
		{
			var tab = $('div.colorpicker');
			$(tab).each(function(index){
				if($(this).css('display') == 'block')
				{
					var hexa = $('div.colorpicker:visible div.colorpicker_hex input').val();
					var tab_input = $('input.sqlicolorpicker');
					var tab_blockcolor = $('div.colorSelector div');
					$(tab_input[index]).val('#'+hexa);
					$(tab_blockcolor[index]).css('backgroundColor', '#' + hexa);
					$(this).fadeOut(500);
					return false;
				}
			})
		}
	});
	
	// Initialize color
	var tab = $('input.sqlicolorpicker');
	for(var i=0;i<tab.length;i++)
	{
		var fieldId = $(tab[i]).attr('id');
		var blockColorId = fieldId.split('-');
		$('#'+blockColorId[1]).ColorPickerSetColor($(tab[i]).val());
	}
})


