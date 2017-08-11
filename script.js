var words;
var word_i = 0;

var HINTS_ARRAY = [
	["its", "possesive"],
	["it's", "it is"],
	["they're", "they are"],
	["their", "possesive"],
	["there", "place"],
	["hear", "sound"],
	["here", "place"],
	["lets", "he/she/it lets"],
	["let's", "let us"]
];
var HINTS_MAP = new Map(HINTS_ARRAY);

function get_element(id) {
	return document.getElementById(id);
}

function show_editor() {
	get_element("EntryContainer").style.display = '';
	get_element("WordDisplay").style.display = 'none';
}

function show_words() {
	get_element("EntryContainer").style.display = 'none';
	get_element("WordDisplay").style.display = '';
}

function show_word() {
	var word = words[word_i];
	get_element("word").innerText = word;
	
	get_element("back").disabled = (word_i <= 0);
	get_element("fwd").disabled = (word_i >= words.length - 1);
	
	var search_word = /[\w']+/.exec(word.toLowerCase())[0];
	if (HINTS_MAP.has(search_word)) {
		get_element("hint").innerText = '(' + HINTS_MAP.get(search_word) + ')';
	}
	else {
		get_element("hint").innerText = '';
	}
}

function start_display(resume) {
	if (!words) {
		check_input();
	}
	
	if (!resume) {
		word_i = 0;
	}

	show_word();
	show_words();

	document.getElementById("resume").disabled = false;
}

function check_input() {
	words = get_element("text").value.split(/\s+/g).filter(function (word) {
		return /\w/.test(word);
	});
	
	get_element("start").disabled = (words.length == 0);
	get_element("resume").disabled = !(words.length > word_i && word_i != 0);
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

