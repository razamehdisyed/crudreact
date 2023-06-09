const express = require("express")
const cors = require("cors")
const mysql = require("mysql")


const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudreact"
})
app.get("/",(req, res)=>{
    const sql = "SELECT * from users"
    db.query(sql, (err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
     })
})
app.post("/create", (req, res)=> {
    const sql = "INSERT INTO users (`name`, `email`) VALUES(?)"
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})
app.get("/update/:id",(req, res)=>{
    const id = req.params.id
    const sql = "SELECT * from users WHERE id=?"
    db.query(sql, [id],(err,data)=>{
        if(err) return res.json("Error")
        return res.json(data)
     })
})
app.put('/update/:id', (req, res)=> {
    
    const sql = 'UPDATE users SET `name` = ?, `email` = ? WHERE id = ?'
    const id = req.params.id
    const values = [
        req.body.name,
        req.body.email
    ]
        
    db.query(sql, [...values,id], (err, data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})
app.delete('/student/:id', (req, res)=> {
    
    const sql = "DELETE FROM users WHERE id = ?"
    const id = req.params.id
    
        
    db.query(sql, [id], (err, data)=>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(8081, ()=> {
    console.log("listening")
})