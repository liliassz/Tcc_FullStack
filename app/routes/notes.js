const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const withAuth = require('../middleware/auth'); // Verifique o caminho correto

router.post('/', withAuth, async (req, res) => {
    const { title, body } = req.body;
    
    try {
        let note = new Note({ title: title, body: body, author: req.user._id });
        await note.save();
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: "Problema to create a new note" });
        console.error(error);
    }
});

router.get('/:id', withAuth, async (req, res) => {
    try {
        const { id } = req.params;
        let note = await Note.findById(id);
        if (isOwner(req.user, note)) {
            res.json(note);
        } else {
            res.status(403).json({ error: "Not permission for get this Note" });
        }
    } catch (error) {
        res.status(500).json({ error: "Problema to get a note" });
    }
});

const isOwner = (user, note) => {
    if (JSON.stringify(user._id) == JSON.stringify(note.author._id)) {
        return true;
    } else {
        return false;
    }
};

module.exports = router;
