
import express from "express"
import users from "./MOCK_DATA.json" with {type:"json"}
const app=express()
const port = 8000

// giving the data in the form of json 
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

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id)
     const user=  users.find(user=>user.id===id)
       return res.json(user)
})

.listen(port,()=>{console.log(`server started at port : ${port}`);
})