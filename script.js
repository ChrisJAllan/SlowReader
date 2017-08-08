var words;
var word_i;

function show_editor() {
	$("#EntryContainer").css('display', '');
	$("#WordDisplay").css('display', 'none');
}

function show_words() {
	$("#EntryContainer").css('display', 'none');
	$("#WordDisplay").css('display', '');
}

function show_word() {
	$("#word").text(words[word_i]);
	
	$("#back").prop('disabled', (word_i <= 0));
	$("#fwd").prop('disabled', (word_i >= words.length - 1));
}

function start_display() {
	words = $("#text").val().split(/\s+/g);
	word_i = 0;
	
	show_word();
	show_words();
}

function next_word() {
	console.assert(word_i < words.length - 1, "Index too great!");
	
	word_i++;
	show_word();
}

function prev_word() {
	console.assert(word_i > 0, "Index too small!");
	
	word_i--;
	show_word();
}

