$(document).ready(function(){
	console.log("Main javascript is now attached");
	if($("section").attr("id") != "aboutme"){
		$(this).hide();
	}
})