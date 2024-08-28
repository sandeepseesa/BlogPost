const mongoose = require('mongoose');

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://127.0.0.1:27017/my_database')
.then(()=> {console.log("connected to mongodb");
})
.catch((error)=> {console.error("Error connecting to mongodb", error);
})

// to create 
// BlogPost.create({
//     title: 'Echoes of Unseen: Enigmatic Encounters',
// body: 'In a world where reality blends seamlessly with the mysterious, "Echoes of the Unseen" takes you on a mesmerizing journey into the depths of the unknown. Follow the enigmatic encounters of protagonists who navigate through the veils of secrecy and revelation, where every shadow holds a secret and every whisper echoes with the unseen.'
// }).then( (blogpost) => {
//     console.log("document created: ", blogpost);
// }).catch((error) => {
//     console.error("Error: ", error);
// }); 

// Reading all data from mongodb using mongoose
// BlogPost.find({})
// .then ((error, blogspot) => {
//     console.log(error, blogspot)
// })

// finding for particular title
// BlogPost.find({
//     title:'The T20 World Cup'
// }).then ((error, blogspot) => {
//     console.log(error, blogspot)
// })

//find all documents with The in title
// BlogPost.find({
//     title:/The/
// }).then ((error, blogspot) => {
//     console.log(error, blogspot)
// })

//To get single document, use the findById method
// var id ="663cff5686145c50d7146a61";
// BlogPost.findById(id)
// .then((error, blogspot) => {
//     console.log(error, blogspot)
// })

//Update Records
// var id ="663cff5686145c50d7146a61";
// BlogPost.findByIdAndUpdate(id, {
//     title:'The T20 World Cup 2024'
// })
// .then((error, blogspot) => {
//     console.log(error, blogspot)
// })

//Delete Records
var id ="663d021b3bf74a5f388980c2";
BlogPost.findByIdAndDelete(id)
.then((error, blogspot) => {
    console.log(error, blogspot)
})