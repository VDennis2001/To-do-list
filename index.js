const express = require("express"); //Require express
const path = require("path");
const app = express();  //fire express

const port = 8000;  //setting up the port

const db = require("./config/mongoose");
const Task = require("./models/model");

app.set("view engine", "ejs");  //setting a value for the property. After setting up template engine we place view part
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));



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

app.post("/create_task", function (req, res) { //when the for is created and filled if error occur it will show error line or redirect back 
  console.log("body is : ", req.body);
  Task.create(
    {
      Description: req.body.Description,
      Category: req.body.category,
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

app.get("/remove-task", function (req, res) {  //when we click onto delete button it if any error occur so we will print error line or route to remove-contact

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


//bind and listen the connections on the specified host and port
app.listen(port, function (err) { 
  if (err) {
    console.log("Error in running the server : ", port);
  }
  console.log("Server is running : ", port);
});