const notesCtrl = {};

const noteModel = require('../models/Note');

notesCtrl.getNotes = async (req,res) => {
    const notes = await noteModel.find();
    res.json(notes);
}

notesCtrl.createNotes = async (req,res) => {
    const {title, content} = req.body;
    if(title == null || content == null){
        res.send({message : 'Campos obligatorios no informados'});
    }else{
        const newNote = new noteModel({
            title,
            content
        });
        await newNote.save();
        res.json({message : 'created'})
    }
}

notesCtrl.getNoteUnique = async (req, res) => {
    const noteFind = await noteModel.findById(req.params.id);
    res.json(noteFind == null ? {message : 'no found'} : noteFind);
    
}

notesCtrl.updateNotes = async (req,res) => {
    const idNote = req.params.id;
    const { title, content } = req.body;
    if(title == null || content == null){
        res.json({message : 'parameters no informed'})
    }else{
        await noteModel.findOneAndUpdate({_id : idNote},{
            title,
            content
        })
        res.json({message : 'update'})
    }
}
 


module.exports = notesCtrl;