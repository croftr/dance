$(document).ready(function(){


	$("#btnSave").click(function() {
		
		var data = $("#addRunner :input").serializeArray();
		alert("click data is > " + data.firstName);
		$.post($("#addRunner").attr('action'), data, function(json) {
			if (json.status == "fail"){
				alert(json.meesage);				
			}
			if (json.status == "success"){
				alert(json.message);
				clearInputs();
			}
		},"json");			
	});

	function clearInputs(){
		$("#addRunner :input").each(function(){
			(this).val('');	
		});

	}	
//	$("#addRunner").submit(function(){
//		return false;
//	});


	$("#dancePupils").append("<ul></ul>");
	$.ajax({
		type: "GET",
		url: "quoter.xml",
		dataType: "xml",
		success: function(xml){

			$(xml).find('quote').each(function(){
				var words = $(this).find('words').text();
				var author = $(this).find('author').text();
				$("<li></li>").html(words + ", " + author).appendTo("#dancePupils ul");
			});
		},

		error: function() {
			alert("An error occurred while processing XML file.");
		}

	});



});//end doc.onready function

