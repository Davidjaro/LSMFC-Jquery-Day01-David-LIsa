$("form").submit(function(e) {

	e.preventDefault();
	
	
	

});
// $("#myform").remove();


// var div = document.createElement("div");
// div.innerHTML = "servas";

var i;
for (i=0; i <= 4; i++ ){
	var div = document.createElement("div");
	div.innerHTML = "servas";

	$("article").append(div);

	$("div").addClass("box");
};

// $("article").append(div);

$("#msg").val("Search for...");

$("a").attr("href", "http://www.codefactory.wien");