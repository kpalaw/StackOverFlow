let mydata= {
  "Test1":{
       "type" : "type",
       "client_id": "xyz",
       "client_secret": "xyz",
       "grant_type": "av",
       "token_uri": "url",
       "resource":"resource",
       "access_token" : "",
       "time_created":2342524,
       "time_updated":1612251593
   },

    "Test2":{
       "type" : "type",
       "client_id": "xyz",
       "client_secret": "xyz",
       "grant_type": "av",
       "token_uri": "url",
       "resource":"resource",
       "access_token" : "",
       "time_created":2342524,
       "time_updated":1612251593
   }
}

//This part shows how to access to JSON data
console.log(mydata.Test1.time_created);
console.log(mydata.Test1.time_updated);

mydata.Test1.time_created = 01;
mydata.Test1.time_updated = 02;

console.log(mydata.Test1.time_created);
console.log(mydata.Test1.time_updated);

console.log(typeof mydata.Test1.time_created);
console.log(typeof mydata.Test1.time_updated);

console.log(mydata.Test1);


//This part shows how to trigger doAThingEveryHour 
function doAThingEveryHour() {
  setTimeout(doAThingEveryHour,5*1000)//Trigger doAThingEveryHour  every 5s
  mydata.Test1.time_updated = Date.now();
  console.log("timeUpdate:" + mydata.Test1.time_updated);
}
setTimeout(doAThingEveryHour,5*1000)

