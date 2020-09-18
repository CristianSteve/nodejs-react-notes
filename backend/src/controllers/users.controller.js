const usersCtrl = {};

const userModel = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
     const userList = await userModel.find();
     res.json(userList);
}
 
usersCtrl.createUsers = async (req, res) => {
    const { username, name, lastname } = req.body;
    if(username == null || name == null || lastname == null){
        res.json({message : 'parametros obligatorios no informado'});
    }else{
        const newUser = userModel({
            username,
            name,
            lastname
        })
        await newUser.save();
        res.json({message : 'created'})
    }
};

usersCtrl.deleteUser = async (req, res) => {
    const idUser = req.params.id;
    if(idUser != null)
        await userModel.deleteOne({_id : req.params.id});
        res.json({message : 'delete ok'});
}

usersCtrl.updateUsers = (req,res) => res.json({message : 'update'});
 


module.exports = usersCtrl;