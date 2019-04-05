var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'projectdb.chgpr6ecmtfj.us-east-2.rds.amazonaws.com',
  user     : 'csc648',
  password : 'pass2019'
});

function getResults(callback){
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM properties.houses', function(err, res, fields){
  if(err){
    console.error('error querying..');
    return;
  }
  //console.log(res);
  callback(false,res);
});

}

module.exports.getResults = getResults;
