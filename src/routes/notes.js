const express = require('express');

const router = express.Router();

// modelos
const Note = require('../models/Note');

// ayudas
const { isAuthenticated } = require('../helpers/auth');

// Nueva nota
router.get('/notes/add', isAuthenticated, (req, res) => {
  res.render('notes/new-note');
});

router.post('/notes/new-note', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: 'Please Write a Title.' });
  }
  if (!description) {
    errors.push({ text: 'Please Write a Description' });
  }
  if (errors.length > 0) {
    res.render('notes/new-note', {
      errors,
      title,
      description,
    });
  } else {
    const newNote = new Note({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
  }
});

// obtener las notas
router.get('/notes', isAuthenticated, async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).sort({ date: 'desc' });
  res.render('notes/all-notes', { notes });
});

// Editar Notas
router.get('/notes/edit/:id', isAuthenticated, async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (note.user !== req.user.id) {
    req.flash('error_msg', 'Not Authorized');
    return res.redirect('/notes');
  }
  return res.render('notes/edit-note', { note });
});

router.put('/notes/edit-note/:id', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description });
  req.flash('success_msg', 'Note Updated Successfully');
  res.redirect('/notes');
});

// eliminar Notas
router.delete('/notes/delete/:id', isAuthenticated, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'Note Deleted Successfully');
  res.redirect('/notes');
});

module.exports = router;
