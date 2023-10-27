const express = require('express')
//Creates an Express application. The express() function is a top-level function exported by the express module
const app = express()
const port = 4000
const path = require('path')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//'req' is declared but its value is never read.
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

app.get('/hello/:anyVariable', (req, res) => {
    console.log(req.params.anyVariable);
    //pulled parameter out
    res.send('Hello ' + req.params.anyVariable)
})

//html file request
app.get('/test', (req, res) => {
    //Automatically sets the Content-Type response header field
    res.sendFile(__dirname + '/index.html')
})

//form to send data as part of the url - passing the data over as a query  - get request
app.get('/name', (req, res) => {
    res.send("Hello from a get method " + req.query.fname + " " + req.query.lname)
})

//post request
app.post('/name', (req, res) => {
    res.send("Hello from a Post method " + req.body.fname + " " + req.body.lname)
})


app.get('/api/books', (req, res) => {
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];
    //Send JSON response.  //200 is most common request //you can overwrite headers
    res.status(200).json({
        //myBooks = name of the array
        myBooks: data,
        //you can send back more information using comments 
        "message": "Hello from the server"
    });
})

//Send a response.
app.get('/goodbye', (req, res) => {
    res.send('Goodbye');
})

//Listen for connections.
//A node http.Server is returned, with this application (which is a Function) as its callback. 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


