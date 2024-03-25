var express = require("express");
// var app = express();
// app.get("/",(req,res)=>{
//     res.send("Welcome to API");
//     res.end();
// });  
// app.get("/products",(req,res)=>{
//     // res.send("Products Listing Page");
//     res.send([{Name:"TV",Price:45000},{Name:"Mobile",Price:12000.34}])
//     res.end();
// });
// app.listen(5000);
// console.log(`Server started:https:127.0.0.1:5000`);

var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;
var app =express();
var constr="mongodb://localhost:27017";
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//get method
app.get("/admin",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database =clientObj.db("ReactDB");
        database.collection("admin").find({}).toArray().then(documents=>
            {
            res.send(documents);
            res.end();
            })

})});
app.get("/categories",(req,res)=>{
    mongoClient.connect(constr).then((clientObj=>{
        var database=clientObj.db("ReactDB");
        database.collection("categories").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    }))
})
app.get("/users",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database= clientObj.db("ReactDB");
        database.collection("users").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})
app.get("/videos",(req,res)=>{
    mongoClient.connect(constr).then((clientObj)=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").find({}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})
app.get("/videos/:id",(req,res)=>{
    var id= parseInt(req.params.id);
    mongoClient.connect(constr).then((clientObj)=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").find({videoId:id}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
})
app.get("/getVideos/:categoryId",(req,res)=>{
    var id= parseInt(req.params.categoryId);
    mongoClient.connect(constr).then((clientObj)=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").find({categoryId:id}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })

})
//post method
app.post("/addCategories",(req,res)=>{
    var category={
        categoryId: parseInt(req.body.categoryId),
        categoryName: req.body.categoryName
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database= clientObj.db("ReactDB");
        database.collection("categories").insertOne(category).then(()=>{
            console.log(`Category Inserted`);
            res.end();
        })
    })

})
app.post("/registerUser",(req,res)=>{
    var user={
        userId:req.body.userId,
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        mobile:req.body.mobile
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database=clientObj.db("ReactDB");
        database.collection("users").insertOne(user).then(()=>{
            console.log(`Record inserted`);
            res.end();
        })
    })
})
app.post("/addVideos",(req,res)=>{
    var video={
        videoId:req.body.videoId,
        title:req.body.title,
        url:req.body.url,
        likes:parseInt(req.body.likes),
        dislikes:parseInt(req.body.dislikes),
        views:parseInt(req.body.views),
        categoryId:parseInt(req.body.categoryId)
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").insertOne(video).then(()=>{
            console.log(`Record Inserted`);
            res.end();
        })
    })
})

//put method
app.put("/updateVideo/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    var video={
        videoId:req.body.videoId,
        title:req.body.title,
        url:req.body.url,
        likes:parseInt(req.body.likes),
        dislikes:parseInt(req.body.dislikes),
        views:parseInt(req.body.views),
        categoryId:parseInt(req.body.categoryId)
    };
    mongoClient.connect(constr).then(clientObj=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").updateOne({videoId:id},{$set:video}).then(()=>{
            console.log(`Video Updated`);
            // res.redirect("/videos");
            res.end();
        })
    })
})

app.delete("/deleteVideo/:id",(req,res)=>{
    var id= parseInt(req.params.id);
    mongoClient.connect(constr).then(clientObj=>{
        var database= clientObj.db("ReactDB");
        database.collection("videos").deleteOne({videoId:id}).then(()=>
        {
            console.log(`Video deleted`);
            res.end();
        })
    })
})
app.listen(5000);
console.log(`Server Started:http://127.0.0.1:5000`);
