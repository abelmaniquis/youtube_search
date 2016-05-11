// https://developers.google.com/youtube/v3/docs/activities#properties
//AIzaSyA_UbnYSWN9BafPa_N_y6WGe4P5J98X0wc

$(document).ready(function () {

	$("button").click(function () {

		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/search',
			data: {
				part: 'snippet',
				q: $('input').val(),
				type: 'video',
				key: 'AIzaSyA_UbnYSWN9BafPa_N_y6WGe4P5J98X0wc'
			},
			success: function (data) {
				$.each(data.items, function (i, item) {
					var output = getOutput(item);
					$('#results').append(output);
				});
			},
		});
	});

	function getOutput(item) {
		var videoId = item.id.videoId;
		var title = item.snippet.title;
		var description = item.snippet.description;
		var thumb = item.snippet.thumbnails.high.url;
		var channelTitle = item.snippet.channelTitle;
		var videoDate = item.snippet.publishedAt;

		var output =
		    '<h3><a class="fancybox fancybox.iframe" href="http://www.youtube.com/embed/' + videoId + '">' + title + '</a></h3>' +
			'<li>' +
			'<div class="list-left">' +
			"<a href = http://www.youtube.com/embed/" + videoId + ">" + '<img src="' + thumb + '">' + "</a>"
			'</div>' +
			'<div class="list-right">' +
			'<p>By <span class="cTitle">' + channelTitle + '</span> on ' + videoDate + '</p>' +
			'<p>' + description + '</p>' +
			'</div>' +
			'</li>' +
			'<div class="clearfix"></div>' +
			'';

		return output;
	}


});

/*
when search button is clicked, 
it should find matching results on youtube.com 
and append them to the ul in the search-results div id
*/