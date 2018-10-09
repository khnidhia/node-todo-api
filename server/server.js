var express=require('express');
var bodyParser=require('body-parser');





var {mongoose} = require('./db/mongoose');
var {Todo}=require('./models/todo');

var {User}=require('./models/user');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	console.log(req.body);
})

app.listen(3000,()=>{
	console.log("started on port 3000");
});

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');

//var Todo = mongoose.model('Todo', {
  //text: {
    //type: String,
    //require:true,
 //   minlength:1,
   // trim:true
  //},
  //completed: {
    //type: Boolean
  //},
//  completedAt: {
  //  type: Number
 // }
//});

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

//var otherTodo = new Todo({
//	text:' Edit this video '
//});

//otherTodo.save().then((doc) => {
  //console.log(JSON.stringify(doc, undefined, 2));
//}, (e) => {
  //console.log('Unable to save', e);
//});
