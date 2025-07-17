const prisma = require('../models/prismaClient');

exports.createUser = async (req, res) => {
    try{
      const user= await prisma.user.create({
        data: req.body
      })
      res.status(201).json(user);
    }
    catch(error){
     
        res.status(500).json({ error: 'failed to create the user' });

    }
}

exports.getAllUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({ error: 'failed to fetch users' });
    }
}

exports.getUser= async (req, res) => {
    try{
      const user = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
      })
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ error: 'failed to fetch the user' });
    }
}

exports.updateUser = async (req, res) => {
    try{
      const existingUser = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
      });
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      const user = await prisma.user.update({
        where: { id: parseInt(req.params.id) },
        data: req.body,
      })
      res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({ error: 'failed to update the user' });
    }
}

exports.deleteUser = async (req, res) => {
    try{
    const existingUser = await prisma.user.findUnique({
        where: { id: parseInt(req.params.id) },
      });
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      await prisma.user.delete({
        where: { id: parseInt(req.params.id) },
      })
      res.status(204).send();
    }
    catch(error){
        res.status(500).json({ error: 'failed to delete the user' });
    }
}