(function($){
	
	function parserGo(){
	  var b = $.ajax('https://youla.ru/' + $('#city').val() +'?q=' + $('#find').val());
	  b.done(function (d) {
		analysisSite(d);
	  });
	  b.fail(function (e, g, f) {
		alert('Fail');
	  })
	}
	
	function analysisSite(data){
	  var res = '';
	  $(data).find('a').each(function(){
		res+=$(this).text()+'<P>'+$(this).attr('href')+'';
	  })
	  $('#resultbox').html(res);
	}
	
	$(function(){
	  $('#starter').click(parserGo);
	  $('#resultbox').html('');
	});
	
})(jQuery);