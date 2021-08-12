$(document).ready(function(){
	// Variables
	var config = {
		buttonType: "icon",
		brandColor: "blue",
		fillStyle: "default",
		icon: "messenger",
		iconStyle: "filled",
		cornerStyle: "round",
		labelText: "Chat Now",
		isOpen: false,
	};
	var colors = {
		red: "#e54343",
		green: "#00a925",
		blue: "#0083fe"
	};
	var cornerStyle = {
		round: "60px",
		soft: "8px",
		sharp: "2px"
	};
	
	// Functions
	function updateButtonType() {
		config.buttonType = $("input[name='button-type']:checked").val();
		$("#label-text-field").toggle();
		closeChatWindow();
		drawButton();
	}
	function updateBrandColor() {
		config.brandColor = $("select[name='brand-color']").val();
		closeChatWindow();
		drawButton();
	}
	function updateFillStyle() {
		config.fillStyle = $("input[name='fill-style']:checked").val();
		closeChatWindow();
		drawButton();
	}
	function updateIcon() {
		config.icon = $("select[name='icon']").val();
		closeChatWindow();
		drawButton();
	}
	function updateIconStyle() {
		config.iconStyle = $("input[name='icon-style']:checked").val();
		closeChatWindow();
		drawButton();
	}
	function updateCornerStyle() {
		config.cornerStyle = $("input[name='corner-style']:checked").val();
		closeChatWindow();
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
		switch (config.icon) {
			case "none":
				$(".launcher-icon").css("display", "none");
				break;
			default:
				$(".launcher-icon").css("display", "flex");
				var iconPath = `img/${config.icon}-${config.iconStyle}.svg`;
				$('.launcher-icon').load(iconPath);
		}
		
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
	
	// Controls
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
	
	// Animations
	
	var animDefaults = {
		easing: 'easeOutQuad',
		duration: 200,	
	};
	
	function openChatWindow() {
		// Hide launcher
		anime({
			targets: '#launcher',
			opacity: [1,0],
			duration: animDefaults.duration,
			easing: animDefaults.easing,
		});
		// Show window
		anime({
			begin: function(anim){
				$("#chat-window").css("display", "flex");	
			},
			targets: '#chat-window',
			opacity: [0,1],
			translateY: [30,0],
			duration: animDefaults.duration,
			easing: animDefaults.easing,
			complete: function(anim){
				config.isOpen = true;
			}
		});
	}
	function closeChatWindow() {
		// Show launcher
		anime({
			targets: '#launcher',
			opacity: [0,1],
			duration: animDefaults.duration,
			easing: animDefaults.easing,
		});
		// Hide window
		anime({
			targets: '#chat-window',
			opacity: [1,0],
			// translateY: [0,30],
			duration: animDefaults.duration,
			easing: animDefaults.easing,
			complete: function(anim){
				config.isOpen = false;
				$("#chat-window").css("display", "none");
			}
		});
	}
	function toggleChatWindow() {
		if (config.isOpen) {
			closeChatWindow();
		} else {
			openChatWindow();
		}
	}
	
	$("#launcher").click(toggleChatWindow);
	$(".chat-close").click(toggleChatWindow);	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
