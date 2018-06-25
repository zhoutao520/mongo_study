var startTime = (new Date()).getTime();

var db = connect('company');
var rs = db.randomInfo.find({username:'cr2xxbhaaz8'});

rs.forEach(rs => {
    printjson(rs)
});

var endTime = (new Date()).getTime() - startTime;

print("[demo]:this run time is"+endTime+"ms")

// 建立索引
// db.randomInfo.ensureIndex({username:1})