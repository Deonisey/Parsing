(function($)
{
	var list = [];
	function parserGo()
	{
		
	  var b = $.ajax('https://youla.ru/' + $('#city').val() +'?q=' + $('#find').val());
	  
		b.done
		(
			function (d) 
			{
				analysisSite(d);
			}
		);
			
		b.fail
		(	
			function (e, g, f) 
			{
				alert('Fail');
			}
		)
	}
	
	function analysisSite(data)
	{
	
		var res = '<P>';
		var str = '';
		var med = 0;

		$(data).find('.product_item__description').each
		(
			
			function()
			{
				str = $(this).text();
				str = str.replace(/[^0-9]/gim,'');
				list.push( Number(str) );
				med += Number(str);
			}
		)
		
		med = med/list.length;
		res += list + '<P>' + med
		$('#resultbox').html(res);
	}
	
	$(function()
	{
	  $('#starter').click(parserGo);
	  $('#resultbox').html('');
	});
	
})(jQuery);