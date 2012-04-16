//load js-beautify function
var beautify = loadLibrary('beautify-css').beautify;

action.canPerformWithContext = function(context, outError) {
	return true;
}

action.performWithContext = function(context, outError) {
	// Set the range to the whole text
	var range = new Range(0, context.string.length)
	//set the text selection to the whole text
	var text = context.string.substringWithRange(range);
	// options
	var options = {
	  'indent_size': 1,
	  'indent_char': '\t'
	}
	//beautify the text
	text = beautify(text, options);
	//insert!
	context.selectedRanges = [range];
	return context.insertTextSnippet(new CETextSnippet(text));
};