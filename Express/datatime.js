
import express, { json } from "express"
import users from "./MOCK_DATA.json" with {type:"json"}
import fs from "fs"
const app=express()
const port = 8000

//middelware
app.use(express.json());

app.use((req,res,next)=>{

    fs.appendFile("lol.txt",`${Date.now()}:${req.method}:${req.path}\n`,
        (err,data)=>{
         next()
        }
)

})



app.use((req,res,next)=>{

    req.usernmae="harsh"
    console.log("yuhu");
    
    next()
})

app.use((req,res,next)=>{

    console.log("we at now middlware2",req.usernmae);
    next()
    
})





// giving the data in the form of  json 
app.get("/api/users",(req,res)=>{
    return res.json(users)
})
//giving the data in the form of html document 
app.get("/users",(req,res)=>{

    const data =`
     <ul>
    ${users.map(info =>`<li>${info.first_name}</li>`).join("")}
    </ul>
    `
    res.send(data)
})
//get the users id throught the changes in url

app
.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id)
     const user=  users.find(user=>user.id===id)
     if(!user){
        res.status(404).json({err:"use not found"})
     }
       return res.json(user)
}).patch((req,res)=>{
    return res.json({info:"nothing"})
}).delete((req,res)=>{
     return res.json({info:yoyo})
})

app.post("/api/users",(req,res)=>{
    const body = req.body
      
    console.log(body);
    
          users.push({...body , id:users.length+1})

      fs.writeFile("./MOCK_DATA.json" ,JSON.stringify(users) ,(err,data)=>{
        return res.status(201).json({

                status:"succesfull ",
                data: users.length  
        })
    })
    
})


.listen(port,()=>{console.log(`server started at port : ${port}`);
})