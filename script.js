$(".board").hide();
$(".company-slogan").hide();
//1
$(".start").click(function() {
   $(".board").slideDown();
});

//2
$(".end").click(function() {
    $(".board").slideUp();
});

//3
$("img").hover(function() {
    $("img").css("border", "solid blue 5px");
});    

//4
$("img").mouseenter(function() {
    $("img").css("border", "solid red 5px");
}); 

//5
$("img").dblclick(function() {
    $(".company-slogan").show();
});

//6
$("img").mouseleave(function() {
	$(".company-slogan").hide();
});



