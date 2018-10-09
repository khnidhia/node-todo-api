const MongoClient = require('mongodb').MongoClient;

var user={name:"andrew",age:23};
var {name}=user;
console.log(name);





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		return console.log('unable to connect to mongodb server');
	}
	console.log('connected to mongodb server');
	const db=client.db('TodoApp');
	
	db.collection('Todos').insertOne({
		text:'something to do',
		completed: false
	},(err,result)=>{
		if(err){
			return console.log("unsable to insert todo",err);
		}
		console.log(JSON.stringify(result.ops))
	});
	db.collection('Users').insertOne({
		_id:1333,
		name:"andrew",
		age:43
	},(err,result)=>{
		if(err){
			return console.log("cannot insert the value");
		}
		console.log(result.ops);
	});
	


	client.close();

});