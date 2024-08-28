const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware.js');
const flash = require('connect-flash');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const app = new express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(fileUpload());
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use(flash());

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});


const validateMiddleware = require('./middleware/validationMiddleware');
const homeController = require('./controllers/home');
const getPostController = require('./controllers/getPost.js');
const storePostController = require('./controllers/storePost');
const newPostController = require('./controllers/newPost');
const newUserController = require('./controllers/newUser.js');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const validationMiddleware = require('./middleware/validationMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware.js')
const logoutController = require('./controllers/logout')


app.get('/',homeController);

app.post('/posts/store', authMiddleware, storePostController);

app.get('/posts/new',  newPostController);

app.get('/post/:id', getPostController);

//new User registeration
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController);

app.post('/users/register', redirectIfAuthenticatedMiddleware,  storeUserController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware,  loginController);

app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController);

app.get('/auth/logout', logoutController)

app.use((req,res) => res.render('notfound'));



//app listening on port 
let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000;
}

app.listen(port, () => {
    console.log("App listening...")
})

