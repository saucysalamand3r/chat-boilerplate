$("#chat_input").on('keypress', function(evt){
	var msg = $(this).val();
	if (evt.which == 13 && msg) {
		appendMsg(msg);
	}
});

$("#send_button").on('click', function(evt){
	var msg1 = $("#chat_input").val();
	if (msg1) {
		appendMsg(msg1);
	}
});

function appendMsg(msgToSend){
	if (msgToSend) {
		var dom = '<div class="ours"><span class="thumb"></span><span class="msg">' + msgToSend + '</span></div>';
		$(".convo").append(dom);
		$("#chat_input").val('');
    $('.convo').scrollTop($('.convo')[0].scrollHeight);
	}
}
