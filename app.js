const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')

// Use path to access React App files
app.use(express.static(path.join(__dirname, 'client/build')));

// Get Method, REACT app port 3001
app.get('/', (req, res)=> {

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

// NODE Express app running on port 3000 if not environment port
app.listen(process.env.PORT || 3000, ()=> {
      console.log("server runnning ")
})
