db.createUser({
    user:"terry",
    pwd:"123456",
    customData:{
        name:'周焘',
        email:'704633203@qq.com',
        age:18,
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})

db.system.users.remove({user:"jspang"})

db.auth("terry","123456")

// mongo -u terry -p 123456 127.0.0.1:27017/admin