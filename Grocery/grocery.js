var grocery = JSON.parse(grocery);

for (i=0; i < grocery.length; i++){
status = Math.floor(Math.random() * 26);
	var img = ` <div id="div${i}" class="item">
					<img class="images" id="image${i}" src="${grocery[i].img}">
					<ul>
						<li>Price/kg: <br> ${grocery[i].currency} ${grocery[i].price},-</li> 
						<li>order as much you want!</li>
					</ul>
					<p id="p${i}">${grocery[i].name} - Stock: ${status} pcs</p>
				</div>
	`;

// document.getElementById("content").innerHTML += img;
$("#content").append(img);

if (status <= 6){
	$("#div"+i).css("background-color", "#EE6352");
	$("#div"+i+ " li:nth-of-type(2)").text("nearly out of stock!")
}
else if (status <= 12){
	$("#p"+i).parent().css("background-color", "#FAC05E");
	$("#div"+i+ " li:nth-of-type(2)").text("order fast before we get out of stock!")

}

$("#div"+i).on("click",function(){


	$(".item").animate({opacity: "0.3"}, "slow");
	$(".item").hide();	
	$(this).show().animate({opacity: "1"}, "slow");
	setTimeout(   function(){$(".item").show();}   ,   2000);
	setTimeout(   function(){$(".item").animate({opacity: "1"}, "slow");}   ,   3000);


});

}



 

