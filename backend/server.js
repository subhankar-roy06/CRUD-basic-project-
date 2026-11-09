const express = require('express');
const cors  = require('cors');
const mysql2 = require('mysql2');
const app = express()
// -------------------------------------------------------------------
app.use(cors());
app.use(express.json());
// -------------------------------------------------------------------
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Subho#3467",
    database: "customer",
    port:3306
})
// -------------------------------------------------------------------
app.get("/",(res,req)=>{
    const sql = "select * from customer_data";
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("error")
        }else{
            return res.json(data)
        }
    })
})
// -------------------------------------------------------------------
app.post('/customer',(res,req)=>{
    const sql = "INSERT INTO customer_data(Cust_Id, Cust_Name, Cust_Add, Amount) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.Cust_id,
        req.body.Cust_Name,
        req.body.Cust_Add,
        req.body.Amount
    ]
    db.query(sql,(err,result)=>{
        if(err){
            return res.status(500).json({error: "Something went Wrong while inserting data"})
        }else{
            return res.json(result)
        }
    })
})
// -------------------------------------------------------------------
app.patch("/customer/update",(res,req)=>{
    const sql = "UPDATE customer_data SET Cust_Name = ?, Cust_Add = ?, Amount = ? WHERE Cust_Id = ?";
    const {Cust_Name,Cust_Add,Cust_id,Amount} = req.body;
    db.query(sql,[Cust_Name,Cust_Add,Cust_id,Amount],(err,result)=>{
        if(err){
            return res.status(500).json({error:"Something went Wrong while updating data"})
        }if(result.affectedRows === 0){
            return res.status(404).json({error: "No customer found with that ID."})
        }else{
            return  res.status(200).json({ message: "Customer updated successfully." });
        }
    })
})
// -------------------------------------------------------------------
app.delete('/customer/:Cust_id',(res,req)=>{
    const sql = "Delete from customer_data where Cust_id = ?";
    const Cust_Id = req.params.Cust_Id;
    db.query(sql,[Cust_Id],(err,result)=>{
        if(err){
            return res.status(500).json({error:"Something went Wrong while deleting data"})
        }if(result.affectedRows === 0){
            return res.status(404).json({error: "No customer found with that ID."})
        }else{
            return  res.status(200).json({ message: "Customer deleted successfully." });
        }
    })
})
// -------------------------------------------------------------------
app.get('/read/:Cust_Id',(req,res)=>{
    const sql = "select * from customer_data where Cust_Id= ?";
    const Cust_Id=req.params.Cust_Id;
    db.query(sql,[Cust_Id], (err, data) => {
        if (err) return res.status(500).json({ error: "Something went wrong while fetching customer data." });
        return res.json(data);
    });
});

app.listen(3000,() =>{
    console.log("the server is running on port 3000")
});