const notesCtrl = {};
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    let note = new Note({
        title,
        content,
        date,
        author
    });
    note = await note.save();
    res.json(note);
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author,
        date
    });
    res.json(note);
};

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndRemove({ _id: req.params.id });
    res.json('Note deleted');
};

module.exports = notesCtrl;