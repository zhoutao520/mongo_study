var startTime = (new Date()).getTime();
var db = connect('log');
//批量操作1
// for(let i = 0;i<1000;i++){
//     db.test.insert({num:1});
// }
//批量操作2
var tempArray = [];

for(let i = 0;i<1000;i++){
    tempArray.push({num:1});
}

db.test.insert(tempArray);

var runTime = (new Date()).getTime() - startTime;
print('[demo]This run is '+runTime+'ms');