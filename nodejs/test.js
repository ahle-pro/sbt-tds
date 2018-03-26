/* var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close(); */

var i = 0;
// func
function asyncFunc() {
    let index = i++;
    let time = Math.random(5);
    setTimeout(function () {// < callback
        // then
        console.log((new Date()).getTime()+": "+index + ": " + time);
        Promise.resolve(index);
    }, time*1000);
}

// transform it to Proxyl

function promiseFunc(){
    return new Promise(function(resolve, reject){
        asyncFunc();
        resolve("haha");
    });
}

// wrap these functions

function checkmewhenyoufinish(resolve){
    console.log("checkme");
    // what to do next ?
    
    asyncFunc()
}


Promise.resolve().then(function(resolve){console.log("haha");resolve("kaka");}).then(function(result){console.log(result)});