const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 8080;

const SECRET_KEY = 'MViFqvp5Y8aTjR3iEAKCqgcOHJAMoo+LRPktbs9T4BFPzJ4q0wP8wjg+MHWr1KornpXT8i25kvKnAZdnt4b5tw==';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) return res.status(401).send('Access Denied');

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Invalid Token');
        req.user = user;
        next();
    });
};

const findUser = async (username) => {
    const pass = await bcrypt.hash("test1234", 10)

    const user = { id: 1, username:"test", password:pass}; 
    if(user.username === username) {
        console.log("User found: ",user)
        return user;        
    }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await findUser(username);
    
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: `Welcome ${user.username}!`, token });
    } else {
        res.status(401).send('Username or password is incorrect');
    }
});

app.get('/protected', authenticateToken, (req, res) => {
    res.send(`Welcome to the protected route, ${req.user.username}`);
});

app.get('/', (req, res) => {
    res.send(`Welcome to the home page`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


