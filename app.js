const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const db =  require('./db.js');

// Use path to access React App files
//app.use(express.static(path.join(__dirname, 'client/build')));


// Get Method, REACT app port 3001
app.get('/', (req, res)=> {
	app.use(express.static(path.join(__dirname, 'client/build')));
	res.writeHead(200,{
		'Cache-Control': 'no-cache'
	});
	axios.get('http://localhost:3001/',
		{headers: {
       		 'Content-Type': 'application/json;charset=UTF-8',
        	 "Access-Control-Allow-Origin": "*"
      		}
	})
	.then((networkResponse) => {
	     res.send(networkResponse.data);
	})
	.catch((e) => {
	     res.send(':( did not work.');
	     console.log(e);
	});
});

app.get('/getResults', (req,res)=>{

	db.getResults((err, results) => {
		if(err) { res.send(500, "Server Error"); return; }
        	// Respond with results as JSON
        	console.log(results);
		res.send(results);
	});

});

// NODE Express app running on port 3000 if not environment port
app.listen(process.env.PORT || 3000, ()=> {
      console.log("server runnning ")
})
