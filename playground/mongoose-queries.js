const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
cons {ObjectID}=require('mongodb');

var id = "5bb8eb39782788341bc3ae25";
if(!ObjectID.isValid(id)){
	console.log('invalid id');

}
Todo.find({
	_id:id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	_id:id
}).then((todo)=>{
	console.log('todos',todo);
});

Todo.findById(id).then((todo)=>{
	console.log("todo",todo);
})