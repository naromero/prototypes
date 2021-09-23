$(document).ready(function(){
	
	// Configuration
	
	var config = {
		density: "default",
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
	$("#chat-button-size").change(updateChatButtonSize);
	
	
	// Initial conditions
	
	updateDensity();
	updateChatButtonSize();

});
