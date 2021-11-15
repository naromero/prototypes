$(document).ready(function(){
	// Variables
	var hScrollPosition = 1;
	var $hscroll = $(".hscroll-content");
	var $pagePrevious = $("#page-previous");
	var $pageNext = $("#page-next");
	
	// Functions
	function updatePosition(){
		switch (hScrollPosition){
			case 1:
				console.log(hScrollPosition);
				$hscroll.css("left","36px");
				$pagePrevious.css("visibility", "hidden");
				$pageNext.css("visibility", "visible");
				break;
			case 2:
				console.log(hScrollPosition);
				$hscroll.css("left","-184px");
				$pagePrevious.css("visibility", "visible");
				$pageNext.css("visibility", "visible");
				break;
			case 3:
				$hscroll.css("left","-400px");
				console.log(hScrollPosition);
				$pagePrevious.css("visibility", "visible");
				$pageNext.css("visibility", "visible");
				break;
			case 4:
				$hscroll.css("left","-616px");
				console.log(hScrollPosition);
				$pagePrevious.css("visibility", "visible");
				$pageNext.css("visibility", "hidden");
				break;	
			default:
				console.log("invalid position");
		}
	}
	function previousPage(){
		if (hScrollPosition > 1){
			console.log("previous page");
			hScrollPosition--;
			updatePosition();	
		};		
		
	}
	function nextPage(){
		if (hScrollPosition < 4){
			console.log("next page");
			hScrollPosition++;
			updatePosition();	
		};
	}
	
	// Triggers
	$pagePrevious.on("click", previousPage);
	$pageNext.on("click", nextPage);
	
	// Initial conditions
	updatePosition();
	
	
	
	
	
	
	
	
	
	
	
	
});