describe("NoteApplication test", function() {
	var noteApp;
	
	beforeEach(function() {
		noteApp = new NotesApplication("paul");
	});
	
	it("should have an author named paul", function () {
		expect(noteApp.author).toEqual("paul");
	});
	
	it("should should have a notes list of type array",function() {
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
     
});
