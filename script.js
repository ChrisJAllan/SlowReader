var words;
var word_i;

function show_editor() {
	document.getElementById("EntryContainer").style.display = '';
	document.getElementById("WordDisplay").style.display = 'none';
}

function show_words() {
	document.getElementById("EntryContainer").style.display = 'none';
	document.getElementById("WordDisplay").style.display = '';
}

function show_word() {
	document.getElementById("word").innerHTML = words[word_i];
	
	document.getElementById("back").disabled = (word_i <= 0);
	document.getElementById("fwd").disabled = (word_i >= words.length - 1);
}

function start_display() {
	words = document.getElementById("text").value.split(/\s+/g);
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

