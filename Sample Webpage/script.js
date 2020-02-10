$


$("a").attr("href", "http://www.codefactory.wien");

$("code").css("color", "red");

$("ol>li").css("background-color", "#2a7b90");

$("textarea").attr("placeholder", "Express your opinion");

$("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg")

$("blockquote").css({

	"background-color" : "orange",

	"font-style" : "italic"
});
$("#logo").css("color", "black");

$(".gray").css("color", "white");

$(".date").remove();

// $("ul>li").after("<li>New Templates</li>");

// $("ul:first-of-type").addClass("box");

// $(".box").after("<li>New Templates</li>").after("<li>Order Template</li>").after("<li>Contact Us</li>");

$("#sidebar ul:first-of-type").attr("id","oui");

$("#oui li:last-of-type").after("<li><a>Contact Us</a></li>").after("<li><a>Order Template</a></li>").after("<li><a>New Templates</a></li>");

$("#sidebar p:first").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");