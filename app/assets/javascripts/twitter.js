$(function() { 

	// Overwrites the default behavior of the form also prevents refresh 
	$('form').on('submit', function(event){

		event.preventDefault();

		// Look at the HTML the form rendered and grab the id of the input, it's #searchterm
		var searchThis = $('#searchterm').val();

		var tweetCall = $.ajax({
			url: "../tweets/fetch",
			type: "get",
			data: {searchterm: searchThis}

		});

		$('#display').html("");  //clears the results div before appending

		tweetCall.done(function(calledData) {
			// for (var i=0; i < calledData.length; i++) {
			// 	console.log(calledData[i]);
			// 	var item = "<li><em>" + calledData[i]["name"] + 
			// 	"</em> (@" + calledData[i]["screen_name"] + ")<br />" + 
			// 	calledData[i]["text"] + "</li><br />";
			// 	$('#display').append(item);
			// }

			for (var i=0; i < calledData.length; i++) {
				var item = "<li><em>" + 
				calledData[i]["text"] + "</li><br />";
				$('#display').append(item);
			}

		}); //end ajax code

		$('#searchterm').val(""); //clears the searchbox

	}); //end form code

}); //end document.ready jquery
