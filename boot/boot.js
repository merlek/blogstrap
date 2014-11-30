(function() {

	$("#theme").click(function(){
		var action = $("#theme").data('action');
		
		if (action === 'add'){
			$('head').append('<link rel="stylesheet" href="./bootstrap/dist/css/bootstrap-theme.css" media="screen">');
			$('#theme').text('remove theme');
			$('#theme').data('action', 'remove');
		} else if (action === 'remove'){
			$('link[href="./bootstrap/dist/css/bootstrap-theme.css"]').remove();
			$('#theme').text('add theme');
			$('#theme').data('action', 'add');
		}
	});
	
	//$("#theme").click();
	
	$("#examples a").click(function(e){
		e.preventDefault();

		var div = $('<div/>', { 'class' : 'embed-responsive embed-responsive-16by9' });
        var ifr = $('<iframe/>', { 'src' : $(this).attr('href') });
        
        $(div).append(ifr);
		
        $('#main-container').html(div);
        $('#examples-text').html($(this).text());
	});
	
	var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function() {
		var html = $(this).parent().html();
		html = cleanSource(html);
		$("#source-modal pre").text(html);
		$("#source-modal").modal();
	});

	$('.bs-component [data-toggle="popover"]').popover();
	$('.bs-component [data-toggle="tooltip"]').tooltip();

	$(".bs-component").hover(function() {
		$(this).append($button);
		$button.show();
	}, function() {
		$button.hide();
	});

	function cleanSource(html) {
		var lines = html.split(/\n/);

		lines.shift();
		lines.splice(-1, 1);

		var indentSize = lines[0].length - lines[0].trim().length, re = new RegExp(
				" {" + indentSize + "}");

		lines = lines.map(function(line) {
			if (line.match(re)) {
				line = line.substring(indentSize);
			}

			return line;
		});

		lines = lines.join("\n");

		return lines;
	}

})();
