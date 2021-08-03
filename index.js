
// const express = require('express');
// const path = require('path');
// const app = express();

// const port = 8000;

// const db = require('./config/mongoose');
// const Task = require('./models/model');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.urlencoded());
// app.use(express.static('assets'));

// // var TODO_List = [
// //     {
// //         Description : "Get up early morning",
// //         Category : "Personal",
// //         Date : 08/05/2021
// //     }
// // ]

// app.get('/', function(req, res){
//     return res.render('home', {
//         title: "TODO_List",
//         TODO_List : TODO_List
//     });
// });


// app.post('/create_task',function(req, res){
//     console.log(req.body);
//     Task.create({
//         Description: req.body.Description,
//         Category: req.body.Category,
//         Date: req.body.Date
//     }, function(err, newTask){
//         if(err){
//             console.log("Error in creating a contact");
//             return;
//         }
//         console.log("******",newTask);
//         return res.redirect('back');
//     })

// });

// app.get('/remove-task', function(req, res){
//     let Description = req.query.Description;

//     let task_index = TODO_List.findIndex(task => task.Description == Description);

//     if ( task_index != -1){
//         TODO_List.splice(task_index, 1);
//     }

//     return res.redirect('back');
// });



// app.listen( port , function(err){
//     if (err){
//         console.log("Error in running the server : ", port);
//     }
//     console.log('Server is running : ', port);
// })

const express = require("express");
const path = require("path");
const app = express();

const port = 8000;

const db = require("./config/mongoose");
const Task = require("./models/model");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

var TODO_List = [
  {
    Description: "Get up early morning",
    Category: "Personal",
    Date: 08 / 05 / 2021,
  },
];

app.get("/", function (req, res) {
// To show the data we need to fetch
   Task.find({}, function(err, todos){
       if(err){
           console.log("Error in fetching from database");
           return;
       }
       return res.render("home", {
          title: "TODO_List",
          TO_DO_LIST: todos
       }); 
  });
});

app.post("/create_task", function (req, res) {
  Task.create(
    {
      Description: req.body.Description,
      Category: req.body.Category,
      Date: req.body.Date,
    },
    function (err, newTask) {
      if (err) {
        console.log(err);
        console.log("Error in creating a contact....");
        return;
      }
      console.log("******", newTask);
      return res.redirect("back");
    }
  );
});

app.get("/remove-task", function (req, res) {

    //get id from query in the URL
    let id = req.query.id;

  // find the task in db using id and delete it
  Task.findByIdAndDelete(id, function(err){
      if(err){
          console.log("Error in deleting object from database");
          return;
      }
      return res.redirect("back");
  })
});



app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server : ", port);
  }
  console.log("Server is running : ", port);
});