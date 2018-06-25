var db = connect('company')

// $set修改
// db.workmate.update({name:'MinJie'},{"$set":{sex:2,age:21}})

// $unset删除key
// db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})

// $inc修改数字
// db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})

//multi添加全部修改key
// db.workmate.update({},{$set:{interset:[]}},{multi:true})

//upsert
// db.workmate.update({"name":"xiaowang"},{"$set":{sex:2,age:21}},{upsert:true})

// $push 追加数组
// db.workmate.update({name:'xiaowang'},{$push:{interest:'draw'}})
// db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})

// $ne 查找是否存在 没有则修改，有则不修改。
// db.workmate.update({name:'xiaowang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})

// $addToSet查找值是否存在，没有则加入
// db.workmate.update({name:"xiaowang"},{$addToSet:{interest:"readBook"}})

// $each 批量追加
// var newInterset=["Sing","Dance","Code"];
// db.workmate.update({name:"xiaowang"},{$addToSet:{interest:{$each:newInterset}}})

// $pop 删除数组值 1:从数组末端删除，-1：从数组开端删除
// db.workmate.update({name:'xiaowang'},{$pop:{interest:1}})

// 数组定位修改
db.workmate.update({name:'xiaowang'},{$set:{"interest.2":"Code"}})

print('[update]: The data was updated successfully');