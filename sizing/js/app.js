$(document).ready(function(){
	
	// Configuration
	
	var config = {
		density: "default",
		placement: "above-chat-button",
		currentView: "welcome",
		chatButtonSize: "default",
	};
	
	// Functions
	
	function updateDensity() {
		config.density = $("input[name='density']:checked").val();
		switch (config.density) {
			case "default":
				$('link[href="css/chat-plugin-compact.css"]').remove();
				break;
			case "compact":
				$('head').append("<link href='css/chat-plugin-compact.css' rel='stylesheet' type='text/css'>");
				break;
			default:
				console.log("invalid density selection");
		}
	}
	function updatePlacement() {
		config.placement = $("input[name='placement']:checked").val();
		switch (config.placement) {
			case "above-chat-button":
				$(".chat-button").show();
				break;
			case "overlay-chat-button":
				$(".chat-button").hide();
				break;
			default:
				console.log("invalid placement selection");
		}
	}
	function updateCurrentView() {
		config.currentView = $("input[name='current-view']:checked").val();
		switch (config.currentView) {
			case "welcome":
				$(".welcome-view").show();
				$(".chat-view").hide();
				break;
			case "chat":
				$(".welcome-view").hide();
				$(".chat-view").show();
				break;
			default:
				console.log("invalid view selection");
		}
	}
	function updateChatButtonSize() {
		config.chatButtonSize = $("input[name='chat-button-size']:checked").val();
		
		switch (config.chatButtonSize) {
			case "default":
				$(".chat-button").removeClass("chat-button--compact");
				break;
			case "compact":
				$(".chat-button").addClass("chat-button--compact");
				break;
			default:
				console.log("Invalid chat button size selection");
		}
	}
	
	// Triggers
	
	$("#density").change(updateDensity);
	$("#placement").change(updatePlacement);
	$("#current-view").change(updateCurrentView);
	$("#chat-button-size").change(updateChatButtonSize);
	
	
	// Initial conditions
	
	updateDensity();
	updatePlacement();
	updateCurrentView();
	updateChatButtonSize();

});
