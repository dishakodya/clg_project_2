const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const pro = require('./pro');
const cors=require('cors');

const connectionString = "mongodb+srv://dishakodiya:disha%401105@cluster0.cgsvfsa.mongodb.net/pro?retryWrites=true&w=majority";

mongoose.connect(connectionString)
    .then(() => { 
        const app = express();
        app.use(cors());
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(express.json())

        console.log("Connected to database");

        app.get('/pro', async (req, res) => {
            
                const ans = await pro.find();
                res.json(ans);
            
        });

       app.get('/pro/:id',async(req,res)=>{
       const ans = await pro.findOne({id:req.params.id});
         res.json(ans);
       });

        app.delete('/pro/:id',async(req,res)=>{
            const ans =await pro.deleteOne({id:req.params.id})
            res.json(ans);
        });

        app.patch('/pro/:id',async(req,res)=>{
            const result= await pro.findOneAndUpdate({id:req.params.id},req.body);
            res.json(result);
        })  
        app.post('/pro/add',async(req,res)=>{
           const  ans=new pro(req.body);
            const result=await ans.save();
            res.json(result);
        })
    

        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        });
    })
            