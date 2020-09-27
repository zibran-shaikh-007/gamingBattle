/* if (process.env.NODE_ENV !== `production`) {
    require('dotenv').config()
}
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const dotenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 7000;
const cloudinary = require('cloudinary').v2;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path')


//cors middleware
app.use(cors());

//express midllerwares
app.use(express.json());
app.use(express.static(`public`));
app.use(express.urlencoded({ extended: false }));

//passport middleware
app.use(passport.initialize());

//mongoose setup 
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
let DB = mongoose.connection;

DB.once('open', () => console.log(`Connection to the Database has been made successfully`));
DB.on('err', (err) => console.error(`Error in connecting to the database having error ${err}`));

//cloudinary setup
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

if(process.env.NODE_ENV ==='production'){
    app.use(express.static('index.html'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'index.html'))
    });
} 

//swagger conf ig
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Gaming Battle API",
            description: "GB API information",
            contact: {
                name: 'developer'
            },
            servers:['https://testapi.thegamingbattle.com']
           /*  servers: ['http://localhost:7000'] */
        }
    },
    apis: ['index.js']
}
// testing the connection
/* app.use('/', (req, res)=>{
    res.status(200).send("connection is good")
}) */
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


//bringing in the routes
/** 
 * @swagger
 * /admin:
 *   get:
 *      description: to get all admin data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /admin:
 *   post:
 *      description: name:string password:string
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /admin:
 *   put:
 *      description: to get all admin data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /admin:
 *   delete:
 *      description: to get all admin data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
const admin = require('./routes/admin');
app.use('/admin', admin)

/** 
 * @swagger
 * /createGame:
 *   get:
 *      description: to get all game data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /createGame:
 *   post:
 *      description: name:string, image:string
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /createGame:
 *   put:
 *      description: update the game
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /createGame:
 *   delete:
 *      description: delete game
 *      responses:
 *         '200':
 *           description: A succesful response 
 */

const createGame = require('./routes/createGame');
app.use('/createGame', createGame)

/** 
 * @swagger
 * /tournament:
 *   get:
 *      description: to get all tournament data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /tournament:
 *   post:
 *      description: image:string, game:string, prizepool:{rank:string, prize;string},totalPrize:number, startDate:date, endDate:date,  startTime:date, endTime:date,team:string, rules:string, platform:string
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /tournament:
 *   put:
 *      description: update the tournament
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /tournament:
 *   delete:
 *      description: delete tournament
 *      responses:
 *         '200':
 *           description: A succesful response 
 */

const tournaments = require('./routes/tournament');
app.use('/tournament', tournaments)

/** 
 * @swagger
 * /login:
 *   get:
 *      description: to get login data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /login:
 *   post:
 *      description:  googleId:string, imageUrl:string,email:string, name:string
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /login:
 *   put:
 *      description: update the login data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /login:
 *   delete:
 *      description: delete login
 *      responses:
 *         '200':
 *           description: A succesful response 
 */


const login = require('./routes/login');
app.use('/login', login)



/** 
 * @swagger
 * /registration:
 *   get:
 *      description: register user for tournament
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /registration:
 *   post:
 *      description:  youtube:string, name:string,age:number, mobile:number,email:string, address:string, players:{player:string}
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /registration:
 *   put:
 *      description: update the user register data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */
/** 
 * @swagger
 * /registration:
 *   delete:
 *      description: delete registered user data
 *      responses:
 *         '200':
 *           description: A succesful response 
 */

const Registration = require('./routes/resForm');
app.use('/registration', Registration)

//server connection
app.listen(PORT, () => console.log(`Connection to the server was successful at port ${PORT}`))


