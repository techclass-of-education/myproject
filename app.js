const express =require("express")

const app=express()

// CRUD  create(insert)  Retrive(select)  Update  delete
// app.get()  //  Retrive(select)

// app.post() //  create(insert) 

// app.delete()  //delete
// from sourabh
// app.head()  // get some information

// app.put()   // update 


app.get("/",(req,res)=>
{
    // res.sendFile()
    res.send("<h1>Serever is started....</h1>")
    
})

app.get("/about",(req,res)=>
{
    // res.sendFile()
    res.send("<h1>About page....</h1>")
    
})

app.get("/contact",(req,res)=>
{
    // res.sendFile()
    res.send("<h1>Contact page....</h1>")
    
})

const port =3000
const host="localhost"
app.listen(port,()=>
{
    console.log(`Server started on http://${host}:${port}`)
})

