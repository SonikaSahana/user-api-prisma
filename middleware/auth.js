const jwt = require('jsonwebtoken');
const prisma = require('../models/prismaClient');

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Failed to authenticate token' });
        }
        try {
            const user = await prisma.user.findUnique({
                where: { id: decoded.id }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            req.user = user;
            next();
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    });
};

module.exports = authenticate;