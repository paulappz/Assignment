describe("NoteApplication test", function() {
	var noteApp;

	beforeEach(function() {
		noteApp = new NotesApplication("paul");
	});

	it("should have an author named paul", function() {
		expect(noteApp.author).toEqual("paul");
	});

	it("should should have a notes list of type array", function() {
		expect(Array.isArray(noteApp.notes)).toBeTruthy();
	})

	it("should have a create function", function() {
		expect(typeof noteApp.create === 'function').toBeTruthy();
	});

	it("should be able to make a note", function() {
		var note = "My first note";
		noteApp.create(note);
		expect(noteApp.notes).toContain(note);
	});

	it("should have a listNotes function", function() {
		expect(typeof noteApp.listNotes === 'function').toBeTruthy();
	});

	it("should have a get function", function() {
		expect(typeof noteApp.get === 'function').toBeTruthy();
	});

	it("should be able to return a note", function() {
		var note = "My first note";
		noteApp.create(note);

		expect(noteApp.get(0) === note).toBeTruthy();
	});

	it("should have a search function", function() {
		expect(typeof noteApp.search === 'function').toBeTruthy();
	});

	it("should be able to search a note", function() {
		var note = "My first note";
		var searchText = "first";
		var heading = "\nShowing result for search text " + searchText + "\n";
		noteApp.create(note);

		expect(noteApp.search(searchText).length).toBeGreaterThan(heading.length);
	});

	it("should have an edit function", function() {
		expect(typeof noteApp.edit === 'function').toBeTruthy();
	});

	it("should be able to edit a note", function() {
		var new_note = "My last note";
		var note = "My first note";
		noteApp.create(note);

		expect(noteApp.edit(0, new_note) === new_note).toBeFalsy();
	});

	it("should have a delete function", function() {
		expect(typeof noteApp.delete === 'function').toBeTruthy();
	});

	it("should be able to delete a note", function() {

		var note = "My first note";
		noteApp.create(note);
		noteApp.delete(0);

		expect(noteApp.notes).not.toContain(note);
	});
});