var userName = "zhoutao";
var timeStamp = Date.parse(new Date());
var jsonDatabase = {"loginName":userName,"loginTime":timeStamp};
var db = connect('log');
db.login.insert(jsonDatabase);

print('[demo]:log print success');