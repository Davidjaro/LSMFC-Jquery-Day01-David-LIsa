var grocery = JSON.parse(grocery);

for (i=0; i < grocery.length; i++){
status = Math.floor(Math.random() * 51);
	var img = ` <div class="item">
					<img class="images" id="image${i}" src="${grocery[i].img}"> 
					<p id="p${i}">${grocery[i].name} Status: ${status} </p>
				</div>
	`;

// document.getElementById("content").innerHTML += img;
$("#content").append(img);



}


 

