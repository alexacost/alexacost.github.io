import notesAPI from "./notesAPI.js"

 /* notesAPI.saveNote({
    title: "the title has changed",
    body: "we are a new note"
}); */

notesAPI.deleteNote(5092);
console.log(notesAPI.getAllNotes());