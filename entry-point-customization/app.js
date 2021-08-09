$(document).ready(function(){
	// Variables
	var config = {
		buttonType: "bubble",
		brandColor: "blue",
		icon: "messenger",
		iconStyle: "filled",
		cornerStyle: "round",
	};
	
	// Functions
	function updateButtonType() {
		config.buttonType = $("input[name='button-type']:checked").val();
		drawButton();
	}
	function updateBrandColor() {
		config.brandColor = $("select[name='brand-color']").val();
		drawButton();
	}
	function updateIcon() {
		config.icon = $("select[name='icon']").val();
		drawButton();
	}
	function updateIconStyle() {
		config.iconStyle = $("input[name='icon-style']:checked").val();
		drawButton();
	}
	function updateCornerStyle() {
		config.cornerStyle = $("input[name='corner-style']:checked").val();
		drawButton();
	}
	function drawButton() {
		// Button type
		switch (config.buttonType) {
			case "bubble":
				$(".launcher").removeClass("launcher--pill");
				$(".launcher").addClass("launcher--bubble");
				break;
			case "pill":
				$(".launcher").removeClass("launcher--bubble");
				$(".launcher").addClass("launcher--pill");
				break;
			default:
				console.log("Invalid button type");
		}	
		
		// Brand color
		switch (config.brandColor) {
			case "blue":
				$(".launcher").css("background","#0082fd");
				break;
			case "red":
				$(".launcher").css("background","#e54343");
				break;
			case "green":
				$(".launcher").css("background","#00a925");
				break;
			default:
				console.log("Invalid brand color");
		}
		
		// Icon
		var iconPath = `img/${config.icon}-${config.iconStyle}.svg`;
		$('.launcher-icon').load(iconPath);
		
		// Corner style
		switch (config.cornerStyle) {
			case "round":
				$(".launcher").css("borderRadius","60px");
				break;
			case "soft":
				$(".launcher").css("borderRadius","8px");
				break;
			case "sharp":
				$(".launcher").css("borderRadius","2px");
				break;	
			default:
				console.log("Invalid corner style")
		}
	}
	
	// Events
	$("#button-type").change(updateButtonType);
	$("select[name='brand-color']").change(updateBrandColor);
	$("select[name='icon']").change(updateIcon);
	$("#icon-style").change(updateIconStyle);
	$("#corner-style").change(updateCornerStyle);

	drawButton();
});