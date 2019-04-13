const express = require('express');
const mongoose = require('mongoose');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
//const db = require('./config/keys').mongoURI;

//connection to mongodb
/* mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err)) */
/* mongoose.connect(
process.env.MONGODB_URI || "mongodb://localhost/developernetwork"
); */

mongoose.connect('mongodb://127.0.0.1:27017/developernetwork', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})


app.get('/', (req, res) => res.send('Hello World'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

