$(document).ready(function(){
	console.log("js loaded!!");
	$("#myBox").on("click", function(){
		alert("you clicked myOffice");
	});

	$("#myOffice").on("click", function(evt){
		alert("you clicked myOffice");
	});

	// var targetEl = document.getElementById("myOffice");
	// targetEl.addEventListener("click", function(){
	// 	targetEl.setAttribute("material", {color:"red"});
	// });

});