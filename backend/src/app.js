
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
    credentials: true
}));
// routes
const serviceRoutes = require('./routes/service.route');
const messageRoutes = require('./routes/message.route');
const postRoutes = require('./routes/post.route');
const authRoutes = require('./routes/auth.route');
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);    
app.use('/api/services', serviceRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;