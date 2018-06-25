// 应答式写入
// var db = connect('company')

// db.workmate.update({sex:1},{$set:{money:1000}},false,true)
// var resultMessage = db.runCommand({getLastError:1})
// printjson(resultMessage)

var myModify = {
    findAndModify:"workmate",
    query:{name:"JSPang"},
    update:{$set:{age:18}},
    new:true
}

var resultMessage = db.runCommand(myModify);
printjson(resultMessage)