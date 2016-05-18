function NotesApplication(author){
	// Take in a parameter author  of the note and saves this as an instance variable
	this.author = author;
	// Create a notes list,then store all the notes as an instance property.
	this.notes = [];

	//  function create(note_content) takes the note content as the parameter and adds it to the notes list of  object.
	this.create = function(note_content){
		this.notes.push(note_content);
	};

	/* listNotes() function lists out each of the notes in the notes list in the following format. 
	The note_id parameter below represents the respective index of each of the items in the list, 
	the NOTE_CONTENT represent the note content and the author represents the note author.*/
	this.listNotes  = function () {
		for(var index = 0; index < this.notes.length; index++) {
			console.log(
				"Note ID: " + index + "\n" +
				this.notes[index] + "\n" +
				"By Author: " + this.author + "\n\n"
			);
			
		}
	};
	
	/* get(note_id) function takes a note_id which refers to the index of the note in the notes
	list and returns the content of that note as a string.*/
	this.get = function (note_id) {
		return this.notes[note_id];
	};
	
	/* search(search_text)function take a search string, search_text and returns all the 
	notes with that text within it in the following format*/
	this.search = function (search_text) {
		result = [];
		//var index;
		for(index = 0; index < this.notes.length; index++) {
			if (this.notes[index].includes(search_text)) {
				result.push(this.notes[index]);
			}
		}
		return result;
	};
}

	

var paul = new NotesApplication("paul");

paul.create("PAUL is an Andelan");
paul.create("I love Javascript");

paul.listNotes();
console.log(paul.get(1));
console.log(paul.get(0));

console.log(paul.search("Andelan"));