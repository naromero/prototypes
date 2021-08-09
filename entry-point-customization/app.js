$(document).ready(function(){
	// Variables
	var config = {
		buttonType: "icon",
		brandColor: "blue",
		fillStyle: "default",
		icon: "messenger",
		iconStyle: "filled",
		cornerStyle: "round",
		labelText: "Chat Now"
	};
	var colors = {
		red: "#e54343",
		green: "#00a925",
		blue: "#0083fe"
	};
	var cornerStyle = {
		round: "60px",
		soft: "8px",
		sharp: "0px"
	};
	
	// Functions
	function updateButtonType() {
		config.buttonType = $("input[name='button-type']:checked").val();
		$("#label-text-field").toggle();
		drawButton();
	}
	function updateBrandColor() {
		config.brandColor = $("select[name='brand-color']").val();
		drawButton();
	}
	function updateFillStyle() {
		config.fillStyle = $("input[name='fill-style']:checked").val();
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
	function updateLabelText() {
		config.labelText = $("input[name='label-text']").val();
		drawButton();
	}
	function drawButton() {
		// Button type
		switch (config.buttonType) {
			case "icon":
				$(".launcher").removeClass("launcher--pill");
				$(".launcher").addClass("launcher--bubble");
				break;
			case "icon-label":
				$(".launcher").removeClass("launcher--bubble");
				$(".launcher").addClass("launcher--pill");
				break;
			default:
				console.log("Invalid button type");
		}	
		
		// Coloring
		switch (config.brandColor) {
			case "blue":
				if (config.fillStyle == "default") {
					$(".launcher").css("background", colors.blue);
					$(".launcher").css("color", "#fff");
				} else {
					$(".launcher").css("background", "#fff");
					$(".launcher").css("color", colors.blue);
				}
				break;
			case "red":
				if (config.fillStyle == "default") {
					$(".launcher").css("background", colors.red);
					$(".launcher").css("color", "#fff");
				} else {
					$(".launcher").css("background", "#fff");
					$(".launcher").css("color", colors.red);
				}
				break;
			case "green":
				if (config.fillStyle == "default"){
					$(".launcher").css("background", colors.green);
					$(".launcher").css("color", "#fff");
				} else {
					$(".launcher").css("background", "#fff");
					$(".launcher").css("color", colors.green);
				}
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
				$(".launcher").css("borderRadius", cornerStyle.round);
				break;
			case "soft":
				$(".launcher").css("borderRadius", cornerStyle.soft);
				break;
			case "sharp":
				$(".launcher").css("borderRadius", cornerStyle.sharp);
				break;	
			default:
				console.log("Invalid corner style")
		}
		
		// Label text
		$('.launcher-label').text(config.labelText);
	}
	
	// Events
	$("#button-type").change(updateButtonType);
	$("select[name='brand-color']").change(updateBrandColor);
	$("#fill-style").change(updateFillStyle);
	$("select[name='icon']").change(updateIcon);
	$("#icon-style").change(updateIconStyle);
	$("#corner-style").change(updateCornerStyle);
	$("input[name='label-text']").keyup(updateLabelText);
	
	// Initial conditions
	$("#label-text-field").hide();
	drawButton();
});