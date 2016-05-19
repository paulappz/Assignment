
"use strict"

function NotesApplication(author) {
	// Take in a parameter author  of the note and saves this as an instance variable
	this.author = author;
	// Create a notes list,then store all the notes as an instance property.
	this.notes = [];

	

	//  function create(note_content) takes the note content as the parameter and adds it to the notes list of  object.
	this.create = function(noteContent) {
		this.notes.push(noteContent);
	};

	/* listNotes() function lists out each of the notes in the notes list in the following format. 
	The note_id parameter below represents the respective index of each of the items in the list, 
	the NOTE_CONTENT represent the note content and the author represents the note author.*/
	this.listNotes = function() {
		for (var i = 0; i < this.notes.length; i++) {
			console.log(
				"Note ID: " + i + "\n" +
				this.notes[i] + "\n" +
				"By Author: " + this.author + "\n\n"
			);

		}
	};

	/* get(noteId) function takes a noteId which refers to the index of the note in the notes
	list and returns the content of that note as a string.*/
	this.get = function(noteId) {
		return this.notes[noteId];
	};

	/* search(search_text)function take a search string, search_text and returns all the 
	notes with that text within it in the following format*/
	this.search = function(searchText) {
		result = [];
		var j = 0;

		this.notes.forEach(function(el, i) {
			if (el.indexOf(searchText) > -1)
				result.push({
					id: i,
					note: el
				});
		});
		var heading = "\nShowing result for search text " + searchText + "\n";
		var content = "";
		var that = this;
		result.map(function(el) {
			content += "\nNote ID: " + el.id + "\n" +
				el.note + "\n" +
				"By Author: " + that.author + "\n";
		});
		return heading + content;


	};
	/* edit(edit_text)function take two input(note_id and new_content)*/
	this.edit = function(noteId, newContent) {
		this.notes[noteId] = newContent;
	};
	/* delete(delete_text)function take a input(note_id )*/
	this.delete = function(noteId) {
		this.notes.splice(noteId, 1);



	};
}