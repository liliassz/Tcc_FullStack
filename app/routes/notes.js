const express = require('express');
const router = express.Router()
const Note  = require('../models/note')
const withAuth = require('../../app/middleware/auth')

router.post('/', withAuth, async (req, res) => {
    const { title, body } = req.body
    
    try {
        let note = new Note({ title: title, body: body, author: req.user._id })
        await note.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({error: "Problema to create a new note"})
        console.error(error)
    }
})

module.exports = router