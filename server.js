const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const app = express();

//DB config
const db = require('./keys').mongoURI;
//connect to mongoDB
mongoose.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// let's write our first route
app.get('/', (req, res) => res.send('Hello World'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 8000;
app.listen(port,() => console.log(`Server running on port ${port}`));